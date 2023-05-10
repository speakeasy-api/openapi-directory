# contacts

### Available Operations

* [addContactListItems](#addcontactlistitems) - Add contacts to a contact list
* [addDoNotContacts](#adddonotcontacts) - Add do not contact (dnc) numbers
* [createContactList](#createcontactlist) - Create contact lists
* [createContactListFromFile](#createcontactlistfromfile) - Create contact list from file
* [createContacts](#createcontacts) - Create contacts
* [deleteContact](#deletecontact) - Delete a contact
* [deleteContactList](#deletecontactlist) - Delete a contact list
* [deleteDoNotContact](#deletedonotcontact) - Delete do not contact (dnc) number. If number contains commas treat as list of numbers
* [deleteDoNotContactsBySource](#deletedonotcontactsbysource) - Delete do not contact (dnc) numbers contained in source.
* [findContactLists](#findcontactlists) - Find contact lists
* [findContacts](#findcontacts) - Find contacts
* [findDoNotContacts](#finddonotcontacts) - Find do not contact (dnc) items
* [getContact](#getcontact) - Find a specific contact
* [getContactHistory](#getcontacthistory) - Find a contact's history
* [getContactList](#getcontactlist) - Find a specific contact list
* [getContactListItems](#getcontactlistitems) - Find contacts in a contact list
* [getDoNotContact](#getdonotcontact) - Get do not contact (dnc)
* [getUniversalDoNotContacts](#getuniversaldonotcontacts) - Find universal do not contacts (udnc) associated with toNumber
* [removeContactListItem](#removecontactlistitem) - Delete a contact from a contact list
* [removeContactListItems](#removecontactlistitems) - Delete contacts from a contact list
* [updateContact](#updatecontact) - Update a contact
* [updateContactList](#updatecontactlist) - Update a contact list
* [updateDoNotContact](#updatedonotcontact) - Update an individual do not contact (dnc) number

## addContactListItems

Adds contacts to a contact list. Available contact sources are: list of the contact entities, list of ids of existing contacts in user's account, list of phone numbers in E.164 format (11-digits)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddContactListItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddContactListContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\AddContactListItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddContactListItemsRequest();
    $request->addContactListContactsRequest = new AddContactListContactsRequest();
    $request->addContactListContactsRequest->contactIds = [
        297437,
    ];
    $request->addContactListContactsRequest->contactNumbers = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->addContactListContactsRequest->contactNumbersField = 'accusamus';
    $request->addContactListContactsRequest->contacts = [
        new Contact(),
    ];
    $request->addContactListContactsRequest->useCustomFields = false;
    $request->id = 581273;

    $requestSecurity = new AddContactListItemsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->addContactListItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addDoNotContacts

Add or update a list of Do Not Contact (DNC) contact entries. Can toggle whether the DNCs are enabled for calls/texts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AddDoNotContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddDoNotContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDoNotContactRequest();
    $request->call = false;
    $request->inboundCall = false;
    $request->inboundText = false;
    $request->numbers = [
        'accusamus',
        'delectus',
    ];
    $request->source = 'quidem';
    $request->text = false;

    $requestSecurity = new AddDoNotContactsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->addDoNotContacts($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContactList

Creates a contact list for use with campaigns using 1 of 3 inputs. A List of Contact objects, a list of String E.164 numbers, or a list of CallFire contactIds can be used as the data source for the created contact list. After contact list is added into the CallFire system, contact lists goes through seven system safeguards that check the accuracy and consistency of the data. For example, our system checks that contact number is formatted correctly, is valid, is not duplicated in another contact list, or is not added on a specific DNC list. You can configure to keep/merge or remove contacts which do not complies these rules. If contacts were not added to a contact list after the validation, this means the data needs to be properly formatted and corrected before calling this API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactListRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactListRequest();
    $request->createContactListRequest = new CreateContactListRequest();
    $request->createContactListRequest->contactIds = [
        725255,
        659669,
        501324,
    ];
    $request->createContactListRequest->contactNumbers = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->createContactListRequest->contactNumbersField = 'nisi';
    $request->createContactListRequest->contacts = [
        new Contact(),
        new Contact(),
    ];
    $request->createContactListRequest->name = 'Ms. Arturo Krajcik';
    $request->createContactListRequest->useCustomFields = false;
    $request->fields = 'distinctio';

    $requestSecurity = new CreateContactListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->createContactList($request, $requestSecurity);

    if ($response->contactList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContactListFromFile

Creates a contact list to be used with campaigns through uploading a .csv file. Returns the id of created list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListFromFileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListFromFileRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactListFromFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactListFromFileRequestBody();
    $request->file = new CreateContactListFromFileRequestBodyFile();
    $request->file->content = 'id';
    $request->file->file = 'labore';
    $request->name = 'Laurie Mosciski';
    $request->useCustomFields = false;

    $requestSecurity = new CreateContactListFromFileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->createContactListFromFile($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContacts

Creates contacts in CallFire system. Only values from the next list can be used as external system parameter in contact creation: **NATION_BUILDER, SALES_FORCE_CONTACTS, SALES_FORCE_LEADS, SALES_FORCE_REPORTS, ZOHO, MAIL_CHIMP**. See [contacts validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new Contact(),
        new Contact(),
        new Contact(),
        new Contact(),
    ]

    $requestSecurity = new CreateContactsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->createContacts($request, $requestSecurity);

    if ($response->resourceIdList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContact

Deletes a contact instance from account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactRequest();
    $request->id = 135474;

    $requestSecurity = new DeleteContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->deleteContact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContactList

Deletes a contact list, included contacts will not be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactListRequest();
    $request->id = 102863;

    $requestSecurity = new DeleteContactListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->deleteContactList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDoNotContact

Delete a Do Not Contact (DNC) contact entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDoNotContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDoNotContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDoNotContactRequest();
    $request->number = 'magnam';

    $requestSecurity = new DeleteDoNotContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->deleteDoNotContact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDoNotContactsBySource

Delete Do Not Contact (DNC) contact entries contained in source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDoNotContactsBySourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDoNotContactsBySourceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDoNotContactsBySourceRequest();
    $request->source = 'et';

    $requestSecurity = new DeleteDoNotContactsBySourceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->deleteDoNotContactsBySource($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findContactLists

Searches for all contact lists which are available for the current user. Returns a paged list of contact lists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindContactListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindContactListsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindContactListsRequest();
    $request->contactCount = 569965;
    $request->exactMatch = false;
    $request->fields = 'ullam';
    $request->limit = 590873;
    $request->name = 'Kirk Bartoletti';
    $request->offset = 652103;
    $request->orderBy = 'ad';

    $requestSecurity = new FindContactListsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->findContactLists($request, $requestSecurity);

    if ($response->contactListPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findContacts

Find user's contacts by id, contact list, or on any property name. Returns a paged list of contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindContactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindContactsRequest();
    $request->contactListId = 431418;
    $request->fields = 'dolor';
    $request->id = [
        141264,
        367562,
        97260,
        435865,
    ];
    $request->limit = 984043;
    $request->number = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->offset = 447926;
    $request->propertyName = 'architecto';
    $request->propertyValue = 'architecto';

    $requestSecurity = new FindContactsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->findContacts($request, $requestSecurity);

    if ($response->contactPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findDoNotContacts

Searches for all Do Not Contact (DNC) objects created by user. These DoNotContact entries only affect calls/texts/campaigns on this account. Returns a paged list of DoNotContact objects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindDoNotContactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindDoNotContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindDoNotContactsRequest();
    $request->call = false;
    $request->campaignId = 919483;
    $request->fields = 'ullam';
    $request->inboundCall = false;
    $request->inboundText = false;
    $request->limit = 714242;
    $request->number = [
        'repellat',
        'quibusdam',
    ];
    $request->offset = 149448;
    $request->prefix = 'saepe';
    $request->source = 'pariatur';
    $request->text = false;

    $requestSecurity = new FindDoNotContactsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->findDoNotContacts($request, $requestSecurity);

    if ($response->doNotContactPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact

Returns a Contact instance for a given contact id. Deleted contacts can be still retrieved but will be marked as deleted. Deleted contacts will not be shown in search request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactRequest();
    $request->fields = 'accusantium';
    $request->id = 162493;

    $requestSecurity = new GetContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getContact($request, $requestSecurity);

    if ($response->contact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactHistory

Searches for all texts and calls attributed to a contact. Returns a list of calls and texts a contact has been involved with

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactHistoryRequest();
    $request->fields = 'praesentium';
    $request->id = 615560;
    $request->limit = 166847;
    $request->offset = 123820;

    $requestSecurity = new GetContactHistorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getContactHistory($request, $requestSecurity);

    if ($response->contactHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactList

Returns a single ContactList instance for a given contact list id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactListRequest();
    $request->fields = 'quo';
    $request->id = 848009;

    $requestSecurity = new GetContactListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getContactList($request, $requestSecurity);

    if ($response->contactList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactListItems

Searches for all entries in a contact list with specified id. Returns a paged list of contact entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactListItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactListItemsRequest();
    $request->fields = 'pariatur';
    $request->id = 807319;
    $request->limit = 411397;
    $request->offset = 569101;

    $requestSecurity = new GetContactListItemsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getContactListItems($request, $requestSecurity);

    if ($response->contactPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDoNotContact

Get Do Not Contact (DNC) object create by user. This DoNotContact entry only affects calls/texts/campaigns on this account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDoNotContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDoNotContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDoNotContactRequest();
    $request->number = 'odit';

    $requestSecurity = new GetDoNotContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getDoNotContact($request, $requestSecurity);

    if ($response->doNotContact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUniversalDoNotContacts

Searches for a UniversalDoNotContact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUniversalDoNotContactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUniversalDoNotContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUniversalDoNotContactsRequest();
    $request->fields = 'ea';
    $request->fromNumber = 'accusantium';
    $request->toNumber = 'ab';

    $requestSecurity = new GetUniversalDoNotContactsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->getUniversalDoNotContacts($request, $requestSecurity);

    if ($response->itemListUniversalDoNotContact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeContactListItem

Deletes a single contact from a contact list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveContactListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveContactListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveContactListItemRequest();
    $request->contactId = 982575;
    $request->id = 697429;

    $requestSecurity = new RemoveContactListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->removeContactListItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeContactListItems

Deletes contacts from a contact list. List the contact ids in request to delete multiple contacts with one request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveContactListItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveContactListItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveContactListItemsRequest();
    $request->contactId = [
        453543,
        420075,
    ];
    $request->id = 722056;

    $requestSecurity = new RemoveContactListItemsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->removeContactListItems($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContact

Updates a single contact instance with id specified. See [contact validation rules](https://www.callfire.com/help/docs/getting-started/managing-contacts/validating-contacts#section1)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactRequest();
    $request->contact = new Contact();
    $request->contact->deleted = false;
    $request->contact->externalId = 'eaque';
    $request->contact->externalSystem = 'pariatur';
    $request->contact->extraPhone1 = 'nemo';
    $request->contact->extraPhone2 = 'voluptatibus';
    $request->contact->extraPhone3 = 'perferendis';
    $request->contact->firstName = 'Russ';
    $request->contact->homePhone = 'amet';
    $request->contact->id = 11714;
    $request->contact->lastName = 'Runolfsdottir';
    $request->contact->mobilePhone = 'corporis';
    $request->contact->properties = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->contact->workPhone = 'nesciunt';
    $request->contact->zipcode = '01742';
    $request->id = 874573;

    $requestSecurity = new UpdateContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->updateContact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContactList

Updates contact list instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactListRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactListRequest();
    $request->updateContactListRequest = new UpdateContactListRequest();
    $request->updateContactListRequest->name = 'Mindy Walter';
    $request->id = 596656;

    $requestSecurity = new UpdateContactListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->updateContactList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDoNotContact

Update a Do Not Contact (DNC) contact entry. Can toggle whether the DNC is enabled for calls/texts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDoNotContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DoNotContactInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDoNotContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDoNotContactRequest();
    $request->doNotContactInput = new DoNotContactInput();
    $request->doNotContactInput->call = false;
    $request->doNotContactInput->inboundCall = false;
    $request->doNotContactInput->inboundText = false;
    $request->doNotContactInput->number = 'voluptatem';
    $request->doNotContactInput->source = 'porro';
    $request->doNotContactInput->text = false;
    $request->number = 'consequuntur';

    $requestSecurity = new UpdateDoNotContactSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contacts->updateDoNotContact($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
