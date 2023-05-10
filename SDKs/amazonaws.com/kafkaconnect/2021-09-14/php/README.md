# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createConnector](docs/sdk/README.md#createconnector) - Creates a connector using the specified properties.
* [createCustomPlugin](docs/sdk/README.md#createcustomplugin) - Creates a custom plugin using the specified properties.
* [createWorkerConfiguration](docs/sdk/README.md#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [deleteConnector](docs/sdk/README.md#deleteconnector) - Deletes the specified connector.
* [deleteCustomPlugin](docs/sdk/README.md#deletecustomplugin) - Deletes a custom plugin.
* [describeConnector](docs/sdk/README.md#describeconnector) - Returns summary information about the connector.
* [describeCustomPlugin](docs/sdk/README.md#describecustomplugin) - A summary description of the custom plugin.
* [describeWorkerConfiguration](docs/sdk/README.md#describeworkerconfiguration) - Returns information about a worker configuration.
* [listConnectors](docs/sdk/README.md#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [listCustomPlugins](docs/sdk/README.md#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [listWorkerConfigurations](docs/sdk/README.md#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [updateConnector](docs/sdk/README.md#updateconnector) - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
