<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchInferenceJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobInput;
use \OpenAPI\OpenAPI\Models\Shared\S3DataConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchInferenceJobOutput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchInferenceJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchInferenceJobRequest();
    $request->createBatchInferenceJobRequest = new CreateBatchInferenceJobRequest();
    $request->createBatchInferenceJobRequest->batchInferenceJobConfig = new BatchInferenceJobConfig();
    $request->createBatchInferenceJobRequest->batchInferenceJobConfig->itemExplorationConfig = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->createBatchInferenceJobRequest->filterArn = 'illum';
    $request->createBatchInferenceJobRequest->jobInput = new BatchInferenceJobInput();
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource = new S3DataConfig();
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource->kmsKeyArn = 'vel';
    $request->createBatchInferenceJobRequest->jobInput->s3DataSource->path = 'error';
    $request->createBatchInferenceJobRequest->jobName = 'deserunt';
    $request->createBatchInferenceJobRequest->jobOutput = new BatchInferenceJobOutput();
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination = new S3DataConfig();
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination->kmsKeyArn = 'suscipit';
    $request->createBatchInferenceJobRequest->jobOutput->s3DataDestination->path = 'iure';
    $request->createBatchInferenceJobRequest->numResults = 297534;
    $request->createBatchInferenceJobRequest->roleArn = 'debitis';
    $request->createBatchInferenceJobRequest->solutionVersionArn = 'ipsa';
    $request->createBatchInferenceJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = CreateBatchInferenceJobXAmzTargetEnum::AMAZON_PERSONALIZE_CREATE_BATCH_INFERENCE_JOB;

    $response = $sdk->createBatchInferenceJob($request);

    if ($response->createBatchInferenceJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->