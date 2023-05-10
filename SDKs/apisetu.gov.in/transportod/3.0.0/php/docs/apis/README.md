# apIs

### Available Operations

* [drvlc](#drvlc) - Driving License
* [rvcer](#rvcer) - Registration of Vehicles

## drvlc

API to verify Driving License.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DrvlcRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DrvlcRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\DrvlcRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\DrvlcSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DrvlcRequestBody();
    $request->certificateParameters = new DrvlcRequestBodyCertificateParameters();
    $request->certificateParameters->dob = '31-12-1980';
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->uid = '123412341234';
    $request->certificateParameters->dlno = 'TN0119920009646. As per your Driving License.';
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
    $request->format = DrvlcRequestBodyFormatEnum::XML;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new DrvlcSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->drvlc($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rvcer

API to verify Registration of Vehicles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RvcerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RvcerRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\RvcerRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\RvcerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RvcerRequestBody();
    $request->certificateParameters = new RvcerRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->uid = '123412341234';
    $request->certificateParameters->chasisNo = 'MBLKC12EFBGJ08420';
    $request->certificateParameters->regNo = 'DL01AA0101';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = '469b6e21-4195-4989-8afa-563e2516fe4c';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = '8b711e5b-7fd2-4ed0-a892-1cddc692601f';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = 'b576b0d5-f0d3-40c5-bbb2-587053202c73';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'vero';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T09:30:39.477Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-05T23:06:52.311Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 7044.15;
    $request->consentArtifact->consent->permission->frequency->unit = 'perspiciatis';
    $request->consentArtifact->consent->permission->frequency->value = 318.38;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'porro';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-02T11:46:10.299Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Amber.Mayert99@yahoo.com';
    $request->consentArtifact->consent->user->idNumber = 'earum';
    $request->consentArtifact->consent->user->idType = 'modi';
    $request->consentArtifact->consent->user->mobile = '(758) 677-9353 x2221';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'ipsum';
    $request->format = RvcerRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new RvcerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->rvcer($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
