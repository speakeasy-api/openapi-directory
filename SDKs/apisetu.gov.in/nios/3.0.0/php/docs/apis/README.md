# apIs

### Available Operations

* [hscer](#hscer) - Class XII Marksheet
* [hsmgr](#hsmgr) - Class XII Migration Certificate
* [hvcer](#hvcer) - Class XII Provisional Certificate
* [sscer](#sscer) - Class X Marksheet
* [ssmgr](#ssmgr) - Class X Migration Certificate
* [svcer](#svcer) - Class X Provisional Certificate

## hscer

API to verify Class XII Marksheet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HscerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\HscerRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\HscerRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\HscerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HscerRequestBody();
    $request->certificateParameters = new HscerRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = '3f5ad019-da1f-4fe7-8f09-7b0074f15471';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = 'b5e6e13b-99d4-488e-9e91-e450ad2abd44';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = '269802d5-02a9-44bb-8f63-c969e9a3efa7';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'in';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-25T11:09:22.009Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T04:08:32.252Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 2974.37;
    $request->consentArtifact->consent->permission->frequency->unit = 'cumque';
    $request->consentArtifact->consent->permission->frequency->value = 8137.98;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'ea';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T11:09:12.937Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Delphine88@hotmail.com';
    $request->consentArtifact->consent->user->idNumber = 'delectus';
    $request->consentArtifact->consent->user->idType = 'quidem';
    $request->consentArtifact->consent->user->mobile = '(765) 692-6346 x6404';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'magnam';
    $request->format = HscerRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new HscerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->hscer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hsmgr

API to verify Class XII Migration Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HsmgrRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\HsmgrRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\HsmgrRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\HsmgrSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HsmgrRequestBody();
    $request->certificateParameters = new HsmgrRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = 'ba4469b6-e214-4195-9890-afa563e2516f';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = 'e4c8b711-e5b7-4fd2-ad02-8921cddc6926';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = '01fb576b-0d5f-40d3-8c5f-bb2587053202';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'minus';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T06:25:10.430Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-18T20:09:27.741Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 9441.2;
    $request->consentArtifact->consent->permission->frequency->unit = 'recusandae';
    $request->consentArtifact->consent->permission->frequency->value = 6082.53;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'facilis';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T18:10:54.422Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Casimer.Kutch@hotmail.com';
    $request->consentArtifact->consent->user->idNumber = 'occaecati';
    $request->consentArtifact->consent->user->idType = 'rerum';
    $request->consentArtifact->consent->user->mobile = '992.665.8577';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'delectus';
    $request->format = HsmgrRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new HsmgrSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->hsmgr($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## hvcer

API to verify Class XII Provisional Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HvcerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\HvcerRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\HvcerRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\HvcerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HvcerRequestBody();
    $request->certificateParameters = new HvcerRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = '48633323-f9b7-47f3-a410-0674ebf69280';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = 'd1ba77a8-9ebf-4737-ae42-03ce5e6a95d8';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = 'a0d446ce-2af7-4a73-8f3b-e453f870b326';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'libero';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-10T02:43:24.423Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-14T13:38:40.307Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 2776.28;
    $request->consentArtifact->consent->permission->frequency->unit = 'qui';
    $request->consentArtifact->consent->permission->frequency->value = 5867.84;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'maxime';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-04T22:45:05.165Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Marguerite13@gmail.com';
    $request->consentArtifact->consent->user->idNumber = 'dolores';
    $request->consentArtifact->consent->user->idType = 'distinctio';
    $request->consentArtifact->consent->user->mobile = '545.812.1141 x3790';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'cumque';
    $request->format = HvcerRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new HvcerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->hvcer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sscer

API to verify Class X Marksheet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SscerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SscerRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\SscerRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\SscerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SscerRequestBody();
    $request->certificateParameters = new SscerRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = 'bb1e31b8-b90f-4344-ba11-08e0adcf4b92';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = '1879fce9-53f7-43ef-bfbc-7abd74dd39c0';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = 'f5d2cff7-c70a-4456-a6d4-36813f16d9f5';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'sapiente';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-13T07:43:17.350Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-24T11:20:42.976Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 3592.71;
    $request->consentArtifact->consent->permission->frequency->unit = 'veniam';
    $request->consentArtifact->consent->permission->frequency->value = 3994.99;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'inventore';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T08:34:01.942Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Darion32@hotmail.com';
    $request->consentArtifact->consent->user->idNumber = 'eaque';
    $request->consentArtifact->consent->user->idType = 'a';
    $request->consentArtifact->consent->user->mobile = '205.831.8020 x6682';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'eum';
    $request->format = SscerRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new SscerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->sscer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ssmgr

API to verify Class X Migration Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SsmgrRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SsmgrRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\SsmgrRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\SsmgrSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SsmgrRequestBody();
    $request->certificateParameters = new SsmgrRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = '6c8dd6b1-4429-4074-b477-8a7bd466d28c';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = '10ab3cdc-a425-4190-8e52-3c7e0bc7178e';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = '4796f2a7-0c68-4828-aaa4-82562f222e98';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'et';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T15:37:41.657Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T03:30:08.260Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 4586.04;
    $request->consentArtifact->consent->permission->frequency->unit = 'quod';
    $request->consentArtifact->consent->permission->frequency->value = 7241.68;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'vero';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-27T21:17:41.726Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Herta_Pollich@hotmail.com';
    $request->consentArtifact->consent->user->idNumber = 'occaecati';
    $request->consentArtifact->consent->user->idType = 'minima';
    $request->consentArtifact->consent->user->mobile = '806.727.1073 x9245';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'provident';
    $request->format = SsmgrRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new SsmgrSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->ssmgr($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## svcer

API to verify Class X Provisional Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SvcerRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SvcerRequestBodyCertificateParameters;
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
use \OpenAPI\OpenAPI\Models\Operations\SvcerRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\SvcerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SvcerRequestBody();
    $request->certificateParameters = new SvcerRequestBodyCertificateParameters();
    $request->certificateParameters->fullName = 'Sunil Kumar';
    $request->certificateParameters->rroll = '0010003015';
    $request->certificateParameters->year = '2013';
    $request->consentArtifact = new ConsentArtifactSchema();
    $request->consentArtifact->consent = new ConsentArtifactSchemaConsent();
    $request->consentArtifact->consent->consentId = 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba';
    $request->consentArtifact->consent->data = new ConsentArtifactSchemaConsentData();
    $request->consentArtifact->consent->data->id = 'fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04';
    $request->consentArtifact->consent->dataConsumer = new ConsentArtifactSchemaConsentDataConsumer();
    $request->consentArtifact->consent->dataConsumer->id = 'f1575608-2d68-4ea1-9f1d-17051339d080';
    $request->consentArtifact->consent->dataProvider = new ConsentArtifactSchemaConsentDataProvider();
    $request->consentArtifact->consent->dataProvider->id = '86a18403-94c2-4607-9f93-f5f0642dac7a';
    $request->consentArtifact->consent->permission = new ConsentArtifactSchemaConsentPermission();
    $request->consentArtifact->consent->permission->access = 'asperiores';
    $request->consentArtifact->consent->permission->dateRange = new ConsentArtifactSchemaConsentPermissionDateRange();
    $request->consentArtifact->consent->permission->dateRange->from = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T03:56:05.618Z');
    $request->consentArtifact->consent->permission->dateRange->to = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T02:51:58.534Z');
    $request->consentArtifact->consent->permission->frequency = new ConsentArtifactSchemaConsentPermissionFrequency();
    $request->consentArtifact->consent->permission->frequency->repeats = 8018.36;
    $request->consentArtifact->consent->permission->frequency->unit = 'labore';
    $request->consentArtifact->consent->permission->frequency->value = 704.47;
    $request->consentArtifact->consent->purpose = new ConsentArtifactSchemaConsentPurpose();
    $request->consentArtifact->consent->purpose->description = 'adipisci';
    $request->consentArtifact->consent->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-04T08:55:11.388Z');
    $request->consentArtifact->consent->user = new ConsentArtifactSchemaConsentUser();
    $request->consentArtifact->consent->user->email = 'Delaney_Nader@yahoo.com';
    $request->consentArtifact->consent->user->idNumber = 'totam';
    $request->consentArtifact->consent->user->idType = 'fugiat';
    $request->consentArtifact->consent->user->mobile = '1-554-487-7443 x983';
    $request->consentArtifact->signature = new ConsentArtifactSchemaSignature();
    $request->consentArtifact->signature->signature = 'recusandae';
    $request->format = SvcerRequestBodyFormatEnum::PDF;
    $request->txnId = 'f7f1469c-29b0-4325-9dfc-c567200a70f7';

    $requestSecurity = new SvcerSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';
    $requestSecurity->clientId = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->svcer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
