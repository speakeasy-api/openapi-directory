<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDraftAppVersionResourceMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddDraftAppVersionResourceMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalResourceId;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDraftAppVersionResourceMappingsRequest();
    $request->requestBody = new AddDraftAppVersionResourceMappingsRequestBody();
    $request->requestBody->appArn = 'corrupti';
    $request->requestBody->resourceMappings = [
        new ResourceMapping(),
        new ResourceMapping(),
        new ResourceMapping(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->addDraftAppVersionResourceMappings($request);

    if ($response->addDraftAppVersionResourceMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->