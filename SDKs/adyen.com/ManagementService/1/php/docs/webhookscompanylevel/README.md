# webhooksCompanyLevel

### Available Operations

* [deleteCompaniesCompanyIdWebhooksWebhookId](#deletecompaniescompanyidwebhookswebhookid) - Remove a webhook
* [getCompaniesCompanyIdWebhooks](#getcompaniescompanyidwebhooks) - List all webhooks
* [getCompaniesCompanyIdWebhooksWebhookId](#getcompaniescompanyidwebhookswebhookid) - Get a webhook
* [patchCompaniesCompanyIdWebhooksWebhookId](#patchcompaniescompanyidwebhookswebhookid) - Update a webhook
* [postCompaniesCompanyIdWebhooks](#postcompaniescompanyidwebhooks) - Set up a webhook
* [postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac](#postcompaniescompanyidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postCompaniesCompanyIdWebhooksWebhookIdTest](#postcompaniescompanyidwebhookswebhookidtest) - Test a webhook

## deleteCompaniesCompanyIdWebhooksWebhookId

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompaniesCompanyIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompaniesCompanyIdWebhooksWebhookIdRequest();
    $request->companyId = 'sed';
    $request->webhookId = 'provident';

    $requestSecurity = new DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->deleteCompaniesCompanyIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdWebhooks

Lists all webhook configurations for the company account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdWebhooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdWebhooksRequest();
    $request->companyId = 'eius';
    $request->pageNumber = 896762;
    $request->pageSize = 215529;

    $requestSecurity = new GetCompaniesCompanyIdWebhooksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->getCompaniesCompanyIdWebhooks($request, $requestSecurity);

    if ($response->listWebhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdWebhooksWebhookId

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdWebhooksWebhookIdRequest();
    $request->companyId = 'ea';
    $request->webhookId = 'occaecati';

    $requestSecurity = new GetCompaniesCompanyIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->getCompaniesCompanyIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdWebhooksWebhookId

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalSettings;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyWebhookRequestCommunicationFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyWebhookRequestNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyWebhookRequestSslVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdWebhooksWebhookIdRequest();
    $request->updateCompanyWebhookRequest = new UpdateCompanyWebhookRequest();
    $request->updateCompanyWebhookRequest->acceptsExpiredCertificate = false;
    $request->updateCompanyWebhookRequest->acceptsSelfSignedCertificate = false;
    $request->updateCompanyWebhookRequest->acceptsUntrustedRootCertificate = false;
    $request->updateCompanyWebhookRequest->active = false;
    $request->updateCompanyWebhookRequest->additionalSettings = new AdditionalSettings();
    $request->updateCompanyWebhookRequest->additionalSettings->includeEventCodes = [
        'voluptatibus',
        'tempora',
        'tempora',
    ];
    $request->updateCompanyWebhookRequest->additionalSettings->properties = [
        'reiciendis' => false,
        'ex' => false,
    ];
    $request->updateCompanyWebhookRequest->communicationFormat = UpdateCompanyWebhookRequestCommunicationFormatEnum::HTTP;
    $request->updateCompanyWebhookRequest->description = 'non';
    $request->updateCompanyWebhookRequest->filterMerchantAccountType = UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum::INCLUDE_ACCOUNTS;
    $request->updateCompanyWebhookRequest->filterMerchantAccounts = [
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->updateCompanyWebhookRequest->networkType = UpdateCompanyWebhookRequestNetworkTypeEnum::LOCAL;
    $request->updateCompanyWebhookRequest->password = 'debitis';
    $request->updateCompanyWebhookRequest->populateSoapActionHeader = false;
    $request->updateCompanyWebhookRequest->sslVersion = UpdateCompanyWebhookRequestSslVersionEnum::TL_SV1;
    $request->updateCompanyWebhookRequest->url = 'sit';
    $request->updateCompanyWebhookRequest->username = 'Nestor.Muller';
    $request->companyId = 'recusandae';
    $request->webhookId = 'reiciendis';

    $requestSecurity = new PatchCompaniesCompanyIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->patchCompaniesCompanyIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdWebhooks

Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalSettings;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyWebhookRequestCommunicationFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyWebhookRequestFilterMerchantAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyWebhookRequestNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyWebhookRequestSslVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdWebhooksRequest();
    $request->createCompanyWebhookRequest = new CreateCompanyWebhookRequest();
    $request->createCompanyWebhookRequest->acceptsExpiredCertificate = false;
    $request->createCompanyWebhookRequest->acceptsSelfSignedCertificate = false;
    $request->createCompanyWebhookRequest->acceptsUntrustedRootCertificate = false;
    $request->createCompanyWebhookRequest->active = false;
    $request->createCompanyWebhookRequest->additionalSettings = new AdditionalSettings();
    $request->createCompanyWebhookRequest->additionalSettings->includeEventCodes = [
        'magni',
        'aperiam',
        'saepe',
        'numquam',
    ];
    $request->createCompanyWebhookRequest->additionalSettings->properties = [
        'in' => false,
        'officiis' => false,
    ];
    $request->createCompanyWebhookRequest->communicationFormat = CreateCompanyWebhookRequestCommunicationFormatEnum::HTTP;
    $request->createCompanyWebhookRequest->description = 'laudantium';
    $request->createCompanyWebhookRequest->filterMerchantAccountType = CreateCompanyWebhookRequestFilterMerchantAccountTypeEnum::EXCLUDE_ACCOUNTS;
    $request->createCompanyWebhookRequest->filterMerchantAccounts = [
        'cum',
        'laboriosam',
        'dolorum',
    ];
    $request->createCompanyWebhookRequest->networkType = CreateCompanyWebhookRequestNetworkTypeEnum::PUBLIC;
    $request->createCompanyWebhookRequest->password = 'error';
    $request->createCompanyWebhookRequest->populateSoapActionHeader = false;
    $request->createCompanyWebhookRequest->sslVersion = CreateCompanyWebhookRequestSslVersionEnum::TL_SV13;
    $request->createCompanyWebhookRequest->type = 'expedita';
    $request->createCompanyWebhookRequest->url = 'debitis';
    $request->createCompanyWebhookRequest->username = 'Conor_Pagac';
    $request->companyId = 'dolorum';

    $requestSecurity = new PostCompaniesCompanyIdWebhooksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->postCompaniesCompanyIdWebhooks($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest();
    $request->companyId = 'corrupti';
    $request->webhookId = 'accusamus';

    $requestSecurity = new PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac($request, $requestSecurity);

    if ($response->generateHmacKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdWebhooksWebhookIdTest

Sends sample notifications to test if the webhook is set up correctly.

We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksWebhookIdTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestCompanyWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomNotification;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdWebhooksWebhookIdTestRequest();
    $request->testCompanyWebhookRequest = new TestCompanyWebhookRequest();
    $request->testCompanyWebhookRequest->merchantIds = [
        'atque',
        'fugit',
    ];
    $request->testCompanyWebhookRequest->notification = new CustomNotification();
    $request->testCompanyWebhookRequest->notification->amount = new Amount();
    $request->testCompanyWebhookRequest->notification->amount->currency = 'ut';
    $request->testCompanyWebhookRequest->notification->amount->value = 856303;
    $request->testCompanyWebhookRequest->notification->eventCode = 'voluptatem';
    $request->testCompanyWebhookRequest->notification->eventDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-31T10:53:55.286Z');
    $request->testCompanyWebhookRequest->notification->merchantReference = 'magnam';
    $request->testCompanyWebhookRequest->notification->paymentMethod = 'consequatur';
    $request->testCompanyWebhookRequest->notification->reason = 'esse';
    $request->testCompanyWebhookRequest->notification->success = false;
    $request->testCompanyWebhookRequest->types = [
        'sit',
        'voluptatum',
    ];
    $request->companyId = 'quas';
    $request->webhookId = 'repudiandae';

    $requestSecurity = new PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksCompanyLevel->postCompaniesCompanyIdWebhooksWebhookIdTest($request, $requestSecurity);

    if ($response->testWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
