# companies

### Available Operations

* [companiesAdd](#companiesadd) - Create Company
* [companiesAll](#companiesall) - List Companies
* [companiesDelete](#companiesdelete) - Delete Company
* [companiesOne](#companiesone) - Get Company
* [companiesUpdate](#companiesupdate) - Update Company

## companiesAdd

Create Company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesAddRequest();
    $request->hrisCompanyInput = new HrisCompanyInput();
    $request->hrisCompanyInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->hrisCompanyInput->companyNumber = '123456-AB';
    $request->hrisCompanyInput->debtorId = '12345';
    $request->hrisCompanyInput->displayName = 'SpaceX';
    $request->hrisCompanyInput->emails = [
        new Email(),
        new Email(),
    ];
    $request->hrisCompanyInput->legalName = 'SpaceX';
    $request->hrisCompanyInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->hrisCompanyInput->status = HrisCompanyStatusEnum::ACTIVE;
    $request->hrisCompanyInput->subdomain = 'company';
    $request->hrisCompanyInput->websites = [
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'suscipit';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new CompaniesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesAdd($request, $requestSecurity);

    if ($response->createHrisCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesAll

List Companies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesAllRequest();
    $request->cursor = 'debitis';
    $request->fields = 'ipsa';
    $request->limit = 963663;
    $request->raw = false;
    $request->xApideckAppId = 'tempora';
    $request->xApideckConsumerId = 'suscipit';
    $request->xApideckServiceId = 'molestiae';

    $requestSecurity = new CompaniesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesAll($request, $requestSecurity);

    if ($response->getHrisCompaniesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesDelete

Delete Company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesDeleteRequest();
    $request->id = 'cc8796ed-151a-405d-bc2d-df7cc78ca1ba';
    $request->raw = false;
    $request->xApideckAppId = 'occaecati';
    $request->xApideckConsumerId = 'fugit';
    $request->xApideckServiceId = 'deleniti';

    $requestSecurity = new CompaniesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesDelete($request, $requestSecurity);

    if ($response->deleteHrisCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesOne

Get Company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesOneRequest();
    $request->fields = 'hic';
    $request->id = 'c816742c-b739-4205-9293-96fea7596eb1';
    $request->raw = false;
    $request->xApideckAppId = 'ipsa';
    $request->xApideckConsumerId = 'reiciendis';
    $request->xApideckServiceId = 'est';

    $requestSecurity = new CompaniesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesOne($request, $requestSecurity);

    if ($response->getHrisCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesUpdate

Update Company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesUpdateRequest();
    $request->hrisCompanyInput = new HrisCompanyInput();
    $request->hrisCompanyInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->hrisCompanyInput->companyNumber = '123456-AB';
    $request->hrisCompanyInput->debtorId = '12345';
    $request->hrisCompanyInput->displayName = 'SpaceX';
    $request->hrisCompanyInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->hrisCompanyInput->legalName = 'SpaceX';
    $request->hrisCompanyInput->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->hrisCompanyInput->status = HrisCompanyStatusEnum::ACTIVE;
    $request->hrisCompanyInput->subdomain = 'company';
    $request->hrisCompanyInput->websites = [
        new Website(),
    ];
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';
    $request->raw = false;
    $request->xApideckAppId = 'animi';
    $request->xApideckConsumerId = 'enim';
    $request->xApideckServiceId = 'odit';

    $requestSecurity = new CompaniesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesUpdate($request, $requestSecurity);

    if ($response->updateHrisCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
