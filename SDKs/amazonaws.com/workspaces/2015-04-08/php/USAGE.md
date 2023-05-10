<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateConnectionAliasRequest();
    $request->associateConnectionAliasRequest = new AssociateConnectionAliasRequest();
    $request->associateConnectionAliasRequest->aliasId = 'corrupti';
    $request->associateConnectionAliasRequest->resourceId = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateConnectionAliasXAmzTargetEnum::WORKSPACES_SERVICE_ASSOCIATE_CONNECTION_ALIAS;

    $response = $sdk->associateConnectionAlias($request);

    if ($response->associateConnectionAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->