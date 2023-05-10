<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyCapacity;
use \OpenAPI\OpenAPI\Models\Shared\AutoScaling;
use \OpenAPI\OpenAPI\Models\Shared\ScaleInPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ScaleOutPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedCapacity;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyKafkaCluster;
use \OpenAPI\OpenAPI\Models\Shared\ApacheKafkaCluster;
use \OpenAPI\OpenAPI\Models\Shared\Vpc;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyKafkaClusterClientAuthentication;
use \OpenAPI\OpenAPI\Models\Shared\KafkaClusterClientAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
use \OpenAPI\OpenAPI\Models\Shared\KafkaClusterEncryptionInTransitTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\WorkerLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseLogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\S3LogDelivery;
use \OpenAPI\OpenAPI\Models\Shared\Plugin;
use \OpenAPI\OpenAPI\Models\Shared\CustomPlugin;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequestBodyWorkerConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectorRequest();
    $request->requestBody = new CreateConnectorRequestBody();
    $request->requestBody->capacity = new CreateConnectorRequestBodyCapacity();
    $request->requestBody->capacity->autoScaling = new AutoScaling();
    $request->requestBody->capacity->autoScaling->maxWorkerCount = 548814;
    $request->requestBody->capacity->autoScaling->mcuCount = 592845;
    $request->requestBody->capacity->autoScaling->minWorkerCount = 715190;
    $request->requestBody->capacity->autoScaling->scaleInPolicy = new ScaleInPolicy();
    $request->requestBody->capacity->autoScaling->scaleInPolicy->cpuUtilizationPercentage = 844266;
    $request->requestBody->capacity->autoScaling->scaleOutPolicy = new ScaleOutPolicy();
    $request->requestBody->capacity->autoScaling->scaleOutPolicy->cpuUtilizationPercentage = 602763;
    $request->requestBody->capacity->provisionedCapacity = new ProvisionedCapacity();
    $request->requestBody->capacity->provisionedCapacity->mcuCount = 857946;
    $request->requestBody->capacity->provisionedCapacity->workerCount = 544883;
    $request->requestBody->connectorConfiguration = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->requestBody->connectorDescription = 'delectus';
    $request->requestBody->connectorName = 'tempora';
    $request->requestBody->kafkaCluster = new CreateConnectorRequestBodyKafkaCluster();
    $request->requestBody->kafkaCluster->apacheKafkaCluster = new ApacheKafkaCluster();
    $request->requestBody->kafkaCluster->apacheKafkaCluster->bootstrapServers = 'suscipit';
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc = new Vpc();
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc->securityGroups = [
        'minus',
        'placeat',
    ];
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc->subnets = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->requestBody->kafkaClusterClientAuthentication = new CreateConnectorRequestBodyKafkaClusterClientAuthentication();
    $request->requestBody->kafkaClusterClientAuthentication->authenticationType = KafkaClusterClientAuthenticationTypeEnum::IAM;
    $request->requestBody->kafkaClusterEncryptionInTransit = new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit();
    $request->requestBody->kafkaClusterEncryptionInTransit->encryptionType = KafkaClusterEncryptionInTransitTypeEnum::TLS;
    $request->requestBody->kafkaConnectVersion = 'ab';
    $request->requestBody->logDelivery = new CreateConnectorRequestBodyLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery = new WorkerLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs = new CloudWatchLogsLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs->logGroup = 'quis';
    $request->requestBody->logDelivery->workerLogDelivery->firehose = new FirehoseLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->firehose->deliveryStream = 'veritatis';
    $request->requestBody->logDelivery->workerLogDelivery->firehose->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->s3 = new S3LogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->s3->bucket = 'deserunt';
    $request->requestBody->logDelivery->workerLogDelivery->s3->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->s3->prefix = 'perferendis';
    $request->requestBody->plugins = [
        new Plugin(),
        new Plugin(),
    ];
    $request->requestBody->serviceExecutionRoleArn = 'repellendus';
    $request->requestBody->workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration();
    $request->requestBody->workerConfiguration->revision = 957156;
    $request->requestBody->workerConfiguration->workerConfigurationArn = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->createConnector($request);

    if ($response->createConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->