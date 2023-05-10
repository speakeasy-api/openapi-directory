# contacts

### Available Operations

* [contactsAdd](#contactsadd) - Create contact
* [contactsAll](#contactsall) - List contacts
* [contactsDelete](#contactsdelete) - Delete contact
* [contactsOne](#contactsone) - Get contact
* [contactsUpdate](#contactsupdate) - Update contact

## contactsAdd

Create contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContactsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsAddRequest();
    $request->contactInput = new ContactInput();
    $request->contactInput->active = true;
    $request->contactInput->addresses = [
        new Address(),
        new Address(),
    ];
    $request->contactInput->birthday = '2000-08-12';
    $request->contactInput->companyId = '23456';
    $request->contactInput->companyName = '23456';
    $request->contactInput->currentBalance = 10.5;
    $request->contactInput->customFields = [
        new CustomField(),
        new CustomField(),
    ];
    $request->contactInput->department = 'Engineering';
    $request->contactInput->description = 'Internal champion';
    $request->contactInput->emailDomain = 'gmail.com';
    $request->contactInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->contactInput->fax = '+12129876543';
    $request->contactInput->firstName = 'Elon';
    $request->contactInput->gender = ContactGenderEnum::FEMALE;
    $request->contactInput->image = 'https://unavatar.io/elon-musk';
    $request->contactInput->language = 'EN';
    $request->contactInput->lastName = 'Musk';
    $request->contactInput->leadId = '34567';
    $request->contactInput->leadSource = 'Cold Call';
    $request->contactInput->middleName = 'D.';
    $request->contactInput->name = 'Elon Musk';
    $request->contactInput->ownerId = '54321';
    $request->contactInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->contactInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->contactInput->prefix = 'Mr.';
    $request->contactInput->socialLinks = [
        new SocialLink(),
        new SocialLink(),
    ];
    $request->contactInput->status = 'open';
    $request->contactInput->suffix = 'PhD';
    $request->contactInput->tags = [
        'aspernatur',
        'architecto',
        'magnam',
        'et',
    ];
    $request->contactInput->title = 'CEO';
    $request->contactInput->type = ContactTypeEnum::PERSONAL;
    $request->contactInput->websites = [
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'ullam';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'quos';

    $requestSecurity = new ContactsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contacts->contactsAdd($request, $requestSecurity);

    if ($response->createContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsAll

List contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContactsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactsFilter;
use \OpenAPI\OpenAPI\Models\Shared\ContactsSort;
use \OpenAPI\OpenAPI\Models\Shared\ContactsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsAllRequest();
    $request->cursor = 'sint';
    $request->fields = 'accusantium';
    $request->filter = new ContactsFilter();
    $request->filter->companyId = '12345';
    $request->filter->email = 'elon@tesla.com';
    $request->filter->firstName = 'Elon';
    $request->filter->lastName = 'Musk';
    $request->filter->name = 'Elon Musk';
    $request->limit = 653201;
    $request->raw = false;
    $request->sort = new ContactsSort();
    $request->sort->by = ContactsSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'mollitia';
    $request->xApideckConsumerId = 'ad';
    $request->xApideckServiceId = 'eum';

    $requestSecurity = new ContactsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contacts->contactsAll($request, $requestSecurity);

    if ($response->getContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsDelete

Delete contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContactsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsDeleteRequest();
    $request->id = '3e2516fe-4c8b-4711-a5b7-fd2ed028921c';
    $request->raw = false;
    $request->xApideckAppId = 'illum';
    $request->xApideckConsumerId = 'pariatur';
    $request->xApideckServiceId = 'maxime';

    $requestSecurity = new ContactsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contacts->contactsDelete($request, $requestSecurity);

    if ($response->deleteContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsOne

Get contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContactsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ContactsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsOneRequest();
    $request->fields = 'ea';
    $request->id = '92601fb5-76b0-4d5f-8d30-c5fbb2587053';
    $request->raw = false;
    $request->xApideckAppId = 'eos';
    $request->xApideckConsumerId = 'perferendis';
    $request->xApideckServiceId = 'dolores';

    $requestSecurity = new ContactsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contacts->contactsOne($request, $requestSecurity);

    if ($response->getContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contactsUpdate

Update contact

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContactsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactsUpdateRequest();
    $request->contactInput = new ContactInput();
    $request->contactInput->active = true;
    $request->contactInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->contactInput->birthday = '2000-08-12';
    $request->contactInput->companyId = '23456';
    $request->contactInput->companyName = '23456';
    $request->contactInput->currentBalance = 10.5;
    $request->contactInput->customFields = [
        new CustomField(),
        new CustomField(),
    ];
    $request->contactInput->department = 'Engineering';
    $request->contactInput->description = 'Internal champion';
    $request->contactInput->emailDomain = 'gmail.com';
    $request->contactInput->emails = [
        new Email(),
    ];
    $request->contactInput->fax = '+12129876543';
    $request->contactInput->firstName = 'Elon';
    $request->contactInput->gender = ContactGenderEnum::FEMALE;
    $request->contactInput->image = 'https://unavatar.io/elon-musk';
    $request->contactInput->language = 'EN';
    $request->contactInput->lastName = 'Musk';
    $request->contactInput->leadId = '34567';
    $request->contactInput->leadSource = 'Cold Call';
    $request->contactInput->middleName = 'D.';
    $request->contactInput->name = 'Elon Musk';
    $request->contactInput->ownerId = '54321';
    $request->contactInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->contactInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->contactInput->prefix = 'Mr.';
    $request->contactInput->socialLinks = [
        new SocialLink(),
        new SocialLink(),
    ];
    $request->contactInput->status = 'open';
    $request->contactInput->suffix = 'PhD';
    $request->contactInput->tags = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->contactInput->title = 'CEO';
    $request->contactInput->type = ContactTypeEnum::PERSONAL;
    $request->contactInput->websites = [
        new Website(),
    ];
    $request->id = 'c28909b3-fe49-4a8d-9cbf-48633323f9b7';
    $request->raw = false;
    $request->xApideckAppId = 'dignissimos';
    $request->xApideckConsumerId = 'reiciendis';
    $request->xApideckServiceId = 'amet';

    $requestSecurity = new ContactsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contacts->contactsUpdate($request, $requestSecurity);

    if ($response->updateContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
