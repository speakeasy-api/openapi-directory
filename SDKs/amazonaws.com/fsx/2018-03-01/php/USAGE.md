<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFileSystemAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFileSystemAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFileSystemAliasesRequest();
    $request->associateFileSystemAliasesRequest = new AssociateFileSystemAliasesRequest();
    $request->associateFileSystemAliasesRequest->aliases = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->associateFileSystemAliasesRequest->clientRequestToken = 'unde';
    $request->associateFileSystemAliasesRequest->fileSystemId = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AssociateFileSystemAliasesXAmzTargetEnum::AWS_SIMBA_API_SERVICE_V20180301_ASSOCIATE_FILE_SYSTEM_ALIASES;

    $response = $sdk->associateFileSystemAliases($request);

    if ($response->associateFileSystemAliasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->