<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateActionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBodyLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateCloudWatchLogsLogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateS3LogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateStopConditionInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateTargetInputFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentTemplateRequest();
    $request->requestBody = new CreateExperimentTemplateRequestBody();
    $request->requestBody->actions = [
        'provident' => new CreateExperimentTemplateActionInput(),
        'distinctio' => new CreateExperimentTemplateActionInput(),
        'quibusdam' => new CreateExperimentTemplateActionInput(),
    ];
    $request->requestBody->clientToken = 'unde';
    $request->requestBody->description = 'nulla';
    $request->requestBody->logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration->logGroupArn = 'corrupti';
    $request->requestBody->logConfiguration->logSchemaVersion = 847252;
    $request->requestBody->logConfiguration->s3Configuration = new ExperimentTemplateS3LogConfigurationInput();
    $request->requestBody->logConfiguration->s3Configuration->bucketName = 'vel';
    $request->requestBody->logConfiguration->s3Configuration->prefix = 'error';
    $request->requestBody->roleArn = 'deserunt';
    $request->requestBody->stopConditions = [
        new CreateExperimentTemplateStopConditionInput(),
        new CreateExperimentTemplateStopConditionInput(),
    ];
    $request->requestBody->tags = [
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->requestBody->targets = [
        'suscipit' => new CreateExperimentTemplateTargetInput(),
        'molestiae' => new CreateExperimentTemplateTargetInput(),
    ];
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->createExperimentTemplate($request);

    if ($response->createExperimentTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->