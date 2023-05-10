<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToOnPremisesInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToOnPremisesInstancesInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToOnPremisesInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToOnPremisesInstancesRequest();
    $request->addTagsToOnPremisesInstancesInput = new AddTagsToOnPremisesInstancesInput();
    $request->addTagsToOnPremisesInstancesInput->instanceNames = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->addTagsToOnPremisesInstancesInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = AddTagsToOnPremisesInstancesXAmzTargetEnum::CODE_DEPLOY20141006_ADD_TAGS_TO_ON_PREMISES_INSTANCES;

    $response = $sdk->addTagsToOnPremisesInstances($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->