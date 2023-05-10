<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStreamRequest();
    $request->describeStreamInput = new DescribeStreamInput();
    $request->describeStreamInput->exclusiveStartShardId = 'corrupti';
    $request->describeStreamInput->limit = 592845;
    $request->describeStreamInput->streamArn = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = DescribeStreamXAmzTargetEnum::DYNAMO_DB_STREAMS20120810_DESCRIBE_STREAM;

    $response = $sdk->describeStream($request);

    if ($response->describeStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->