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
use \OpenAPI\OpenAPI\Models\Operations\AlimwRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AlimwRequestBodyCertificateParameters;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchema;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsent;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentData;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentDataConsumer;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentDataProvider;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentPermission;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentPermissionDateRange;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentPermissionFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentPurpose;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaConsentUser;
use \OpenAPI\OpenAPI\Models\Shared\ConsentArtifactSchemaSignature;
use \OpenAPI\OpenAPI\Models\Operations\AlimwRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\AlimwSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AlimwRequestBody();
    $request->certificateParameters = new AlimwRequestBodyCertificateParameters();
    $request->certificateParameters->refNo = 'BRRC/2018/236543';
    $request->certificateParameters->tokenNo = 'Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = 'cb739205-9293-496f-aa75-96eb10faaa23';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'corporis';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:59:21.675Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T03:24:11.703Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 3637.11;
    $request->consentArtifact->consent->permission->frequency->unit = 'minima';
    $request->consentArtifact->consent->permission->frequency->value = 5701.97;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'accusantium';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T11:45:33.094Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Veronica.Brakus@hotmail.com';
    $request->consentArtifact->consent->user->idNumber = 'culpa';
    $request->consentArtifact->consent->user->idType = 'consequuntur';
    $request->consentArtifact->consent->user->mobile = '752.544.2613 x16631';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'quo';
    $request->format = AlimwRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new AlimwSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->alimw($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apIs](docs/apis/README.md)

* [alimw](docs/apis/README.md#alimw) - Application for License for Inter State Migrant Workmen
* [alsbl](docs/apis/README.md#alsbl) - Application/ License for Boilers
* [alsfc](docs/apis/README.md#alsfc) - Application/ License for Factory
* [apptu](docs/apis/README.md#apptu) - Application realted to Trade Unions
* [clcer](docs/apis/README.md#clcer) - Registration Certificate for Contract Labour License
* [noocl](docs/apis/README.md#noocl) - Notice of Closure
* [srcer](docs/apis/README.md#srcer) - Registration Certificate of Shops And Commercial Establishment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
