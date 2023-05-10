# SDK

## Overview

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is shared id="EMR-EKS"/&gt;</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKSService Endpoints</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/emr-containers/>
### Available Operations

* [cancelJobRun](#canceljobrun) - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [createJobTemplate](#createjobtemplate) - Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [createManagedEndpoint](#createmanagedendpoint) - Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [createVirtualCluster](#createvirtualcluster) - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [deleteJobTemplate](#deletejobtemplate) - Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [deleteManagedEndpoint](#deletemanagedendpoint) - Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [deleteVirtualCluster](#deletevirtualcluster) - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [describeJobRun](#describejobrun) - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [describeJobTemplate](#describejobtemplate) - Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [describeManagedEndpoint](#describemanagedendpoint) - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [describeVirtualCluster](#describevirtualcluster) - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [listJobRuns](#listjobruns) - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [listJobTemplates](#listjobtemplates) - Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
* [listManagedEndpoints](#listmanagedendpoints) - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
* [listTagsForResource](#listtagsforresource) - Lists the tags assigned to the resources.
* [listVirtualClusters](#listvirtualclusters) - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
* [startJobRun](#startjobrun) - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
* [tagResource](#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
* [untagResource](#untagresource) - Removes tags from resources.

## cancelJobRun

Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRunRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->jobRunId = 'delectus';
    $request->virtualClusterId = 'tempora';

    $response = $sdk->sdk->cancelJobRun($request);

    if ($response->cancelJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJobTemplate

Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobTemplateRequestBodyJobTemplateData;
use \OpenAPI\OpenAPI\Models\Shared\ParametricConfigurationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\ParametricMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ParametricCloudWatchMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ParametricS3MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\JobDriver;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJobDriver;
use \OpenAPI\OpenAPI\Models\Shared\SparkSubmitJobDriver;
use \OpenAPI\OpenAPI\Models\Shared\TemplateParameterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TemplateParameterDataTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobTemplateRequest();
    $request->requestBody = new CreateJobTemplateRequestBody();
    $request->requestBody->clientToken = 'suscipit';
    $request->requestBody->jobTemplateData = new CreateJobTemplateRequestBodyJobTemplateData();
    $request->requestBody->jobTemplateData->configurationOverrides = new ParametricConfigurationOverrides();
    $request->requestBody->jobTemplateData->configurationOverrides->applicationConfiguration = [
        new Configuration(),
        new Configuration(),
    ];
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration = new ParametricMonitoringConfiguration();
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration = new ParametricCloudWatchMonitoringConfiguration();
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logGroupName = 'minus';
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logStreamNamePrefix = 'placeat';
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->persistentAppUI = 'voluptatum';
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration = new ParametricS3MonitoringConfiguration();
    $request->requestBody->jobTemplateData->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration->logUri = 'iusto';
    $request->requestBody->jobTemplateData->executionRoleArn = 'excepturi';
    $request->requestBody->jobTemplateData->jobDriver = new JobDriver();
    $request->requestBody->jobTemplateData->jobDriver->sparkSqlJobDriver = new SparkSqlJobDriver();
    $request->requestBody->jobTemplateData->jobDriver->sparkSqlJobDriver->entryPoint = 'nisi';
    $request->requestBody->jobTemplateData->jobDriver->sparkSqlJobDriver->sparkSqlParameters = 'recusandae';
    $request->requestBody->jobTemplateData->jobDriver->sparkSubmitJobDriver = new SparkSubmitJobDriver();
    $request->requestBody->jobTemplateData->jobDriver->sparkSubmitJobDriver->entryPoint = 'temporibus';
    $request->requestBody->jobTemplateData->jobDriver->sparkSubmitJobDriver->entryPointArguments = [
        'quis',
    ];
    $request->requestBody->jobTemplateData->jobDriver->sparkSubmitJobDriver->sparkSubmitParameters = 'veritatis';
    $request->requestBody->jobTemplateData->jobTags = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->requestBody->jobTemplateData->parameterConfiguration = [
        'at' => new TemplateParameterConfiguration(),
        'maiores' => new TemplateParameterConfiguration(),
        'molestiae' => new TemplateParameterConfiguration(),
        'quod' => new TemplateParameterConfiguration(),
    ];
    $request->requestBody->jobTemplateData->releaseLabel = 'quod';
    $request->requestBody->kmsKeyArn = 'esse';
    $request->requestBody->name = 'Miss Lowell Parisian';
    $request->requestBody->tags = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createJobTemplate($request);

    if ($response->createJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createManagedEndpoint

Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateManagedEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateManagedEndpointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateManagedEndpointRequestBodyConfigurationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PersistentAppUIEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3MonitoringConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateManagedEndpointRequest();
    $request->requestBody = new CreateManagedEndpointRequestBody();
    $request->requestBody->certificateArn = 'ipsum';
    $request->requestBody->clientToken = 'excepturi';
    $request->requestBody->configurationOverrides = new CreateManagedEndpointRequestBodyConfigurationOverrides();
    $request->requestBody->configurationOverrides->applicationConfiguration = [
        new Configuration(),
    ];
    $request->requestBody->configurationOverrides->monitoringConfiguration = new MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration = new CloudWatchMonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logGroupName = 'perferendis';
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logStreamNamePrefix = 'ad';
    $request->requestBody->configurationOverrides->monitoringConfiguration->persistentAppUI = PersistentAppUIEnum::DISABLED;
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration = new S3MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration->logUri = 'sed';
    $request->requestBody->executionRoleArn = 'iste';
    $request->requestBody->name = 'Faye Howe';
    $request->requestBody->releaseLabel = 'fuga';
    $request->requestBody->tags = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->requestBody->type = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->virtualClusterId = 'dolorem';

    $response = $sdk->sdk->createManagedEndpoint($request);

    if ($response->createManagedEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVirtualCluster

Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateVirtualClusterRequestBodyContainerProvider;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInfo;
use \OpenAPI\OpenAPI\Models\Shared\EksInfo;
use \OpenAPI\OpenAPI\Models\Shared\ContainerProviderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVirtualClusterRequest();
    $request->requestBody = new CreateVirtualClusterRequestBody();
    $request->requestBody->clientToken = 'corporis';
    $request->requestBody->containerProvider = new CreateVirtualClusterRequestBodyContainerProvider();
    $request->requestBody->containerProvider->id = '2c595590-7aff-41a3-a2fa-9467739251aa';
    $request->requestBody->containerProvider->info = new ContainerInfo();
    $request->requestBody->containerProvider->info->eksInfo = new EksInfo();
    $request->requestBody->containerProvider->info->eksInfo->namespace = 'enim';
    $request->requestBody->containerProvider->type = ContainerProviderTypeEnum::EKS;
    $request->requestBody->name = 'Angelica Dietrich';
    $request->requestBody->tags = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->createVirtualCluster($request);

    if ($response->createVirtualClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJobTemplate

Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobTemplateRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->templateId = 'ut';

    $response = $sdk->sdk->deleteJobTemplate($request);

    if ($response->deleteJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteManagedEndpoint

Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteManagedEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteManagedEndpointRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';
    $request->endpointId = 'enim';
    $request->virtualClusterId = 'accusamus';

    $response = $sdk->sdk->deleteManagedEndpoint($request);

    if ($response->deleteManagedEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualCluster

Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualClusterRequest();
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->virtualClusterId = 'pariatur';

    $response = $sdk->sdk->deleteVirtualCluster($request);

    if ($response->deleteVirtualClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobRun

Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobRunRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->jobRunId = 'veritatis';
    $request->virtualClusterId = 'itaque';

    $response = $sdk->sdk->describeJobRun($request);

    if ($response->describeJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeJobTemplate

Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeJobTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeJobTemplateRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->templateId = 'distinctio';

    $response = $sdk->sdk->describeJobTemplate($request);

    if ($response->describeJobTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeManagedEndpoint

Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeManagedEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeManagedEndpointRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->endpointId = 'perferendis';
    $request->virtualClusterId = 'magni';

    $response = $sdk->sdk->describeManagedEndpoint($request);

    if ($response->describeManagedEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualCluster

Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualClusterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualClusterRequest();
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->virtualClusterId = 'facilis';

    $response = $sdk->sdk->describeVirtualCluster($request);

    if ($response->describeVirtualClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobRuns

Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobRunsRequest();
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T21:42:45.399Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T09:13:11.675Z');
    $request->maxResults = 638921;
    $request->name = 'Raquel Wilderman';
    $request->nextToken = 'in';
    $request->states = [
        JobRunStateEnum::COMPLETED,
        JobRunStateEnum::CANCELLED,
        JobRunStateEnum::PENDING,
        JobRunStateEnum::RUNNING,
    ];
    $request->virtualClusterId = 'cumque';

    $response = $sdk->sdk->listJobRuns($request);

    if ($response->listJobRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobTemplates

Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobTemplatesRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T03:59:53.583Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-03T16:16:10.882Z');
    $request->maxResults = 588465;
    $request->nextToken = 'nam';

    $response = $sdk->sdk->listJobTemplates($request);

    if ($response->listJobTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManagedEndpoints

Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManagedEndpointsRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T03:14:12.839Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->maxResults = 19193;
    $request->nextToken = 'nihil';
    $request->states = [
        EndpointStateEnum::TERMINATED,
        EndpointStateEnum::TERMINATED,
    ];
    $request->types = [
        'labore',
        'suscipit',
    ];
    $request->virtualClusterId = 'natus';

    $response = $sdk->sdk->listManagedEndpoints($request);

    if ($response->listManagedEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags assigned to the resources.

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
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->resourceArn = 'excepturi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualClusters

Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualClustersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualClustersContainerProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VirtualClusterStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualClustersRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->containerProviderId = 'mollitia';
    $request->containerProviderType = ListVirtualClustersContainerProviderTypeEnum::EKS;
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T12:46:27.682Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T18:15:06.372Z');
    $request->maxResults = 141264;
    $request->nextToken = 'nemo';
    $request->states = [
        VirtualClusterStateEnum::TERMINATING,
    ];

    $response = $sdk->sdk->listVirtualClusters($request);

    if ($response->listVirtualClustersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startJobRun

Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBodyConfigurationOverrides;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchMonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PersistentAppUIEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3MonitoringConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBodyJobDriver;
use \OpenAPI\OpenAPI\Models\Shared\SparkSqlJobDriver;
use \OpenAPI\OpenAPI\Models\Shared\SparkSubmitJobDriver;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequestBodyRetryPolicyConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartJobRunRequest();
    $request->requestBody = new StartJobRunRequestBody();
    $request->requestBody->clientToken = 'doloribus';
    $request->requestBody->configurationOverrides = new StartJobRunRequestBodyConfigurationOverrides();
    $request->requestBody->configurationOverrides->applicationConfiguration = [
        new Configuration(),
        new Configuration(),
        new Configuration(),
        new Configuration(),
    ];
    $request->requestBody->configurationOverrides->monitoringConfiguration = new MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration = new CloudWatchMonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logGroupName = 'eius';
    $request->requestBody->configurationOverrides->monitoringConfiguration->cloudWatchMonitoringConfiguration->logStreamNamePrefix = 'maxime';
    $request->requestBody->configurationOverrides->monitoringConfiguration->persistentAppUI = PersistentAppUIEnum::DISABLED;
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration = new S3MonitoringConfiguration();
    $request->requestBody->configurationOverrides->monitoringConfiguration->s3MonitoringConfiguration->logUri = 'facilis';
    $request->requestBody->executionRoleArn = 'in';
    $request->requestBody->jobDriver = new StartJobRunRequestBodyJobDriver();
    $request->requestBody->jobDriver->sparkSqlJobDriver = new SparkSqlJobDriver();
    $request->requestBody->jobDriver->sparkSqlJobDriver->entryPoint = 'architecto';
    $request->requestBody->jobDriver->sparkSqlJobDriver->sparkSqlParameters = 'architecto';
    $request->requestBody->jobDriver->sparkSubmitJobDriver = new SparkSubmitJobDriver();
    $request->requestBody->jobDriver->sparkSubmitJobDriver->entryPoint = 'repudiandae';
    $request->requestBody->jobDriver->sparkSubmitJobDriver->entryPointArguments = [
        'expedita',
        'nihil',
    ];
    $request->requestBody->jobDriver->sparkSubmitJobDriver->sparkSubmitParameters = 'repellat';
    $request->requestBody->jobTemplateId = 'quibusdam';
    $request->requestBody->jobTemplateParameters = [
        'saepe' => 'pariatur',
    ];
    $request->requestBody->name = 'Kathryn Lang';
    $request->requestBody->releaseLabel = 'sunt';
    $request->requestBody->retryPolicyConfiguration = new StartJobRunRequestBodyRetryPolicyConfiguration();
    $request->requestBody->retryPolicyConfiguration->maxAttempts = 779051;
    $request->requestBody->tags = [
        'pariatur' => 'maxime',
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->virtualClusterId = 'pariatur';

    $response = $sdk->sdk->startJobRun($request);

    if ($response->startJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.

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
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->resourceArn = 'quis';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from resources.

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
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->resourceArn = 'dolores';
    $request->tagKeys = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
