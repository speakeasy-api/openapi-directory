# apIs

### Available Operations

* [adcrd](#adcrd) - Admit Card

## adcrd

API to verify Admit Card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdcrdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AdcrdRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\AdcrdRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdcrdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdcrdRequestBody();
    $request->certificateParameters = new AdcrdRequestBodyCertificateParameters();
    $request->certificateParameters->dob = '31-12-1980';
    $request->certificateParameters->prnNo = 'MA90120190002';
    $request->certificateParameters->requestId = '1234';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = 'f5ad019d-a1ff-4e78-b097-b0074f15471b';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = '69802d50-2a94-4bb4-b63c-969e9a3efa77';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'illum';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-26T01:41:04.216Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T10:27:07.590Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 7670.24;
    $request->consentArtifact->consent->permission->frequency->unit = 'facere';
    $request->consentArtifact->consent->permission->frequency->value = 4118.2;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'aliquid';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-28T19:04:18.797Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Kristian_Haley69@gmail.com';
    $request->consentArtifact->consent->user->idNumber = 'provident';
    $request->consentArtifact->consent->user->idType = 'nam';
    $request->consentArtifact->consent->user->mobile = '1-659-363-4664 x0437';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'id';
    $request->format = AdcrdRequestBodyFormatEnum::XML;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new AdcrdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->adcrd($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
