<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddSourceIdentifierToSubscriptionRequest();
    $request->action = GETAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->sourceIdentifier = 'corrupti';
    $request->subscriptionName = 'provident';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0212;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->