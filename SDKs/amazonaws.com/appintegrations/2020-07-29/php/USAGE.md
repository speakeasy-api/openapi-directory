<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBodyFileConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataIntegrationRequestBodyScheduleConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataIntegrationRequest();
    $request->requestBody = new CreateDataIntegrationRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration();
    $request->requestBody->fileConfiguration->filters = [
        'quibusdam' => [
            'nulla',
            'corrupti',
            'illum',
        ],
        'vel' => [
            'deserunt',
            'suscipit',
            'iure',
        ],
        'magnam' => [
            'ipsa',
            'delectus',
            'tempora',
            'suscipit',
        ],
    ];
    $request->requestBody->fileConfiguration->folders = [
        'minus',
        'placeat',
    ];
    $request->requestBody->kmsKey = 'voluptatum';
    $request->requestBody->name = 'Miriam Huel';
    $request->requestBody->objectConfiguration = [
        'quis' => [
            'deserunt' => [
                'ipsam',
            ],
        ],
    ];
    $request->requestBody->scheduleConfig = new CreateDataIntegrationRequestBodyScheduleConfig();
    $request->requestBody->scheduleConfig->firstExecutionFrom = 'repellendus';
    $request->requestBody->scheduleConfig->object = 'sapiente';
    $request->requestBody->scheduleConfig->scheduleExpression = 'quo';
    $request->requestBody->sourceURI = 'odit';
    $request->requestBody->tags = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->createDataIntegration($request);

    if ($response->createDataIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->