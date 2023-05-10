<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddAttributesToFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddAttributesToFindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Operations\AddAttributesToFindingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddAttributesToFindingsRequest();
    $request->addAttributesToFindingsRequest = new AddAttributesToFindingsRequest();
    $request->addAttributesToFindingsRequest->attributes = [
        new Attribute(),
        new Attribute(),
        new Attribute(),
    ];
    $request->addAttributesToFindingsRequest->findingArns = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = AddAttributesToFindingsXAmzTargetEnum::INSPECTOR_SERVICE_ADD_ATTRIBUTES_TO_FINDINGS;

    $response = $sdk->addAttributesToFindings($request);

    if ($response->addAttributesToFindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->