# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kafkaconnect/>
### Available Operations

* [createConnector](#createconnector) - Creates a connector using the specified properties.
* [createCustomPlugin](#createcustomplugin) - Creates a custom plugin using the specified properties.
* [createWorkerConfiguration](#createworkerconfiguration) - Creates a worker configuration using the specified properties.
* [deleteConnector](#deleteconnector) - Deletes the specified connector.
* [deleteCustomPlugin](#deletecustomplugin) - Deletes a custom plugin.
* [describeConnector](#describeconnector) - Returns summary information about the connector.
* [describeCustomPlugin](#describecustomplugin) - A summary description of the custom plugin.
* [describeWorkerConfiguration](#describeworkerconfiguration) - Returns information about a worker configuration.
* [listConnectors](#listconnectors) - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* [listCustomPlugins](#listcustomplugins) - Returns a list of all of the custom plugins in this account and Region.
* [listWorkerConfigurations](#listworkerconfigurations) - Returns a list of all of the worker configurations in this account and Region.
* [updateConnector](#updateconnector) - Updates the specified connector.

## createConnector

Creates a connector using the specified properties.

### Example Usage

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
    $request->requestBody->capacity->autoScaling->maxWorkerCount = 461479;
    $request->requestBody->capacity->autoScaling->mcuCount = 520478;
    $request->requestBody->capacity->autoScaling->minWorkerCount = 780529;
    $request->requestBody->capacity->autoScaling->scaleInPolicy = new ScaleInPolicy();
    $request->requestBody->capacity->autoScaling->scaleInPolicy->cpuUtilizationPercentage = 678880;
    $request->requestBody->capacity->autoScaling->scaleOutPolicy = new ScaleOutPolicy();
    $request->requestBody->capacity->autoScaling->scaleOutPolicy->cpuUtilizationPercentage = 118274;
    $request->requestBody->capacity->provisionedCapacity = new ProvisionedCapacity();
    $request->requestBody->capacity->provisionedCapacity->mcuCount = 720633;
    $request->requestBody->capacity->provisionedCapacity->workerCount = 639921;
    $request->requestBody->connectorConfiguration = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->requestBody->connectorDescription = 'commodi';
    $request->requestBody->connectorName = 'molestiae';
    $request->requestBody->kafkaCluster = new CreateConnectorRequestBodyKafkaCluster();
    $request->requestBody->kafkaCluster->apacheKafkaCluster = new ApacheKafkaCluster();
    $request->requestBody->kafkaCluster->apacheKafkaCluster->bootstrapServers = 'modi';
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc = new Vpc();
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc->securityGroups = [
        'impedit',
    ];
    $request->requestBody->kafkaCluster->apacheKafkaCluster->vpc->subnets = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->kafkaClusterClientAuthentication = new CreateConnectorRequestBodyKafkaClusterClientAuthentication();
    $request->requestBody->kafkaClusterClientAuthentication->authenticationType = KafkaClusterClientAuthenticationTypeEnum::NONE;
    $request->requestBody->kafkaClusterEncryptionInTransit = new CreateConnectorRequestBodyKafkaClusterEncryptionInTransit();
    $request->requestBody->kafkaClusterEncryptionInTransit->encryptionType = KafkaClusterEncryptionInTransitTypeEnum::PLAINTEXT;
    $request->requestBody->kafkaConnectVersion = 'ad';
    $request->requestBody->logDelivery = new CreateConnectorRequestBodyLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery = new WorkerLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs = new CloudWatchLogsLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->cloudWatchLogs->logGroup = 'natus';
    $request->requestBody->logDelivery->workerLogDelivery->firehose = new FirehoseLogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->firehose->deliveryStream = 'sed';
    $request->requestBody->logDelivery->workerLogDelivery->firehose->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->s3 = new S3LogDelivery();
    $request->requestBody->logDelivery->workerLogDelivery->s3->bucket = 'iste';
    $request->requestBody->logDelivery->workerLogDelivery->s3->enabled = false;
    $request->requestBody->logDelivery->workerLogDelivery->s3->prefix = 'dolor';
    $request->requestBody->plugins = [
        new Plugin(),
        new Plugin(),
        new Plugin(),
    ];
    $request->requestBody->serviceExecutionRoleArn = 'laboriosam';
    $request->requestBody->workerConfiguration = new CreateConnectorRequestBodyWorkerConfiguration();
    $request->requestBody->workerConfiguration->revision = 943749;
    $request->requestBody->workerConfiguration->workerConfigurationArn = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->createConnector($request);

    if ($response->createConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomPlugin

Creates a custom plugin using the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomPluginRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomPluginRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomPluginRequestBodyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomPluginRequestBodyLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Location;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomPluginRequest();
    $request->requestBody = new CreateCustomPluginRequestBody();
    $request->requestBody->contentType = CreateCustomPluginRequestBodyContentTypeEnum::JAR;
    $request->requestBody->description = 'ipsa';
    $request->requestBody->location = new CreateCustomPluginRequestBodyLocation();
    $request->requestBody->location->s3Location = new S3Location();
    $request->requestBody->location->s3Location->bucketArn = 'reiciendis';
    $request->requestBody->location->s3Location->fileKey = 'est';
    $request->requestBody->location->s3Location->objectVersion = 'mollitia';
    $request->requestBody->name = 'Ernest Ebert';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->createCustomPlugin($request);

    if ($response->createCustomPluginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkerConfiguration

Creates a worker configuration using the specified properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkerConfigurationRequest();
    $request->requestBody = new CreateWorkerConfigurationRequestBody();
    $request->requestBody->description = 'iure';
    $request->requestBody->name = 'Miss Aubrey Williamson';
    $request->requestBody->propertiesFileContent = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->createWorkerConfiguration($request);

    if ($response->createWorkerConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnector

Deletes the specified connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->connectorArn = 'animi';
    $request->currentVersion = 'enim';

    $response = $sdk->sdk->deleteConnector($request);

    if ($response->deleteConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomPlugin

Deletes a custom plugin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomPluginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomPluginRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->customPluginArn = 'aut';

    $response = $sdk->sdk->deleteCustomPlugin($request);

    if ($response->deleteCustomPluginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnector

Returns summary information about the connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->connectorArn = 'vero';

    $response = $sdk->sdk->describeConnector($request);

    if ($response->describeConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomPlugin

A summary description of the custom plugin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomPluginRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomPluginRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->customPluginArn = 'perferendis';

    $response = $sdk->sdk->describeCustomPlugin($request);

    if ($response->describeCustomPluginResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkerConfiguration

Returns information about a worker configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkerConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkerConfigurationRequest();
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->workerConfigurationArn = 'iusto';

    $response = $sdk->sdk->describeWorkerConfiguration($request);

    if ($response->describeWorkerConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectors

Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorsRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->connectorNamePrefix = 'ipsum';
    $request->maxResults = 692472;
    $request->nextToken = 'molestias';

    $response = $sdk->sdk->listConnectors($request);

    if ($response->listConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomPlugins

Returns a list of all of the custom plugins in this account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomPluginsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomPluginsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->maxResults = 921158;
    $request->nextToken = 'sint';

    $response = $sdk->sdk->listCustomPlugins($request);

    if ($response->listCustomPluginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkerConfigurations

Returns a list of all of the worker configurations in this account and Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerConfigurationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerConfigurationsRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->maxResults = 131797;
    $request->nextToken = 'deserunt';

    $response = $sdk->sdk->listWorkerConfigurations($request);

    if ($response->listWorkerConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnector

Updates the specified connector.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRequestBodyCapacity;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ScaleInPolicyUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ScaleOutPolicyUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedCapacityUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectorRequest();
    $request->requestBody = new UpdateConnectorRequestBody();
    $request->requestBody->capacity = new UpdateConnectorRequestBodyCapacity();
    $request->requestBody->capacity->autoScaling = new AutoScalingUpdate();
    $request->requestBody->capacity->autoScaling->maxWorkerCount = 716327;
    $request->requestBody->capacity->autoScaling->mcuCount = 841386;
    $request->requestBody->capacity->autoScaling->minWorkerCount = 289406;
    $request->requestBody->capacity->autoScaling->scaleInPolicy = new ScaleInPolicyUpdate();
    $request->requestBody->capacity->autoScaling->scaleInPolicy->cpuUtilizationPercentage = 264730;
    $request->requestBody->capacity->autoScaling->scaleOutPolicy = new ScaleOutPolicyUpdate();
    $request->requestBody->capacity->autoScaling->scaleOutPolicy->cpuUtilizationPercentage = 183191;
    $request->requestBody->capacity->provisionedCapacity = new ProvisionedCapacityUpdate();
    $request->requestBody->capacity->provisionedCapacity->mcuCount = 397821;
    $request->requestBody->capacity->provisionedCapacity->workerCount = 586513;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->connectorArn = 'dolorum';
    $request->currentVersion = 'excepturi';

    $response = $sdk->sdk->updateConnector($request);

    if ($response->updateConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
