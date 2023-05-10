<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebACLRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateWebACLRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebACLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateWebACLRequest();
    $request->associateWebACLRequest = new AssociateWebACLRequest();
    $request->associateWebACLRequest->resourceArn = 'corrupti';
    $request->associateWebACLRequest->webACLId = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateWebACLXAmzTargetEnum::AWSWAF_REGIONAL20161128_ASSOCIATE_WEB_ACL;

    $response = $sdk->associateWebACL($request);

    if ($response->associateWebACLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->