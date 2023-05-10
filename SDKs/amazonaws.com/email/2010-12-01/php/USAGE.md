<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCloneReceiptRuleSetVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCloneReceiptRuleSetRequest();
    $request->action = GETCloneReceiptRuleSetActionEnum::CLONE_RECEIPT_RULE_SET;
    $request->originalRuleSetName = 'corrupti';
    $request->ruleSetName = 'provident';
    $request->version = GETCloneReceiptRuleSetVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getCloneReceiptRuleSet($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->