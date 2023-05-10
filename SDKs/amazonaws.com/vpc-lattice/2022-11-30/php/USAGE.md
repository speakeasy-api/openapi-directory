<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RuleUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RuleAction;
use \OpenAPI\OpenAPI\Models\Shared\FixedResponseAction;
use \OpenAPI\OpenAPI\Models\Shared\ForwardAction;
use \OpenAPI\OpenAPI\Models\Shared\WeightedTargetGroup;
use \OpenAPI\OpenAPI\Models\Shared\RuleMatch;
use \OpenAPI\OpenAPI\Models\Shared\HttpMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatch;
use \OpenAPI\OpenAPI\Models\Shared\HeaderMatchType;
use \OpenAPI\OpenAPI\Models\Shared\PathMatch;
use \OpenAPI\OpenAPI\Models\Shared\PathMatchType;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateRuleRequest();
    $request->requestBody = new BatchUpdateRuleRequestBody();
    $request->requestBody->rules = [
        new RuleUpdate(),
        new RuleUpdate(),
        new RuleUpdate(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->listenerIdentifier = 'vel';
    $request->serviceIdentifier = 'error';

    $response = $sdk->batchUpdateRule($request);

    if ($response->batchUpdateRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->