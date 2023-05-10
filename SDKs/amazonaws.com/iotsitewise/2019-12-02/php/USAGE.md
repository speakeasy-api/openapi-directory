<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAssetsRequest();
    $request->requestBody = new AssociateAssetsRequestBody();
    $request->requestBody->childAssetId = 'corrupti';
    $request->requestBody->clientToken = 'provident';
    $request->requestBody->hierarchyId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->assetId = 'deserunt';

    $response = $sdk->associateAssets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->