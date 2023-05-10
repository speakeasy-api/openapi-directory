<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddRoleToDBClusterVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddRoleToDBClusterRequest();
    $request->action = GETAddRoleToDBClusterActionEnum::ADD_ROLE_TO_DB_CLUSTER;
    $request->dbClusterIdentifier = 'corrupti';
    $request->featureName = 'provident';
    $request->roleArn = 'distinctio';
    $request->version = GETAddRoleToDBClusterVersionEnum::TWO_THOUSAND_AND_FOURTEEN1031;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->getAddRoleToDBCluster($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->