<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StepInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->requestBody = new CreateWorkflowRequestBody();
    $request->requestBody->applicationConfigurationId = 'corrupti';
    $request->requestBody->description = 'provident';
    $request->requestBody->inputParameters = [
        'quibusdam' => new StepInput(),
        'unde' => new StepInput(),
        'nulla' => new StepInput(),
    ];
    $request->requestBody->name = 'Dallas Kassulke';
    $request->requestBody->stepTargets = [
        'iure',
        'magnam',
    ];
    $request->requestBody->tags = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->requestBody->templateId = 'iusto';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->createWorkflow($request);

    if ($response->createMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->