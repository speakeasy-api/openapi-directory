<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBodyServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssistantRequest();
    $request->requestBody = new CreateAssistantRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->name = 'Ellis Mitchell';
    $request->requestBody->serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration();
    $request->requestBody->serverSideEncryptionConfiguration->kmsKeyId = 'illum';
    $request->requestBody->tags = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->requestBody->type = CreateAssistantRequestBodyTypeEnum::AGENT;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->createAssistant($request);

    if ($response->createAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->