# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [leads](docs/leads/README.md)

* [leadsAdd](docs/leads/README.md#leadsadd) - Create lead
* [leadsAll](docs/leads/README.md#leadsall) - List leads
* [leadsDelete](docs/leads/README.md#leadsdelete) - Delete lead
* [leadsOne](docs/leads/README.md#leadsone) - Get lead
* [leadsUpdate](docs/leads/README.md#leadsupdate) - Update lead
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
