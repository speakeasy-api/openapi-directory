<!-- Start SDK Example Usage -->
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
    $request->name = 'Terrence Rau';
    $request->requestBody = new CreatePipeRequestBody();
    $request->requestBody->description = 'nulla';
    $request->requestBody->desiredState = CreatePipeRequestBodyDesiredStateEnum::STOPPED;
    $request->requestBody->enrichment = 'illum';
    $request->requestBody->enrichmentParameters = new CreatePipeRequestBodyEnrichmentParameters();
    $request->requestBody->enrichmentParameters->httpParameters = new PipeEnrichmentHttpParameters();
    $request->requestBody->enrichmentParameters->httpParameters->headerParameters = [
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->pathParameterValues = [
        'debitis',
        'ipsa',
    ];
    $request->requestBody->enrichmentParameters->httpParameters->queryStringParameters = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->requestBody->enrichmentParameters->inputTemplate = 'nisi';
    $request->requestBody->roleArn = 'recusandae';
    $request->requestBody->source = 'temporibus';
    $request->requestBody->sourceParameters = new CreatePipeRequestBodySourceParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters = new PipeSourceActiveMQBrokerParameters();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->batchSize = 71036;
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->activeMQBrokerParameters->credentials->basicAuth = 'quis';
    $request->requestBody->sourceParameters->activeMQBrokerParameters->maximumBatchingWindowInSeconds = 87129;
    $request->requestBody->sourceParameters->activeMQBrokerParameters->queueName = 'deserunt';
    $request->requestBody->sourceParameters->dynamoDBStreamParameters = new PipeSourceDynamoDBStreamParameters();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->batchSize = 20218;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->deadLetterConfig->arn = 'ipsam';
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumBatchingWindowInSeconds = 832620;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRecordAgeInSeconds = 957156;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->maximumRetryAttempts = 778157;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->parallelizationFactor = 140350;
    $request->requestBody->sourceParameters->dynamoDBStreamParameters->startingPosition = DynamoDBStreamStartPositionEnum::LATEST;
    $request->requestBody->sourceParameters->filterCriteria = new FilterCriteria();
    $request->requestBody->sourceParameters->filterCriteria->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->sourceParameters->kinesisStreamParameters = new PipeSourceKinesisStreamParameters();
    $request->requestBody->sourceParameters->kinesisStreamParameters->batchSize = 978619;
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->sourceParameters->kinesisStreamParameters->deadLetterConfig->arn = 'molestiae';
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumBatchingWindowInSeconds = 799159;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRecordAgeInSeconds = 800911;
    $request->requestBody->sourceParameters->kinesisStreamParameters->maximumRetryAttempts = 461479;
    $request->requestBody->sourceParameters->kinesisStreamParameters->onPartialBatchItemFailure = OnPartialBatchItemFailureStreamsEnum::AUTOMATIC_BISECT;
    $request->requestBody->sourceParameters->kinesisStreamParameters->parallelizationFactor = 520478;
    $request->requestBody->sourceParameters->kinesisStreamParameters->startingPosition = KinesisStreamStartPositionEnum::AT_TIMESTAMP;
    $request->requestBody->sourceParameters->kinesisStreamParameters->startingPositionTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T15:49:54.663Z');
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParameters();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->batchSize = 720633;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->consumerGroupID = 'officia';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials = new MSKAccessCredentials();
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->clientCertificateTlsAuth = 'occaecati';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->credentials->saslScram512Auth = 'fugit';
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->maximumBatchingWindowInSeconds = 537373;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->startingPosition = MSKStartPositionEnum::LATEST;
    $request->requestBody->sourceParameters->managedStreamingKafkaParameters->topicName = 'optio';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters = new PipeSourceRabbitMQBrokerParameters();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->batchSize = 521848;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials = new MQBrokerAccessCredentials();
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->credentials->basicAuth = 'beatae';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->maximumBatchingWindowInSeconds = 414662;
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->queueName = 'molestiae';
    $request->requestBody->sourceParameters->rabbitMQBrokerParameters->virtualHost = 'modi';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParameters();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->additionalBootstrapServers = [
        'impedit',
    ];
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->batchSize = 736918;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->consumerGroupID = 'esse';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials = new SelfManagedKafkaAccessConfigurationCredentials();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->basicAuth = 'ipsum';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->clientCertificateTlsAuth = 'excepturi';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram256Auth = 'aspernatur';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->credentials->saslScram512Auth = 'perferendis';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->maximumBatchingWindowInSeconds = 324141;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->serverRootCaCertificate = 'natus';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->startingPosition = SelfManagedKafkaStartPositionEnum::TRIM_HORIZON;
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->topicName = 'iste';
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc = new SelfManagedKafkaAccessConfigurationVpc();
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->securityGroup = [
        'natus',
    ];
    $request->requestBody->sourceParameters->selfManagedKafkaParameters->vpc->subnets = [
        'hic',
        'saepe',
    ];
    $request->requestBody->sourceParameters->sqsQueueParameters = new PipeSourceSqsQueueParameters();
    $request->requestBody->sourceParameters->sqsQueueParameters->batchSize = 681820;
    $request->requestBody->sourceParameters->sqsQueueParameters->maximumBatchingWindowInSeconds = 449950;
    $request->requestBody->tags = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->requestBody->target = 'architecto';
    $request->requestBody->targetParameters = new CreatePipeRequestBodyTargetParameters();
    $request->requestBody->targetParameters->batchJobParameters = new PipeTargetBatchJobParameters();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties = new BatchArrayProperties();
    $request->requestBody->targetParameters->batchJobParameters->arrayProperties->size = 60225;
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides = new BatchContainerOverrides();
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->command = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->environment = [
        new BatchEnvironmentVariable(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->instanceType = 'corporis';
    $request->requestBody->targetParameters->batchJobParameters->containerOverrides->resourceRequirements = [
        new BatchResourceRequirement(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->dependsOn = [
        new BatchJobDependency(),
        new BatchJobDependency(),
        new BatchJobDependency(),
        new BatchJobDependency(),
    ];
    $request->requestBody->targetParameters->batchJobParameters->jobDefinition = 'enim';
    $request->requestBody->targetParameters->batchJobParameters->jobName = 'omnis';
    $request->requestBody->targetParameters->batchJobParameters->parameters = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy = new BatchRetryStrategy();
    $request->requestBody->targetParameters->batchJobParameters->retryStrategy->attempts = 634274;
    $request->requestBody->targetParameters->cloudWatchLogsParameters = new PipeTargetCloudWatchLogsParameters();
    $request->requestBody->targetParameters->cloudWatchLogsParameters->logStreamName = 'doloribus';
    $request->requestBody->targetParameters->cloudWatchLogsParameters->timestamp = 'sapiente';
    $request->requestBody->targetParameters->ecsTaskParameters = new PipeTargetEcsTaskParameters();
    $request->requestBody->targetParameters->ecsTaskParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->enableECSManagedTags = false;
    $request->requestBody->targetParameters->ecsTaskParameters->enableExecuteCommand = false;
    $request->requestBody->targetParameters->ecsTaskParameters->group = 'mollitia';
    $request->requestBody->targetParameters->ecsTaskParameters->launchType = LaunchTypeEnum::EC2;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'repellat',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides = new EcsTaskOverride();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->containerOverrides = [
        new EcsContainerOverride(),
        new EcsContainerOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->cpu = 'molestiae';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage = new EcsEphemeralStorage();
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->ephemeralStorage->sizeInGiB = 244425;
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->executionRoleArn = 'error';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->inferenceAcceleratorOverrides = [
        new EcsInferenceAcceleratorOverride(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->memory = 'quis';
    $request->requestBody->targetParameters->ecsTaskParameters->overrides->taskRoleArn = 'vitae';
    $request->requestBody->targetParameters->ecsTaskParameters->placementConstraints = [
        new PlacementConstraint(),
        new PlacementConstraint(),
        new PlacementConstraint(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->platformVersion = 'enim';
    $request->requestBody->targetParameters->ecsTaskParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->targetParameters->ecsTaskParameters->referenceId = 'odit';
    $request->requestBody->targetParameters->ecsTaskParameters->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->targetParameters->ecsTaskParameters->taskCount = 196582;
    $request->requestBody->targetParameters->ecsTaskParameters->taskDefinitionArn = 'tenetur';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParameters();
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->detailType = 'ipsam';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->endpointId = 'id';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->resources = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->source = 'laborum';
    $request->requestBody->targetParameters->eventBridgeEventBusParameters->time = 'quasi';
    $request->requestBody->targetParameters->httpParameters = new PipeTargetHttpParameters();
    $request->requestBody->targetParameters->httpParameters->headerParameters = [
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
    ];
    $request->requestBody->targetParameters->httpParameters->pathParameterValues = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->requestBody->targetParameters->httpParameters->queryStringParameters = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->requestBody->targetParameters->inputTemplate = 'iusto';
    $request->requestBody->targetParameters->kinesisStreamParameters = new PipeTargetKinesisStreamParameters();
    $request->requestBody->targetParameters->kinesisStreamParameters->partitionKey = 'dicta';
    $request->requestBody->targetParameters->lambdaFunctionParameters = new PipeTargetLambdaFunctionParameters();
    $request->requestBody->targetParameters->lambdaFunctionParameters->invocationType = PipeTargetInvocationTypeEnum::FIRE_AND_FORGET;
    $request->requestBody->targetParameters->redshiftDataParameters = new PipeTargetRedshiftDataParameters();
    $request->requestBody->targetParameters->redshiftDataParameters->database = 'enim';
    $request->requestBody->targetParameters->redshiftDataParameters->dbUser = 'accusamus';
    $request->requestBody->targetParameters->redshiftDataParameters->secretManagerArn = 'commodi';
    $request->requestBody->targetParameters->redshiftDataParameters->sqls = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->requestBody->targetParameters->redshiftDataParameters->statementName = 'excepturi';
    $request->requestBody->targetParameters->redshiftDataParameters->withEvent = false;
    $request->requestBody->targetParameters->sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParameters();
    $request->requestBody->targetParameters->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->targetParameters->sqsQueueParameters = new PipeTargetSqsQueueParameters();
    $request->requestBody->targetParameters->sqsQueueParameters->messageDeduplicationId = 'modi';
    $request->requestBody->targetParameters->sqsQueueParameters->messageGroupId = 'praesentium';
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters = new PipeTargetStateMachineParameters();
    $request->requestBody->targetParameters->stepFunctionStateMachineParameters->invocationType = PipeTargetInvocationTypeEnum::FIRE_AND_FORGET;
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->createPipe($request);

    if ($response->createPipeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->