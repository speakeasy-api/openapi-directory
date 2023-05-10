<!-- Start SDK Example Usage -->
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
    $request->xApideckAppId = 'provident';

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
<!-- End SDK Example Usage -->