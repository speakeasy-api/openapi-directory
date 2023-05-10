# leads

### Available Operations

* [leadsAdd](#leadsadd) - Create lead
* [leadsAll](#leadsall) - List leads
* [leadsDelete](#leadsdelete) - Delete lead
* [leadsOne](#leadsone) - Get lead
* [leadsUpdate](#leadsupdate) - Update lead

## leadsAdd

Create lead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeadsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeadInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeadsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeadsAddRequest();
    $request->leadInput = new LeadInput();
    $request->leadInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->leadInput->companyId = '2';
    $request->leadInput->companyName = 'Spacex';
    $request->leadInput->contactId = '2';
    $request->leadInput->currency = CurrencyEnum::USD;
    $request->leadInput->customFields = [
        new CustomField(),
    ];
    $request->leadInput->description = 'A thinker';
    $request->leadInput->emails = [
        new Email(),
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->leadInput->fax = '+12129876543';
    $request->leadInput->firstName = 'Elon';
    $request->leadInput->language = 'EN';
    $request->leadInput->lastName = 'Musk';
    $request->leadInput->leadSource = 'Cold Call';
    $request->leadInput->monetaryAmount = 75000;
    $request->leadInput->name = 'Elon Musk';
    $request->leadInput->ownerId = '54321';
    $request->leadInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->leadInput->prefix = 'Sir';
    $request->leadInput->socialLinks = [
        new SocialLink(),
        new SocialLink(),
    ];
    $request->leadInput->status = 'New';
    $request->leadInput->tags = [
        'minus',
        'placeat',
    ];
    $request->leadInput->title = 'CEO';
    $request->leadInput->websites = [
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'iusto';
    $request->xApideckConsumerId = 'excepturi';
    $request->xApideckServiceId = 'nisi';

    $requestSecurity = new LeadsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->leads->leadsAdd($request, $requestSecurity);

    if ($response->createLeadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leadsAll

List leads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeadsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeadsFilter;
use \OpenAPI\OpenAPI\Models\Shared\LeadsSort;
use \OpenAPI\OpenAPI\Models\Shared\LeadsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeadsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeadsAllRequest();
    $request->cursor = 'recusandae';
    $request->fields = 'temporibus';
    $request->filter = new LeadsFilter();
    $request->filter->email = 'elon@tesla.com';
    $request->filter->firstName = 'Elon';
    $request->filter->lastName = 'Musk';
    $request->filter->name = 'Elon Musk';
    $request->limit = 71036;
    $request->raw = false;
    $request->sort = new LeadsSort();
    $request->sort->by = LeadsSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'veritatis';
    $request->xApideckConsumerId = 'deserunt';
    $request->xApideckServiceId = 'perferendis';

    $requestSecurity = new LeadsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->leads->leadsAll($request, $requestSecurity);

    if ($response->getLeadsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leadsDelete

Delete lead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeadsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeadsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeadsDeleteRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';
    $request->raw = false;
    $request->xApideckAppId = 'esse';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'excepturi';

    $requestSecurity = new LeadsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->leads->leadsDelete($request, $requestSecurity);

    if ($response->deleteLeadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leadsOne

Get lead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeadsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\LeadsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeadsOneRequest();
    $request->fields = 'aspernatur';
    $request->id = '05929396-fea7-4596-ab10-faaa2352c595';
    $request->raw = false;
    $request->xApideckAppId = 'minima';
    $request->xApideckConsumerId = 'excepturi';
    $request->xApideckServiceId = 'accusantium';

    $requestSecurity = new LeadsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->leads->leadsOne($request, $requestSecurity);

    if ($response->getLeadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## leadsUpdate

Update lead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LeadsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\LeadInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\LeadsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LeadsUpdateRequest();
    $request->leadInput = new LeadInput();
    $request->leadInput->addresses = [
        new Address(),
        new Address(),
    ];
    $request->leadInput->companyId = '2';
    $request->leadInput->companyName = 'Spacex';
    $request->leadInput->contactId = '2';
    $request->leadInput->currency = CurrencyEnum::USD;
    $request->leadInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->leadInput->description = 'A thinker';
    $request->leadInput->emails = [
        new Email(),
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->leadInput->fax = '+12129876543';
    $request->leadInput->firstName = 'Elon';
    $request->leadInput->language = 'EN';
    $request->leadInput->lastName = 'Musk';
    $request->leadInput->leadSource = 'Cold Call';
    $request->leadInput->monetaryAmount = 75000;
    $request->leadInput->name = 'Elon Musk';
    $request->leadInput->ownerId = '54321';
    $request->leadInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->leadInput->prefix = 'Sir';
    $request->leadInput->socialLinks = [
        new SocialLink(),
    ];
    $request->leadInput->status = 'New';
    $request->leadInput->tags = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->leadInput->title = 'CEO';
    $request->leadInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->id = 'a9467739-251a-4a52-83f5-ad019da1ffe7';
    $request->raw = false;
    $request->xApideckAppId = 'praesentium';
    $request->xApideckConsumerId = 'voluptatibus';
    $request->xApideckServiceId = 'ipsa';

    $requestSecurity = new LeadsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->leads->leadsUpdate($request, $requestSecurity);

    if ($response->updateLeadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
