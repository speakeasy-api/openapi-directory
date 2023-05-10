<!-- Start SDK Example Usage -->
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
        new SocialLink(),
        new SocialLink(),
    ];
    $request->leadInput->status = 'New';
    $request->leadInput->tags = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->leadInput->title = 'CEO';
    $request->leadInput->websites = [
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'suscipit';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'magnam';

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
<!-- End SDK Example Usage -->