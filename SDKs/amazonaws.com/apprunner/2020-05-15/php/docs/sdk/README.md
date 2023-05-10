# SDK

## Overview

<fullname>App Runner</fullname> <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources.</p> <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security.</p> <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>. For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p> <p> To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/apprunner/>
### Available Operations

* [associateCustomDomain](#associatecustomdomain) - <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* [createAutoScalingConfiguration](#createautoscalingconfiguration) - <p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* [createConnection](#createconnection) - <p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* [createObservabilityConfiguration](#createobservabilityconfiguration) - <p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>
* [createService](#createservice) - <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* [createVpcConnector](#createvpcconnector) - Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
* [createVpcIngressConnection](#createvpcingressconnection) - Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.
* [deleteAutoScalingConfiguration](#deleteautoscalingconfiguration) - Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [deleteConnection](#deleteconnection) - Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* [deleteObservabilityConfiguration](#deleteobservabilityconfiguration) - Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* [deleteService](#deleteservice) - <p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>
* [deleteVpcConnector](#deletevpcconnector) - Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.
* [deleteVpcIngressConnection](#deletevpcingressconnection) - <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>
* [describeAutoScalingConfiguration](#describeautoscalingconfiguration) - Return a full description of an App Runner automatic scaling configuration resource.
* [describeCustomDomains](#describecustomdomains) - Return a description of custom domain names that are associated with an App Runner service.
* [describeObservabilityConfiguration](#describeobservabilityconfiguration) - Return a full description of an App Runner observability configuration resource.
* [describeService](#describeservice) - Return a full description of an App Runner service.
* [describeVpcConnector](#describevpcconnector) - Return a description of an App Runner VPC connector resource.
* [describeVpcIngressConnection](#describevpcingressconnection) - Return a full description of an App Runner VPC Ingress Connection resource.
* [disassociateCustomDomain](#disassociatecustomdomain) - <p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* [listAutoScalingConfigurations](#listautoscalingconfigurations) - <p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>
* [listConnections](#listconnections) - Returns a list of App Runner connections that are associated with your Amazon Web Services account.
* [listObservabilityConfigurations](#listobservabilityconfigurations) - <p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>
* [listOperations](#listoperations) - <p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* [listServices](#listservices) - Returns a list of running App Runner services in your Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.
* [listVpcConnectors](#listvpcconnectors) - Returns a list of App Runner VPC connectors in your Amazon Web Services account.
* [listVpcIngressConnections](#listvpcingressconnections) - Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.
* [pauseService](#pauseservice) - <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [resumeService](#resumeservice) - <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [startDeployment](#startdeployment) - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [tagResource](#tagresource) - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* [untagResource](#untagresource) - Remove tags from an App Runner resource.
* [updateService](#updateservice) - <p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* [updateVpcIngressConnection](#updatevpcingressconnection) - <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

## associateCustomDomain

<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCustomDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateCustomDomainRequest();
    $request->associateCustomDomainRequest = new AssociateCustomDomainRequest();
    $request->associateCustomDomainRequest->domainName = 'error';
    $request->associateCustomDomainRequest->enableWWWSubdomain = false;
    $request->associateCustomDomainRequest->serviceArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateCustomDomainXAmzTargetEnum::APP_RUNNER_ASSOCIATE_CUSTOM_DOMAIN;

    $response = $sdk->sdk->associateCustomDomain($request);

    if ($response->associateCustomDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAutoScalingConfiguration

<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAutoScalingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAutoScalingConfigurationRequest();
    $request->createAutoScalingConfigurationRequest = new CreateAutoScalingConfigurationRequest();
    $request->createAutoScalingConfigurationRequest->autoScalingConfigurationName = 'suscipit';
    $request->createAutoScalingConfigurationRequest->maxConcurrency = 477665;
    $request->createAutoScalingConfigurationRequest->maxSize = 791725;
    $request->createAutoScalingConfigurationRequest->minSize = 812169;
    $request->createAutoScalingConfigurationRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateAutoScalingConfigurationXAmzTargetEnum::APP_RUNNER_CREATE_AUTO_SCALING_CONFIGURATION;

    $response = $sdk->sdk->createAutoScalingConfiguration($request);

    if ($response->createAutoScalingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnection

<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionRequest = new CreateConnectionRequest();
    $request->createConnectionRequest->connectionName = 'veritatis';
    $request->createConnectionRequest->providerType = ProviderTypeEnum::GITHUB;
    $request->createConnectionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::APP_RUNNER_CREATE_CONNECTION;

    $response = $sdk->sdk->createConnection($request);

    if ($response->createConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createObservabilityConfiguration

<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TraceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TracingVendorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateObservabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateObservabilityConfigurationRequest();
    $request->createObservabilityConfigurationRequest = new CreateObservabilityConfigurationRequest();
    $request->createObservabilityConfigurationRequest->observabilityConfigurationName = 'at';
    $request->createObservabilityConfigurationRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createObservabilityConfigurationRequest->traceConfiguration = new TraceConfiguration();
    $request->createObservabilityConfigurationRequest->traceConfiguration->vendor = TracingVendorEnum::AWSXRAY;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateObservabilityConfigurationXAmzTargetEnum::APP_RUNNER_CREATE_OBSERVABILITY_CONFIGURATION;

    $response = $sdk->sdk->createObservabilityConfiguration($request);

    if ($response->createObservabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createService

<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EgressConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EgressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngressConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceObservabilityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\CodeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CodeConfigurationValues;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceCodeVersion;
use \OpenAPI\OpenAPI\Models\Shared\SourceCodeVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageRepository;
use \OpenAPI\OpenAPI\Models\Shared\ImageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageRepositoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServiceRequest();
    $request->createServiceRequest = new CreateServiceRequest();
    $request->createServiceRequest->autoScalingConfigurationArn = 'dicta';
    $request->createServiceRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createServiceRequest->encryptionConfiguration->kmsKey = 'nam';
    $request->createServiceRequest->healthCheckConfiguration = new HealthCheckConfiguration();
    $request->createServiceRequest->healthCheckConfiguration->healthyThreshold = 639921;
    $request->createServiceRequest->healthCheckConfiguration->interval = 582020;
    $request->createServiceRequest->healthCheckConfiguration->path = 'fugit';
    $request->createServiceRequest->healthCheckConfiguration->protocol = HealthCheckProtocolEnum::HTTP;
    $request->createServiceRequest->healthCheckConfiguration->timeout = 944669;
    $request->createServiceRequest->healthCheckConfiguration->unhealthyThreshold = 758616;
    $request->createServiceRequest->instanceConfiguration = new InstanceConfiguration();
    $request->createServiceRequest->instanceConfiguration->cpu = 'totam';
    $request->createServiceRequest->instanceConfiguration->instanceRoleArn = 'beatae';
    $request->createServiceRequest->instanceConfiguration->memory = 'commodi';
    $request->createServiceRequest->networkConfiguration = new NetworkConfiguration();
    $request->createServiceRequest->networkConfiguration->egressConfiguration = new EgressConfiguration();
    $request->createServiceRequest->networkConfiguration->egressConfiguration->egressType = EgressTypeEnum::DEFAULT;
    $request->createServiceRequest->networkConfiguration->egressConfiguration->vpcConnectorArn = 'modi';
    $request->createServiceRequest->networkConfiguration->ingressConfiguration = new IngressConfiguration();
    $request->createServiceRequest->networkConfiguration->ingressConfiguration->isPubliclyAccessible = false;
    $request->createServiceRequest->observabilityConfiguration = new ServiceObservabilityConfiguration();
    $request->createServiceRequest->observabilityConfiguration->observabilityConfigurationArn = 'qui';
    $request->createServiceRequest->observabilityConfiguration->observabilityEnabled = false;
    $request->createServiceRequest->serviceName = 'impedit';
    $request->createServiceRequest->sourceConfiguration = new SourceConfiguration();
    $request->createServiceRequest->sourceConfiguration->authenticationConfiguration = new AuthenticationConfiguration();
    $request->createServiceRequest->sourceConfiguration->authenticationConfiguration->accessRoleArn = 'cum';
    $request->createServiceRequest->sourceConfiguration->authenticationConfiguration->connectionArn = 'esse';
    $request->createServiceRequest->sourceConfiguration->autoDeploymentsEnabled = false;
    $request->createServiceRequest->sourceConfiguration->codeRepository = new CodeRepository();
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration = new CodeConfiguration();
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues = new CodeConfigurationValues();
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->buildCommand = 'ipsum';
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->port = 'excepturi';
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtime = RuntimeEnum::NODEJS12;
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtimeEnvironmentSecrets = [
        'ad' => 'natus',
    ];
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtimeEnvironmentVariables = [
        'iste' => 'dolor',
    ];
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->startCommand = 'natus';
    $request->createServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->configurationSource = ConfigurationSourceEnum::REPOSITORY;
    $request->createServiceRequest->sourceConfiguration->codeRepository->repositoryUrl = 'hic';
    $request->createServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion = new SourceCodeVersion();
    $request->createServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion->type = SourceCodeVersionTypeEnum::BRANCH;
    $request->createServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion->value = 'saepe';
    $request->createServiceRequest->sourceConfiguration->imageRepository = new ImageRepository();
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageConfiguration = new ImageConfiguration();
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->port = 'fuga';
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->runtimeEnvironmentSecrets = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->runtimeEnvironmentVariables = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->startCommand = 'dolores';
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageIdentifier = 'dolorem';
    $request->createServiceRequest->sourceConfiguration->imageRepository->imageRepositoryType = ImageRepositoryTypeEnum::ECR;
    $request->createServiceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateServiceXAmzTargetEnum::APP_RUNNER_CREATE_SERVICE;

    $response = $sdk->sdk->createService($request);

    if ($response->createServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcConnector

Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcConnectorRequest();
    $request->createVpcConnectorRequest = new CreateVpcConnectorRequest();
    $request->createVpcConnectorRequest->securityGroups = [
        'culpa',
        'doloribus',
    ];
    $request->createVpcConnectorRequest->subnets = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->createVpcConnectorRequest->tags = [
        new Tag(),
    ];
    $request->createVpcConnectorRequest->vpcConnectorName = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = CreateVpcConnectorXAmzTargetEnum::APP_RUNNER_CREATE_VPC_CONNECTOR;

    $response = $sdk->sdk->createVpcConnector($request);

    if ($response->createVpcConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVpcIngressConnection

Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\IngressVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateVpcIngressConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVpcIngressConnectionRequest();
    $request->createVpcIngressConnectionRequest = new CreateVpcIngressConnectionRequest();
    $request->createVpcIngressConnectionRequest->ingressVpcConfiguration = new IngressVpcConfiguration();
    $request->createVpcIngressConnectionRequest->ingressVpcConfiguration->vpcEndpointId = 'error';
    $request->createVpcIngressConnectionRequest->ingressVpcConfiguration->vpcId = 'quia';
    $request->createVpcIngressConnectionRequest->serviceArn = 'quis';
    $request->createVpcIngressConnectionRequest->tags = [
        new Tag(),
    ];
    $request->createVpcIngressConnectionRequest->vpcIngressConnectionName = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateVpcIngressConnectionXAmzTargetEnum::APP_RUNNER_CREATE_VPC_INGRESS_CONNECTION;

    $response = $sdk->sdk->createVpcIngressConnection($request);

    if ($response->createVpcIngressConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAutoScalingConfiguration

Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutoScalingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutoScalingConfigurationRequest();
    $request->deleteAutoScalingConfigurationRequest = new DeleteAutoScalingConfigurationRequest();
    $request->deleteAutoScalingConfigurationRequest->autoScalingConfigurationArn = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteAutoScalingConfigurationXAmzTargetEnum::APP_RUNNER_DELETE_AUTO_SCALING_CONFIGURATION;

    $response = $sdk->sdk->deleteAutoScalingConfiguration($request);

    if ($response->deleteAutoScalingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionRequest = new DeleteConnectionRequest();
    $request->deleteConnectionRequest->connectionArn = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::APP_RUNNER_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->deleteConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteObservabilityConfiguration

Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObservabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteObservabilityConfigurationRequest();
    $request->deleteObservabilityConfigurationRequest = new DeleteObservabilityConfigurationRequest();
    $request->deleteObservabilityConfigurationRequest->observabilityConfigurationArn = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeleteObservabilityConfigurationXAmzTargetEnum::APP_RUNNER_DELETE_OBSERVABILITY_CONFIGURATION;

    $response = $sdk->sdk->deleteObservabilityConfiguration($request);

    if ($response->deleteObservabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteService

<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceRequest();
    $request->deleteServiceRequest = new DeleteServiceRequest();
    $request->deleteServiceRequest->serviceArn = 'corporis';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = DeleteServiceXAmzTargetEnum::APP_RUNNER_DELETE_SERVICE;

    $response = $sdk->sdk->deleteService($request);

    if ($response->deleteServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcConnector

Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcConnectorRequest();
    $request->deleteVpcConnectorRequest = new DeleteVpcConnectorRequest();
    $request->deleteVpcConnectorRequest->vpcConnectorArn = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteVpcConnectorXAmzTargetEnum::APP_RUNNER_DELETE_VPC_CONNECTOR;

    $response = $sdk->sdk->deleteVpcConnector($request);

    if ($response->deleteVpcConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVpcIngressConnection

<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVpcIngressConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVpcIngressConnectionRequest();
    $request->deleteVpcIngressConnectionRequest = new DeleteVpcIngressConnectionRequest();
    $request->deleteVpcIngressConnectionRequest->vpcIngressConnectionArn = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DeleteVpcIngressConnectionXAmzTargetEnum::APP_RUNNER_DELETE_VPC_INGRESS_CONNECTION;

    $response = $sdk->sdk->deleteVpcIngressConnection($request);

    if ($response->deleteVpcIngressConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAutoScalingConfiguration

Return a full description of an App Runner automatic scaling configuration resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAutoScalingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAutoScalingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAutoScalingConfigurationRequest();
    $request->describeAutoScalingConfigurationRequest = new DescribeAutoScalingConfigurationRequest();
    $request->describeAutoScalingConfigurationRequest->autoScalingConfigurationArn = 'incidunt';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = DescribeAutoScalingConfigurationXAmzTargetEnum::APP_RUNNER_DESCRIBE_AUTO_SCALING_CONFIGURATION;

    $response = $sdk->sdk->describeAutoScalingConfiguration($request);

    if ($response->describeAutoScalingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomDomains

Return a description of custom domain names that are associated with an App Runner service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCustomDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomDomainsRequest();
    $request->describeCustomDomainsRequest = new DescribeCustomDomainsRequest();
    $request->describeCustomDomainsRequest->maxResults = 841386;
    $request->describeCustomDomainsRequest->nextToken = 'labore';
    $request->describeCustomDomainsRequest->serviceArn = 'modi';
    $request->maxResults = 'qui';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = DescribeCustomDomainsXAmzTargetEnum::APP_RUNNER_DESCRIBE_CUSTOM_DOMAINS;

    $response = $sdk->sdk->describeCustomDomains($request);

    if ($response->describeCustomDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeObservabilityConfiguration

Return a full description of an App Runner observability configuration resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeObservabilityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObservabilityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeObservabilityConfigurationRequest();
    $request->describeObservabilityConfigurationRequest = new DescribeObservabilityConfigurationRequest();
    $request->describeObservabilityConfigurationRequest->observabilityConfigurationArn = 'fugit';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DescribeObservabilityConfigurationXAmzTargetEnum::APP_RUNNER_DESCRIBE_OBSERVABILITY_CONFIGURATION;

    $response = $sdk->sdk->describeObservabilityConfiguration($request);

    if ($response->describeObservabilityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeService

Return a full description of an App Runner service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceRequest();
    $request->describeServiceRequest = new DescribeServiceRequest();
    $request->describeServiceRequest->serviceArn = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DescribeServiceXAmzTargetEnum::APP_RUNNER_DESCRIBE_SERVICE;

    $response = $sdk->sdk->describeService($request);

    if ($response->describeServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVpcConnector

Return a description of an App Runner VPC connector resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVpcConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVpcConnectorRequest();
    $request->describeVpcConnectorRequest = new DescribeVpcConnectorRequest();
    $request->describeVpcConnectorRequest->vpcConnectorArn = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeVpcConnectorXAmzTargetEnum::APP_RUNNER_DESCRIBE_VPC_CONNECTOR;

    $response = $sdk->sdk->describeVpcConnector($request);

    if ($response->describeVpcConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVpcIngressConnection

Return a full description of an App Runner VPC Ingress Connection resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVpcIngressConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVpcIngressConnectionRequest();
    $request->describeVpcIngressConnectionRequest = new DescribeVpcIngressConnectionRequest();
    $request->describeVpcIngressConnectionRequest->vpcIngressConnectionArn = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DescribeVpcIngressConnectionXAmzTargetEnum::APP_RUNNER_DESCRIBE_VPC_INGRESS_CONNECTION;

    $response = $sdk->sdk->describeVpcIngressConnection($request);

    if ($response->describeVpcIngressConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateCustomDomain

<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateCustomDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateCustomDomainRequest();
    $request->disassociateCustomDomainRequest = new DisassociateCustomDomainRequest();
    $request->disassociateCustomDomainRequest->domainName = 'laborum';
    $request->disassociateCustomDomainRequest->serviceArn = 'accusamus';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DisassociateCustomDomainXAmzTargetEnum::APP_RUNNER_DISASSOCIATE_CUSTOM_DOMAIN;

    $response = $sdk->sdk->disassociateCustomDomain($request);

    if ($response->disassociateCustomDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAutoScalingConfigurations

<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAutoScalingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAutoScalingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAutoScalingConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAutoScalingConfigurationsRequest();
    $request->listAutoScalingConfigurationsRequest = new ListAutoScalingConfigurationsRequest();
    $request->listAutoScalingConfigurationsRequest->autoScalingConfigurationName = 'nam';
    $request->listAutoScalingConfigurationsRequest->latestOnly = false;
    $request->listAutoScalingConfigurationsRequest->maxResults = 659669;
    $request->listAutoScalingConfigurationsRequest->nextToken = 'blanditiis';
    $request->maxResults = 'deleniti';
    $request->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListAutoScalingConfigurationsXAmzTargetEnum::APP_RUNNER_LIST_AUTO_SCALING_CONFIGURATIONS;

    $response = $sdk->sdk->listAutoScalingConfigurations($request);

    if ($response->listAutoScalingConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnections

Returns a list of App Runner connections that are associated with your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectionsRequest();
    $request->listConnectionsRequest = new ListConnectionsRequest();
    $request->listConnectionsRequest->connectionName = 'perferendis';
    $request->listConnectionsRequest->maxResults = 470132;
    $request->listConnectionsRequest->nextToken = 'magnam';
    $request->maxResults = 'distinctio';
    $request->nextToken = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ListConnectionsXAmzTargetEnum::APP_RUNNER_LIST_CONNECTIONS;

    $response = $sdk->sdk->listConnections($request);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObservabilityConfigurations

<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObservabilityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListObservabilityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObservabilityConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObservabilityConfigurationsRequest();
    $request->listObservabilityConfigurationsRequest = new ListObservabilityConfigurationsRequest();
    $request->listObservabilityConfigurationsRequest->latestOnly = false;
    $request->listObservabilityConfigurationsRequest->maxResults = 135474;
    $request->listObservabilityConfigurationsRequest->nextToken = 'architecto';
    $request->listObservabilityConfigurationsRequest->observabilityConfigurationName = 'magnam';
    $request->maxResults = 'et';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListObservabilityConfigurationsXAmzTargetEnum::APP_RUNNER_LIST_OBSERVABILITY_CONFIGURATIONS;

    $response = $sdk->sdk->listObservabilityConfigurations($request);

    if ($response->listObservabilityConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOperations

<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOperationsRequest();
    $request->listOperationsRequest = new ListOperationsRequest();
    $request->listOperationsRequest->maxResults = 652103;
    $request->listOperationsRequest->nextToken = 'ad';
    $request->listOperationsRequest->serviceArn = 'eum';
    $request->maxResults = 'dolor';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListOperationsXAmzTargetEnum::APP_RUNNER_LIST_OPERATIONS;

    $response = $sdk->sdk->listOperations($request);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Returns a list of running App Runner services in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->listServicesRequest = new ListServicesRequest();
    $request->listServicesRequest->maxResults = 806194;
    $request->listServicesRequest->nextToken = 'deleniti';
    $request->maxResults = 'facilis';
    $request->nextToken = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = ListServicesXAmzTargetEnum::APP_RUNNER_LIST_SERVICES;

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'quibusdam';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::APP_RUNNER_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVpcConnectors

Returns a list of App Runner VPC connectors in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVpcConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcConnectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVpcConnectorsRequest();
    $request->listVpcConnectorsRequest = new ListVpcConnectorsRequest();
    $request->listVpcConnectorsRequest->maxResults = 166847;
    $request->listVpcConnectorsRequest->nextToken = 'sunt';
    $request->maxResults = 'quo';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListVpcConnectorsXAmzTargetEnum::APP_RUNNER_LIST_VPC_CONNECTORS;

    $response = $sdk->sdk->listVpcConnectors($request);

    if ($response->listVpcConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVpcIngressConnections

Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcIngressConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVpcIngressConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVpcIngressConnectionsFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListVpcIngressConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVpcIngressConnectionsRequest();
    $request->listVpcIngressConnectionsRequest = new ListVpcIngressConnectionsRequest();
    $request->listVpcIngressConnectionsRequest->filter = new ListVpcIngressConnectionsFilter();
    $request->listVpcIngressConnectionsRequest->filter->serviceArn = 'ab';
    $request->listVpcIngressConnectionsRequest->filter->vpcEndpointId = 'maiores';
    $request->listVpcIngressConnectionsRequest->maxResults = 697429;
    $request->listVpcIngressConnectionsRequest->nextToken = 'ipsam';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'autem';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListVpcIngressConnectionsXAmzTargetEnum::APP_RUNNER_LIST_VPC_INGRESS_CONNECTIONS;

    $response = $sdk->sdk->listVpcIngressConnections($request);

    if ($response->listVpcIngressConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pauseService

<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PauseServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PauseServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PauseServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PauseServiceRequest();
    $request->pauseServiceRequest = new PauseServiceRequest();
    $request->pauseServiceRequest->serviceArn = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = PauseServiceXAmzTargetEnum::APP_RUNNER_PAUSE_SERVICE;

    $response = $sdk->sdk->pauseService($request);

    if ($response->pauseServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeService

<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeServiceRequest();
    $request->resumeServiceRequest = new ResumeServiceRequest();
    $request->resumeServiceRequest->serviceArn = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ResumeServiceXAmzTargetEnum::APP_RUNNER_RESUME_SERVICE;

    $response = $sdk->sdk->resumeService($request);

    if ($response->resumeServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDeployment

<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDeploymentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDeploymentRequest();
    $request->startDeploymentRequest = new StartDeploymentRequest();
    $request->startDeploymentRequest->serviceArn = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = StartDeploymentXAmzTargetEnum::APP_RUNNER_START_DEPLOYMENT;

    $response = $sdk->sdk->startDeployment($request);

    if ($response->startDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'omnis';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::APP_RUNNER_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove tags from an App Runner resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'occaecati';
    $request->untagResourceRequest->tagKeys = [
        'adipisci',
        'asperiores',
        'earum',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::APP_RUNNER_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateService

<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EgressConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EgressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IngressConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServiceObservabilityConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CodeRepository;
use \OpenAPI\OpenAPI\Models\Shared\CodeConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CodeConfigurationValues;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceCodeVersion;
use \OpenAPI\OpenAPI\Models\Shared\SourceCodeVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageRepository;
use \OpenAPI\OpenAPI\Models\Shared\ImageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageRepositoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceRequest();
    $request->updateServiceRequest = new UpdateServiceRequest();
    $request->updateServiceRequest->autoScalingConfigurationArn = 'libero';
    $request->updateServiceRequest->healthCheckConfiguration = new HealthCheckConfiguration();
    $request->updateServiceRequest->healthCheckConfiguration->healthyThreshold = 964490;
    $request->updateServiceRequest->healthCheckConfiguration->interval = 311945;
    $request->updateServiceRequest->healthCheckConfiguration->path = 'quos';
    $request->updateServiceRequest->healthCheckConfiguration->protocol = HealthCheckProtocolEnum::TCP;
    $request->updateServiceRequest->healthCheckConfiguration->timeout = 212390;
    $request->updateServiceRequest->healthCheckConfiguration->unhealthyThreshold = 209843;
    $request->updateServiceRequest->instanceConfiguration = new InstanceConfiguration();
    $request->updateServiceRequest->instanceConfiguration->cpu = 'dolor';
    $request->updateServiceRequest->instanceConfiguration->instanceRoleArn = 'qui';
    $request->updateServiceRequest->instanceConfiguration->memory = 'ipsum';
    $request->updateServiceRequest->networkConfiguration = new NetworkConfiguration();
    $request->updateServiceRequest->networkConfiguration->egressConfiguration = new EgressConfiguration();
    $request->updateServiceRequest->networkConfiguration->egressConfiguration->egressType = EgressTypeEnum::VPC;
    $request->updateServiceRequest->networkConfiguration->egressConfiguration->vpcConnectorArn = 'excepturi';
    $request->updateServiceRequest->networkConfiguration->ingressConfiguration = new IngressConfiguration();
    $request->updateServiceRequest->networkConfiguration->ingressConfiguration->isPubliclyAccessible = false;
    $request->updateServiceRequest->observabilityConfiguration = new ServiceObservabilityConfiguration();
    $request->updateServiceRequest->observabilityConfiguration->observabilityConfigurationArn = 'cum';
    $request->updateServiceRequest->observabilityConfiguration->observabilityEnabled = false;
    $request->updateServiceRequest->serviceArn = 'voluptate';
    $request->updateServiceRequest->sourceConfiguration = new SourceConfiguration();
    $request->updateServiceRequest->sourceConfiguration->authenticationConfiguration = new AuthenticationConfiguration();
    $request->updateServiceRequest->sourceConfiguration->authenticationConfiguration->accessRoleArn = 'dignissimos';
    $request->updateServiceRequest->sourceConfiguration->authenticationConfiguration->connectionArn = 'reiciendis';
    $request->updateServiceRequest->sourceConfiguration->autoDeploymentsEnabled = false;
    $request->updateServiceRequest->sourceConfiguration->codeRepository = new CodeRepository();
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration = new CodeConfiguration();
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues = new CodeConfigurationValues();
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->buildCommand = 'amet';
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->port = 'dolorum';
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtime = RuntimeEnum::NODEJS14;
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtimeEnvironmentSecrets = [
        'ipsa' => 'ipsa',
    ];
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->runtimeEnvironmentVariables = [
        'odio' => 'quaerat',
        'accusamus' => 'quidem',
    ];
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->codeConfigurationValues->startCommand = 'voluptatibus';
    $request->updateServiceRequest->sourceConfiguration->codeRepository->codeConfiguration->configurationSource = ConfigurationSourceEnum::REPOSITORY;
    $request->updateServiceRequest->sourceConfiguration->codeRepository->repositoryUrl = 'natus';
    $request->updateServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion = new SourceCodeVersion();
    $request->updateServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion->type = SourceCodeVersionTypeEnum::BRANCH;
    $request->updateServiceRequest->sourceConfiguration->codeRepository->sourceCodeVersion->value = 'eos';
    $request->updateServiceRequest->sourceConfiguration->imageRepository = new ImageRepository();
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageConfiguration = new ImageConfiguration();
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->port = 'atque';
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->runtimeEnvironmentSecrets = [
        'fugiat' => 'ab',
    ];
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->runtimeEnvironmentVariables = [
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageConfiguration->startCommand = 'necessitatibus';
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageIdentifier = 'distinctio';
    $request->updateServiceRequest->sourceConfiguration->imageRepository->imageRepositoryType = ImageRepositoryTypeEnum::ECR_PUBLIC;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = UpdateServiceXAmzTargetEnum::APP_RUNNER_UPDATE_SERVICE;

    $response = $sdk->sdk->updateService($request);

    if ($response->updateServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVpcIngressConnection

<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVpcIngressConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\IngressVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVpcIngressConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVpcIngressConnectionRequest();
    $request->updateVpcIngressConnectionRequest = new UpdateVpcIngressConnectionRequest();
    $request->updateVpcIngressConnectionRequest->ingressVpcConfiguration = new IngressVpcConfiguration();
    $request->updateVpcIngressConnectionRequest->ingressVpcConfiguration->vpcEndpointId = 'perferendis';
    $request->updateVpcIngressConnectionRequest->ingressVpcConfiguration->vpcId = 'amet';
    $request->updateVpcIngressConnectionRequest->vpcIngressConnectionArn = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = UpdateVpcIngressConnectionXAmzTargetEnum::APP_RUNNER_UPDATE_VPC_INGRESS_CONNECTION;

    $response = $sdk->sdk->updateVpcIngressConnection($request);

    if ($response->updateVpcIngressConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
