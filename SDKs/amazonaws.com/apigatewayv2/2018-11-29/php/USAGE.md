<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyCorsConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyProtocolTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiRequest();
    $request->requestBody = new CreateApiRequestBody();
    $request->requestBody->apiKeySelectionExpression = 'corrupti';
    $request->requestBody->corsConfiguration = new CreateApiRequestBodyCorsConfiguration();
    $request->requestBody->corsConfiguration->allowCredentials = false;
    $request->requestBody->corsConfiguration->allowHeaders = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->requestBody->corsConfiguration->allowMethods = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->requestBody->corsConfiguration->allowOrigins = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->requestBody->corsConfiguration->exposeHeaders = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->requestBody->corsConfiguration->maxAge = 477665;
    $request->requestBody->credentialsArn = 'minus';
    $request->requestBody->description = 'placeat';
    $request->requestBody->disableExecuteApiEndpoint = false;
    $request->requestBody->disableSchemaValidation = false;
    $request->requestBody->name = 'Ted Mante';
    $request->requestBody->protocolType = CreateApiRequestBodyProtocolTypeEnum::HTTP;
    $request->requestBody->routeKey = 'ab';
    $request->requestBody->routeSelectionExpression = 'quis';
    $request->requestBody->tags = [
        'deserunt' => 'perferendis',
    ];
    $request->requestBody->target = 'ipsam';
    $request->requestBody->version = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->createApi($request);

    if ($response->createApiResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->