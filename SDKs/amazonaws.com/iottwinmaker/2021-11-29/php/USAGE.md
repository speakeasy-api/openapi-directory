<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutPropertyValuesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueEntry;
use \OpenAPI\OpenAPI\Models\Shared\EntityPropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\DataValue;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutPropertyValuesRequest();
    $request->requestBody = new BatchPutPropertyValuesRequestBody();
    $request->requestBody->entries = [
        new PropertyValueEntry(),
        new PropertyValueEntry(),
        new PropertyValueEntry(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->workspaceId = 'vel';

    $response = $sdk->batchPutPropertyValues($request);

    if ($response->batchPutPropertyValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->