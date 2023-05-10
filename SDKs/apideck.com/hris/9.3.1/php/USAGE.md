<!-- Start SDK Example Usage -->
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
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->hrisCompanyInput->status = HrisCompanyStatusEnum::ACTIVE;
    $request->hrisCompanyInput->subdomain = 'company';
    $request->hrisCompanyInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'unde';
    $request->xApideckConsumerId = 'nulla';
    $request->xApideckServiceId = 'corrupti';

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
<!-- End SDK Example Usage -->