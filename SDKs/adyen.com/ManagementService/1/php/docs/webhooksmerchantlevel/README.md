# webhooksMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdWebhooksWebhookId](#deletemerchantsmerchantidwebhookswebhookid) - Remove a webhook
* [getMerchantsMerchantIdWebhooks](#getmerchantsmerchantidwebhooks) - List all webhooks
* [getMerchantsMerchantIdWebhooksWebhookId](#getmerchantsmerchantidwebhookswebhookid) - Get a webhook
* [patchMerchantsMerchantIdWebhooksWebhookId](#patchmerchantsmerchantidwebhookswebhookid) - Update a webhook
* [postMerchantsMerchantIdWebhooks](#postmerchantsmerchantidwebhooks) - Set up a webhook
* [postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac](#postmerchantsmerchantidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postMerchantsMerchantIdWebhooksWebhookIdTest](#postmerchantsmerchantidwebhookswebhookidtest) - Test a webhook

## deleteMerchantsMerchantIdWebhooksWebhookId

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMerchantsMerchantIdWebhooksWebhookIdRequest();
    $request->merchantId = 'corporis';
    $request->webhookId = 'et';

    $requestSecurity = new DeleteMerchantsMerchantIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->deleteMerchantsMerchantIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdWebhooks

Lists all webhook configurations for the merchant account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdWebhooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdWebhooksRequest();
    $request->merchantId = 'blanditiis';
    $request->pageNumber = 405942;
    $request->pageSize = 153627;

    $requestSecurity = new GetMerchantsMerchantIdWebhooksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->getMerchantsMerchantIdWebhooks($request, $requestSecurity);

    if ($response->listWebhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdWebhooksWebhookId

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
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdWebhooksWebhookIdRequest();
    $request->merchantId = 'sit';
    $request->webhookId = 'vel';

    $requestSecurity = new GetMerchantsMerchantIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->getMerchantsMerchantIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdWebhooksWebhookId

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdWebhooksWebhookIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalSettings;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantWebhookRequestCommunicationFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantWebhookRequestNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantWebhookRequestSslVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdWebhooksWebhookIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdWebhooksWebhookIdRequest();
    $request->updateMerchantWebhookRequest = new UpdateMerchantWebhookRequest();
    $request->updateMerchantWebhookRequest->acceptsExpiredCertificate = false;
    $request->updateMerchantWebhookRequest->acceptsSelfSignedCertificate = false;
    $request->updateMerchantWebhookRequest->acceptsUntrustedRootCertificate = false;
    $request->updateMerchantWebhookRequest->active = false;
    $request->updateMerchantWebhookRequest->additionalSettings = new AdditionalSettings();
    $request->updateMerchantWebhookRequest->additionalSettings->includeEventCodes = [
        'saepe',
        'error',
    ];
    $request->updateMerchantWebhookRequest->additionalSettings->properties = [
        'incidunt' => false,
    ];
    $request->updateMerchantWebhookRequest->communicationFormat = UpdateMerchantWebhookRequestCommunicationFormatEnum::SOAP;
    $request->updateMerchantWebhookRequest->description = 'dolorem';
    $request->updateMerchantWebhookRequest->networkType = UpdateMerchantWebhookRequestNetworkTypeEnum::PUBLIC;
    $request->updateMerchantWebhookRequest->password = 'dicta';
    $request->updateMerchantWebhookRequest->populateSoapActionHeader = false;
    $request->updateMerchantWebhookRequest->sslVersion = UpdateMerchantWebhookRequestSslVersionEnum::HTTP;
    $request->updateMerchantWebhookRequest->url = 'occaecati';
    $request->updateMerchantWebhookRequest->username = 'Edythe_Powlowski';
    $request->merchantId = 'nam';
    $request->webhookId = 'tenetur';

    $requestSecurity = new PatchMerchantsMerchantIdWebhooksWebhookIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->patchMerchantsMerchantIdWebhooksWebhookId($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdWebhooks

Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalSettings;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantWebhookRequestCommunicationFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantWebhookRequestNetworkTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantWebhookRequestSslVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdWebhooksRequest();
    $request->createMerchantWebhookRequest = new CreateMerchantWebhookRequest();
    $request->createMerchantWebhookRequest->acceptsExpiredCertificate = false;
    $request->createMerchantWebhookRequest->acceptsSelfSignedCertificate = false;
    $request->createMerchantWebhookRequest->acceptsUntrustedRootCertificate = false;
    $request->createMerchantWebhookRequest->active = false;
    $request->createMerchantWebhookRequest->additionalSettings = new AdditionalSettings();
    $request->createMerchantWebhookRequest->additionalSettings->includeEventCodes = [
        'alias',
        'amet',
    ];
    $request->createMerchantWebhookRequest->additionalSettings->properties = [
        'voluptate' => false,
        'unde' => false,
        'reiciendis' => false,
    ];
    $request->createMerchantWebhookRequest->communicationFormat = CreateMerchantWebhookRequestCommunicationFormatEnum::JSON;
    $request->createMerchantWebhookRequest->description = 'repellendus';
    $request->createMerchantWebhookRequest->networkType = CreateMerchantWebhookRequestNetworkTypeEnum::PUBLIC;
    $request->createMerchantWebhookRequest->password = 'voluptates';
    $request->createMerchantWebhookRequest->populateSoapActionHeader = false;
    $request->createMerchantWebhookRequest->sslVersion = CreateMerchantWebhookRequestSslVersionEnum::HTTP;
    $request->createMerchantWebhookRequest->type = 'est';
    $request->createMerchantWebhookRequest->url = 'quidem';
    $request->createMerchantWebhookRequest->username = 'Ike_Schulist64';
    $request->merchantId = 'veniam';

    $requestSecurity = new PostMerchantsMerchantIdWebhooksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->postMerchantsMerchantIdWebhooks($request, $requestSecurity);

    if ($response->webhook !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest();
    $request->merchantId = 'voluptatem';
    $request->webhookId = 'quisquam';

    $requestSecurity = new PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac($request, $requestSecurity);

    if ($response->generateHmacKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdWebhooksWebhookIdTest

Sends sample notifications to test if the webhook is set up correctly.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksWebhookIdTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomNotification;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdWebhooksWebhookIdTestSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdWebhooksWebhookIdTestRequest();
    $request->testWebhookRequest = new TestWebhookRequest();
    $request->testWebhookRequest->notification = new CustomNotification();
    $request->testWebhookRequest->notification->amount = new Amount();
    $request->testWebhookRequest->notification->amount->currency = 'repudiandae';
    $request->testWebhookRequest->notification->amount->value = 97243;
    $request->testWebhookRequest->notification->eventCode = 'atque';
    $request->testWebhookRequest->notification->eventDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T05:35:56.795Z');
    $request->testWebhookRequest->notification->merchantReference = 'totam';
    $request->testWebhookRequest->notification->paymentMethod = 'suscipit';
    $request->testWebhookRequest->notification->reason = 'quidem';
    $request->testWebhookRequest->notification->success = false;
    $request->testWebhookRequest->types = [
        'et',
        'esse',
        'amet',
        'assumenda',
    ];
    $request->merchantId = 'ea';
    $request->webhookId = 'atque';

    $requestSecurity = new PostMerchantsMerchantIdWebhooksWebhookIdTestSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooksMerchantLevel->postMerchantsMerchantIdWebhooksWebhookIdTest($request, $requestSecurity);

    if ($response->testWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
