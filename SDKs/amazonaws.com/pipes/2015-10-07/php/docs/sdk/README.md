# SDK

## Overview

Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need for specialized knowledge and integration code when developing event driven architectures. This helps ensures consistency across your company’s applications. With Pipes, the target can be any available EventBridge target. To set up a pipe, you select the event source, add optional event filtering, define optional enrichment, and select the target for the event data. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/pipes/>
### Available Operations

* [createPipe](#createpipe) - Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
* [deletePipe](#deletepipe) - Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [describePipe](#describepipe) - Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [listPipes](#listpipes) - Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with a pipe.
* [startPipe](#startpipe) - Start an existing pipe.
* [stopPipe](#stoppipe) - Stop an existing pipe.
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified pipes.
* [updatePipe](#updatepipe) - <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

## createPipe

Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequestBodyDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequestBodyEnrichmentParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeEnrichmentHttpParameters;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequestBodySourceParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceActiveMQBrokerParameters;
use \OpenAPI\OpenAPI\Models\Shared\MQBrokerAccessCredentials;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceDynamoDBStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\DeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnPartialBatchItemFailureStreamsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBStreamStartPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceKinesisStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamStartPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceManagedStreamingKafkaParameters;
use \OpenAPI\OpenAPI\Models\Shared\MSKAccessCredentials;
use \OpenAPI\OpenAPI\Models\Shared\MSKStartPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceRabbitMQBrokerParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceSelfManagedKafkaParameters;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedKafkaAccessConfigurationCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedKafkaStartPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedKafkaAccessConfigurationVpc;
use \OpenAPI\OpenAPI\Models\Shared\PipeSourceSqsQueueParameters;
use \OpenAPI\OpenAPI\Models\Operations\CreatePipeRequestBodyTargetParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetBatchJobParameters;
use \OpenAPI\OpenAPI\Models\Shared\BatchArrayProperties;
use \OpenAPI\OpenAPI\Models\Shared\BatchContainerOverrides;
use \OpenAPI\OpenAPI\Models\Shared\BatchEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\BatchResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\BatchResourceRequirementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobDependency;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobDependencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetCloudWatchLogsParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetEcsTaskParameters;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsTaskOverride;
use \OpenAPI\OpenAPI\Models\Shared\EcsContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentFile;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\EcsResourceRequirementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsEphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\EcsInferenceAcceleratorOverride;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetEventBridgeEventBusParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetHttpParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetKinesisStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetLambdaFunctionParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetInvocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetRedshiftDataParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetSageMakerPipelineParameters;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameter;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetSqsQueueParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetStateMachineParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePipeRequest();
    $request->name = 'Elizabeth Orn';
    $request->requestBody = new CreatePipeRequestBody();
    $request->requestBody->description = 'deserunt';
    $request->requestBody->desiredState = CreatePipeRequestBodyDesiredStateEnum::STOPPED;
    $request->requestBody->enrichment = 'quibusdam';
    $request->requestBody->enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters();
    $request->requestBody->enrichmentParameters->httpParameters = new PipeEnrichmentHttpParameters();
    $request->requestBody->enrichmentParameters->httpParameters->headerParameters = [
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->pathParameterValues = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->queryStringParameters = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->requestBody->enrichmentParameters->inputTemplate = 'tempora';
    $request->requestBody->roleArn = 'facilis';
    $request->requestBody->source = 'tempore';
    $request->requestBody->sourceParameters = new CreatePipeRequestBodySourceParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->batchSize = 288476;
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials->basicAuth = 'delectus';
    $request->requestBody->sourceParameters->activeMQBrokerParameters->maximumBatchingWindowInSeconds = 433288;
    $request->requestBody->sourceParameters->activeMQBrokerParameters->queueName = 'non';
    $request->requestBody->sourceParameters->dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->batchSize = 756107;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig->arn = 'sint';
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumBatchingWindowInSeconds = 396098;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRecordAgeInSeconds = 592042;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRetryAttempts = 896039;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->parallelizationFactor = 572252;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->startingPosition = DynamoDBStreamStartPositionEnum::LATEST;
    $request->requestBody->sourceParameters->filterCriteria = new FilterCriteria();
    $request->requestBody->sourceParameters->filterCriteria->filters = [
        new Filter(),
    ];
    $request->requestBody->sourceParameters->kinesisStreamParameters = new PipeSourceKinesisStreamParameters();
    $request->requestBody->sourceParameters->kinesisStreamParameters->batchSize = 891555;
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig->arn = 'a';
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumBatchingWindowInSeconds = 680056;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRecordAgeInSeconds = 447125;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRetryAttempts = 449198;
    $request->requestBody->sourceParameters->kinesisStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->kinesisStreamParameters->parallelizationFactor = 846409;
    $request->requestBody->sourceParameters->kinesisStreamParameters->startingPosition = KinesisStreamStartPositionEnum::AT_TIMESTAMP;
    $request->requestBody->sourceParameters->kinesisStreamParameters->startingPositionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T04:08:32.252Z');
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->batchSize = 297437;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->consumerGroupID = 'cumque';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials = new MSKAccessCredentials();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->clientCertificateTlsAuth = 'facere';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->saslScram512Auth = 'ea';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->maximumBatchingWindowInSeconds = 396506;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->startingPosition = MSKStartPositionEnum::LATEST;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->topicName = 'accusamus';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->batchSize = 249796;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials->basicAuth = 'occaecati';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->maximumBatchingWindowInSeconds = 313218;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->queueName = 'accusamus';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->virtualHost = 'delectus';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->additionalBootstrapServers = [
        'provident',
        'nam',
        'id',
    ];
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->batchSize = 501324;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->consumerGroupID = 'deleniti';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials = new SelfManagedKafkaAccessConfigurationCredentials();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->basicAuth = 'sapiente';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->clientCertificateTlsAuth = 'amet';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram256Auth = 'deserunt';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram512Auth = 'nisi';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->maximumBatchingWindowInSeconds = 423855;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->serverRootCaCertificate = 'natus';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->startingPosition = SelfManagedKafkaStartPositionEnum::LATEST;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->topicName = 'molestiae';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc = new SelfManagedKafkaAccessConfigurationVpc();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->securityGroup = [
        'nihil',
    ];
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->subnets = [
        'distinctio',
        'id',
    ];
    $request->requestBody->sourceParameters->sqsQueueParameters = new PipeSourceSqsQueueParameters();
    $request->requestBody->sourceParameters->sqsQueueParameters->batchSize = 287991;
    $request->requestBody->sourceParameters->sqsQueueParameters->maximumBatchingWindowInSeconds = 290077;
    $request->requestBody->tags = [
        'natus' => 'nobis',
        'eum' => 'vero',
    ];
    $request->requestBody->target = 'aspernatur';
    $request->requestBody->targetParameters = new CreatePipeRequestBodyTargetParameters();
    $request->requestBody->targetParameters->batchJobParameters = new PipeTargetBatchJobParameters();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties = new BatchArrayProperties();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties->size = 102863;
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides = new BatchContainerOverrides();
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->command = [
        'et',
        'excepturi',
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->environment = [
        new BatchEnvironmentVariable(),
        new BatchEnvironmentVariable(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->instanceType = 'provident';
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->resourceRequirements = [
        new BatchResourceRequirement(),
        new BatchResourceRequirement(),
        new BatchResourceRequirement(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->dependsOn = [
        new BatchJobDependency(),
        new BatchJobDependency(),
        new BatchJobDependency(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->jobDefinition = 'accusantium';
    $request->requestBody->targetParameters->batchJobParameters->jobName = 'mollitia';
    $request->requestBody->targetParameters->batchJobParameters->parameters = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy = new BatchRetryStrategy();
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy->attempts = 435865;
    $request->requestBody->targetParameters->cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters();
    $request->requestBody->targetParameters->cloudWatchLogsParameters->logStreamName = 'doloribus';
    $request->requestBody->targetParameters->cloudWatchLogsParameters->timestamp = 'debitis';
    $request->requestBody->targetParameters->ecsTaskParameters = new PipeTargetEcsTaskParameters();
    $request->requestBody->targetParameters->ecsTaskParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->enableECSManagedTags = false;
    $request->requestBody->targetParameters->ecsTaskParameters->enableExecuteCommand = false;
    $request->requestBody->targetParameters->ecsTaskParameters->group = 'maxime';
    $request->requestBody->targetParameters->ecsTaskParameters->launchType = LaunchTypeEnum::FARGATE;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'architecto',
        'architecto',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides = new EcsTaskOverride();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->containerOverrides = [
        new EcsContainerOverride(),
        new EcsContainerOverride(),
        new EcsContainerOverride(),
        new EcsContainerOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->cpu = 'sed';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage = new EcsEphemeralStorage();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage->sizeInGiB = 904648;
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->executionRoleArn = 'pariatur';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->inferenceAcceleratorOverrides = [
        new EcsInferenceAcceleratorOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->memory = 'consequuntur';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->taskRoleArn = 'praesentium';
    $request->requestBody->targetParameters->ecsTaskParameters->placementConstraints = [
        new PlacementConstraint(),
        new PlacementConstraint(),
        new PlacementConstraint(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->placementStrategy = [
        new PlacementStrategy(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->platformVersion = 'sunt';
    $request->requestBody->targetParameters->ecsTaskParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->targetParameters->ecsTaskParameters->referenceId = 'quo';
    $request->requestBody->targetParameters->ecsTaskParameters->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->taskCount = 864934;
    $request->requestBody->targetParameters->ecsTaskParameters->taskDefinitionArn = 'maxime';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters();
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->detailType = 'ea';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->endpointId = 'excepturi';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->resources = [
        'ea',
    ];
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->source = 'accusantium';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->time = 'ab';
    $request->requestBody->targetParameters->httpParameters = new PipeTargetHttpParameters();
    $request->requestBody->targetParameters->httpParameters->headerParameters = [
        'quidem' => 'ipsam',
        'voluptate' => 'autem',
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->requestBody->targetParameters->httpParameters->pathParameterValues = [
        'perferendis',
        'fugiat',
        'amet',
        'aut',
    ];
    $request->requestBody->targetParameters->httpParameters->queryStringParameters = [
        'corporis' => 'hic',
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
    ];
    $request->requestBody->targetParameters->inputTemplate = 'eaque';
    $request->requestBody->targetParameters->kinesisStreamParameters = new PipeTargetKinesisStreamParameters();
    $request->requestBody->targetParameters->kinesisStreamParameters->partitionKey = 'quis';
    $request->requestBody->targetParameters->lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters();
    $request->requestBody->targetParameters->lambdaFunctionParameters->invocationType = PipeTargetInvocationTypeEnum::REQUEST_RESPONSE;
    $request->requestBody->targetParameters->redshiftDataParameters = new PipeTargetRedshiftDataParameters();
    $request->requestBody->targetParameters->redshiftDataParameters->database = 'eos';
    $request->requestBody->targetParameters->redshiftDataParameters->dbUser = 'perferendis';
    $request->requestBody->targetParameters->redshiftDataParameters->secretManagerArn = 'dolores';
    $request->requestBody->targetParameters->redshiftDataParameters->sqls = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->requestBody->targetParameters->redshiftDataParameters->statementName = 'hic';
    $request->requestBody->targetParameters->redshiftDataParameters->withEvent = false;
    $request->requestBody->targetParameters->sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters();
    $request->requestBody->targetParameters->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->targetParameters->sqsQueueParameters = new PipeTargetSqsQueueParameters();
    $request->requestBody->targetParameters->sqsQueueParameters->messageDeduplicationId = 'omnis';
    $request->requestBody->targetParameters->sqsQueueParameters->messageGroupId = 'facilis';
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters();
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters->invocationType = PipeTargetInvocationTypeEnum::FIRE_AND_FORGET;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->createPipe($request);

    if ($response->createPipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePipe

Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePipeRequest();
    $request->name = 'Travis Zemlak';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->deletePipe($request);

    if ($response->deletePipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePipe

Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePipeRequest();
    $request->name = 'Alex Luettgen';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->describePipe($request);

    if ($response->describePipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPipes

Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPipesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPipesCurrentStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPipesDesiredStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPipesRequest();
    $request->currentState = ListPipesCurrentStateEnum::DELETING;
    $request->desiredState = ListPipesDesiredStateEnum::RUNNING;
    $request->limit = 970237;
    $request->namePrefix = 'amet';
    $request->nextToken = 'dolorum';
    $request->sourcePrefix = 'numquam';
    $request->targetPrefix = 'veritatis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->listPipes($request);

    if ($response->listPipesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with a pipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->resourceArn = 'ab';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPipe

Start an existing pipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPipeRequest();
    $request->name = 'Omar Kris';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->startPipe($request);

    if ($response->startPipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPipe

Stop an existing pipe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopPipeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPipeRequest();
    $request->name = 'Alberta Ullrich';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->stopPipe($request);

    if ($response->stopPipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the pipe. If you specify a tag key that is already associated with the pipe, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a pipe.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'provident' => 'minima',
        'repellendus' => 'totam',
        'similique' => 'alias',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->resourceArn = 'dolorum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified pipes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->resourceArn = 'amet';
    $request->tagKeys = [
        'accusamus',
        'numquam',
        'enim',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePipe

<p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p> <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"> Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequestBodyDesiredStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequestBodyEnrichmentParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeEnrichmentHttpParameters;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequestBodySourceParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceActiveMQBrokerParameters;
use \OpenAPI\OpenAPI\Models\Shared\MQBrokerAccessCredentials;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceDynamoDBStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\DeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Shared\OnPartialBatchItemFailureStreamsEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceKinesisStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceManagedStreamingKafkaParameters;
use \OpenAPI\OpenAPI\Models\Shared\MSKAccessCredentials;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceRabbitMQBrokerParameters;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceSelfManagedKafkaParameters;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedKafkaAccessConfigurationCredentials;
use \OpenAPI\OpenAPI\Models\Shared\SelfManagedKafkaAccessConfigurationVpc;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePipeSourceSqsQueueParameters;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePipeRequestBodyTargetParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetBatchJobParameters;
use \OpenAPI\OpenAPI\Models\Shared\BatchArrayProperties;
use \OpenAPI\OpenAPI\Models\Shared\BatchContainerOverrides;
use \OpenAPI\OpenAPI\Models\Shared\BatchEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\BatchResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\BatchResourceRequirementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobDependency;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobDependencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRetryStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetCloudWatchLogsParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetEcsTaskParameters;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsTaskOverride;
use \OpenAPI\OpenAPI\Models\Shared\EcsContainerOverride;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentFile;
use \OpenAPI\OpenAPI\Models\Shared\EcsEnvironmentFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsResourceRequirement;
use \OpenAPI\OpenAPI\Models\Shared\EcsResourceRequirementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EcsEphemeralStorage;
use \OpenAPI\OpenAPI\Models\Shared\EcsInferenceAcceleratorOverride;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetEventBridgeEventBusParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetHttpParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetKinesisStreamParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetLambdaFunctionParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetInvocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetRedshiftDataParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetSageMakerPipelineParameters;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameter;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetSqsQueueParameters;
use \OpenAPI\OpenAPI\Models\Shared\PipeTargetStateMachineParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePipeRequest();
    $request->name = 'Jeannie Leannon MD';
    $request->requestBody = new UpdatePipeRequestBody();
    $request->requestBody->description = 'neque';
    $request->requestBody->desiredState = UpdatePipeRequestBodyDesiredStateEnum::RUNNING;
    $request->requestBody->enrichment = 'vel';
    $request->requestBody->enrichmentParameters = new UpdatePipeRequestBodyEnrichmentParameters();
    $request->requestBody->enrichmentParameters->httpParameters = new PipeEnrichmentHttpParameters();
    $request->requestBody->enrichmentParameters->httpParameters->headerParameters = [
        'voluptas' => 'deserunt',
        'quam' => 'ipsum',
        'incidunt' => 'qui',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->pathParameterValues = [
        'maxime',
        'pariatur',
        'soluta',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->queryStringParameters = [
        'laborum' => 'totam',
    ];
    $request->requestBody->enrichmentParameters->inputTemplate = 'incidunt';
    $request->requestBody->roleArn = 'aspernatur';
    $request->requestBody->sourceParameters = new UpdatePipeRequestBodySourceParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters = new UpdatePipeSourceActiveMQBrokerParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->batchSize = 174909;
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials->basicAuth = 'distinctio';
    $request->requestBody->sourceParameters->activeMQBrokerParameters->maximumBatchingWindowInSeconds = 704474;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters = new UpdatePipeSourceDynamoDBStreamParameters();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->batchSize = 396060;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig->arn = 'quam';
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumBatchingWindowInSeconds = 565421;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRecordAgeInSeconds = 840429;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRetryAttempts = 183280;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->parallelizationFactor = 204865;
    $request->requestBody->sourceParameters->filterCriteria = new FilterCriteria();
    $request->requestBody->sourceParameters->filterCriteria->filters = [
        new Filter(),
    ];
    $request->requestBody->sourceParameters->kinesisStreamParameters = new UpdatePipeSourceKinesisStreamParameters();
    $request->requestBody->sourceParameters->kinesisStreamParameters->batchSize = 164959;
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig->arn = 'odio';
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumBatchingWindowInSeconds = 124833;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRecordAgeInSeconds = 355613;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRetryAttempts = 722081;
    $request->requestBody->sourceParameters->kinesisStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->kinesisStreamParameters->parallelizationFactor = 940432;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters = new UpdatePipeSourceManagedStreamingKafkaParameters();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->batchSize = 30452;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials = new MSKAccessCredentials();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->clientCertificateTlsAuth = 'cumque';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->saslScram512Auth = 'soluta';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->maximumBatchingWindowInSeconds = 748664;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters = new UpdatePipeSourceRabbitMQBrokerParameters();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->batchSize = 92596;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials->basicAuth = 'saepe';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->maximumBatchingWindowInSeconds = 217450;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters = new UpdatePipeSourceSelfManagedKafkaParameters();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->batchSize = 83422;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials = new SelfManagedKafkaAccessConfigurationCredentials();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->basicAuth = 'nobis';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->clientCertificateTlsAuth = 'quos';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram256Auth = 'tempore';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram512Auth = 'cupiditate';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->maximumBatchingWindowInSeconds = 45614;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->serverRootCaCertificate = 'delectus';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc = new SelfManagedKafkaAccessConfigurationVpc();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->securityGroup = [
        'dolore',
    ];
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->subnets = [
        'adipisci',
        'dolorum',
    ];
    $request->requestBody->sourceParameters->sqsQueueParameters = new UpdatePipeSourceSqsQueueParameters();
    $request->requestBody->sourceParameters->sqsQueueParameters->batchSize = 100294;
    $request->requestBody->sourceParameters->sqsQueueParameters->maximumBatchingWindowInSeconds = 63038;
    $request->requestBody->target = 'aut';
    $request->requestBody->targetParameters = new UpdatePipeRequestBodyTargetParameters();
    $request->requestBody->targetParameters->batchJobParameters = new PipeTargetBatchJobParameters();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties = new BatchArrayProperties();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties->size = 555649;
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides = new BatchContainerOverrides();
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->command = [
        'consequatur',
        'est',
        'repellendus',
        'porro',
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->environment = [
        new BatchEnvironmentVariable(),
        new BatchEnvironmentVariable(),
        new BatchEnvironmentVariable(),
        new BatchEnvironmentVariable(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->instanceType = 'ut';
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->resourceRequirements = [
        new BatchResourceRequirement(),
        new BatchResourceRequirement(),
        new BatchResourceRequirement(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->dependsOn = [
        new BatchJobDependency(),
        new BatchJobDependency(),
        new BatchJobDependency(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->jobDefinition = 'qui';
    $request->requestBody->targetParameters->batchJobParameters->jobName = 'quae';
    $request->requestBody->targetParameters->batchJobParameters->parameters = [
        'odio' => 'occaecati',
        'voluptatibus' => 'quisquam',
        'vero' => 'omnis',
    ];
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy = new BatchRetryStrategy();
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy->attempts = 338159;
    $request->requestBody->targetParameters->cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters();
    $request->requestBody->targetParameters->cloudWatchLogsParameters->logStreamName = 'ipsum';
    $request->requestBody->targetParameters->cloudWatchLogsParameters->timestamp = 'delectus';
    $request->requestBody->targetParameters->ecsTaskParameters = new PipeTargetEcsTaskParameters();
    $request->requestBody->targetParameters->ecsTaskParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->enableECSManagedTags = false;
    $request->requestBody->targetParameters->ecsTaskParameters->enableExecuteCommand = false;
    $request->requestBody->targetParameters->ecsTaskParameters->group = 'consectetur';
    $request->requestBody->targetParameters->ecsTaskParameters->launchType = LaunchTypeEnum::EXTERNAL;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'hic',
        'distinctio',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'odio',
        'similique',
        'facilis',
        'vero',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides = new EcsTaskOverride();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->containerOverrides = [
        new EcsContainerOverride(),
        new EcsContainerOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->cpu = 'dolore';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage = new EcsEphemeralStorage();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage->sizeInGiB = 844550;
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->executionRoleArn = 'illum';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->inferenceAcceleratorOverrides = [
        new EcsInferenceAcceleratorOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->memory = 'natus';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->taskRoleArn = 'impedit';
    $request->requestBody->targetParameters->ecsTaskParameters->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->platformVersion = 'exercitationem';
    $request->requestBody->targetParameters->ecsTaskParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->targetParameters->ecsTaskParameters->referenceId = 'nulla';
    $request->requestBody->targetParameters->ecsTaskParameters->tags = [
        new Tag(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->taskCount = 780427;
    $request->requestBody->targetParameters->ecsTaskParameters->taskDefinitionArn = 'maiores';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters();
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->detailType = 'doloribus';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->endpointId = 'iusto';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->resources = [
        'ducimus',
        'alias',
        'officia',
        'tempora',
    ];
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->source = 'ipsam';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->time = 'ea';
    $request->requestBody->targetParameters->httpParameters = new PipeTargetHttpParameters();
    $request->requestBody->targetParameters->httpParameters->headerParameters = [
        'vel' => 'possimus',
    ];
    $request->requestBody->targetParameters->httpParameters->pathParameterValues = [
        'ratione',
        'ex',
    ];
    $request->requestBody->targetParameters->httpParameters->queryStringParameters = [
        'dicta' => 'dolor',
        'maiores' => 'quasi',
        'ex' => 'nulla',
    ];
    $request->requestBody->targetParameters->inputTemplate = 'excepturi';
    $request->requestBody->targetParameters->kinesisStreamParameters = new PipeTargetKinesisStreamParameters();
    $request->requestBody->targetParameters->kinesisStreamParameters->partitionKey = 'voluptatibus';
    $request->requestBody->targetParameters->lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters();
    $request->requestBody->targetParameters->lambdaFunctionParameters->invocationType = PipeTargetInvocationTypeEnum::REQUEST_RESPONSE;
    $request->requestBody->targetParameters->redshiftDataParameters = new PipeTargetRedshiftDataParameters();
    $request->requestBody->targetParameters->redshiftDataParameters->database = 'sapiente';
    $request->requestBody->targetParameters->redshiftDataParameters->dbUser = 'quisquam';
    $request->requestBody->targetParameters->redshiftDataParameters->secretManagerArn = 'saepe';
    $request->requestBody->targetParameters->redshiftDataParameters->sqls = [
        'impedit',
        'corporis',
    ];
    $request->requestBody->targetParameters->redshiftDataParameters->statementName = 'veniam';
    $request->requestBody->targetParameters->redshiftDataParameters->withEvent = false;
    $request->requestBody->targetParameters->sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters();
    $request->requestBody->targetParameters->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->targetParameters->sqsQueueParameters = new PipeTargetSqsQueueParameters();
    $request->requestBody->targetParameters->sqsQueueParameters->messageDeduplicationId = 'inventore';
    $request->requestBody->targetParameters->sqsQueueParameters->messageGroupId = 'magnam';
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters();
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters->invocationType = PipeTargetInvocationTypeEnum::REQUEST_RESPONSE;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->updatePipe($request);

    if ($response->updatePipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
