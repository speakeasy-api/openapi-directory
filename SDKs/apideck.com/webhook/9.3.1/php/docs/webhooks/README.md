# webhooks

### Available Operations

* [webhooksAdd](#webhooksadd) - Create webhook subscription
* [webhooksAll](#webhooksall) - List webhook subscriptions
* [webhooksDelete](#webhooksdelete) - Delete webhook subscription
* [webhooksExecute](#webhooksexecute) - Execute a webhook
* [webhooksOne](#webhooksone) - Get webhook subscription
* [webhooksResolve](#webhooksresolve) - Resolve and Execute a connection webhook
* [webhooksShortExecute](#webhooksshortexecute) - Execute a webhook
* [webhooksUpdate](#webhooksupdate) - Update webhook subscription

## webhooksAdd

Create a webhook subscription to receive events

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnifiedApiIdEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksAddRequest();
    $request->createWebhookRequest = new CreateWebhookRequest();
    $request->createWebhookRequest->deliveryUrl = 'https://example.com/my/webhook/endpoint';
    $request->createWebhookRequest->description = 'A description';
    $request->createWebhookRequest->events = [
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
    ];
    $request->createWebhookRequest->status = StatusEnum::ENABLED;
    $request->createWebhookRequest->unifiedApi = UnifiedApiIdEnum::CRM;
    $request->xApideckAppId = 'quibusdam';

    $requestSecurity = new WebhooksAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksAdd($request, $requestSecurity);

    if ($response->createWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksAll

List all webhook subscriptions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksAllRequest();
    $request->cursor = 'unde';
    $request->limit = 857946;
    $request->xApideckAppId = 'corrupti';

    $requestSecurity = new WebhooksAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksAll($request, $requestSecurity);

    if ($response->getWebhooksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksDelete

Delete a webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksDeleteRequest();
    $request->id = 'd69a674e-0f46-47cc-8796-ed151a05dfc2';
    $request->xApideckAppId = 'at';

    $requestSecurity = new WebhooksDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksDelete($request, $requestSecurity);

    if ($response->deleteWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksExecute

Execute a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksExecuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksExecuteRequest();
    $request->requestBody = [
        [
            'quod' => 'quod',
            'esse' => 'totam',
        ],
        [
            'dolorum' => 'dicta',
            'nam' => 'officia',
            'occaecati' => 'fugit',
            'deleniti' => 'hic',
        ],
        [
            'totam' => 'beatae',
            'commodi' => 'molestiae',
            'modi' => 'qui',
            'impedit' => 'cum',
        ],
        [
            'ipsum' => 'excepturi',
            'aspernatur' => 'perferendis',
        ],
    ];
    $request->id = '5929396f-ea75-496e-b10f-aaa2352c5955';
    $request->serviceId = 'excepturi';

    $requestSecurity = new WebhooksExecuteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksExecute($request, $requestSecurity);

    if ($response->executeWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksOne

Get the webhook subscription details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksOneRequest();
    $request->id = '07aff1a3-a2fa-4946-b739-251aa52c3f5a';
    $request->xApideckAppId = 'possimus';

    $requestSecurity = new WebhooksOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksOne($request, $requestSecurity);

    if ($response->getWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksResolve

Resolve a webhook based on lookup_id and then execute it

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksResolveRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksResolveRequest();
    $request->requestBody = [
        'error' => 'temporibus',
    ];
    $request->e = 'laborum';
    $request->id = '1ffe78f0-97b0-4074-b154-71b5e6e13b99';
    $request->serviceId = 'pariatur';

    $requestSecurity = new WebhooksResolveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksResolve($request, $requestSecurity);

    if ($response->resolveWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksShortExecute

Execute a webhook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksShortExecuteRequest;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksShortExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksShortExecuteRequest();
    $request->requestBody = [
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->e = 'itaque';
    $request->id = '450ad2ab-d442-4698-82d5-02a94bb4f63c';
    $request->lId = 'sint';
    $request->serviceId = 'aliquid';

    $requestSecurity = new WebhooksShortExecuteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksShortExecute($request, $requestSecurity);

    if ($response->executeWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webhooksUpdate

Update a webhook subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebhookEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebhooksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebhooksUpdateRequest();
    $request->updateWebhookRequest = new UpdateWebhookRequest();
    $request->updateWebhookRequest->deliveryUrl = 'https://example.com/my/webhook/endpoint';
    $request->updateWebhookRequest->description = 'A description';
    $request->updateWebhookRequest->events = [
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
        WebhookEventTypeEnum::CRM_COMPANY_CREATED,
    ];
    $request->updateWebhookRequest->status = StatusEnum::ENABLED;
    $request->id = 'e9a3efa7-7dfb-414c-966a-e395efb9ba88';
    $request->xApideckAppId = 'sapiente';

    $requestSecurity = new WebhooksUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->webhooks->webhooksUpdate($request, $requestSecurity);

    if ($response->updateWebhookResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
