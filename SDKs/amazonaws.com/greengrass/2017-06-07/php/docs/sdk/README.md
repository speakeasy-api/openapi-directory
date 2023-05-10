# SDK

## Overview

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

Amazon Web Services documentation
<https://docs.aws.amazon.com/greengrass/>
### Available Operations

* [associateRoleToGroup](#associateroletogroup) - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* [associateServiceRoleToAccount](#associateserviceroletoaccount) - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* [createConnectorDefinition](#createconnectordefinition) - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* [createConnectorDefinitionVersion](#createconnectordefinitionversion) - Creates a version of a connector definition which has already been defined.
* [createCoreDefinition](#createcoredefinition) - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* [createCoreDefinitionVersion](#createcoredefinitionversion) - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* [createDeployment](#createdeployment) - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* [createDeviceDefinition](#createdevicedefinition) - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* [createDeviceDefinitionVersion](#createdevicedefinitionversion) - Creates a version of a device definition that has already been defined.
* [createFunctionDefinition](#createfunctiondefinition) - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* [createFunctionDefinitionVersion](#createfunctiondefinitionversion) - Creates a version of a Lambda function definition that has already been defined.
* [createGroup](#creategroup) - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* [createGroupCertificateAuthority](#creategroupcertificateauthority) - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* [createGroupVersion](#creategroupversion) - Creates a version of a group which has already been defined.
* [createLoggerDefinition](#createloggerdefinition) - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* [createLoggerDefinitionVersion](#createloggerdefinitionversion) - Creates a version of a logger definition that has already been defined.
* [createResourceDefinition](#createresourcedefinition) - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* [createResourceDefinitionVersion](#createresourcedefinitionversion) - Creates a version of a resource definition that has already been defined.
* [createSoftwareUpdateJob](#createsoftwareupdatejob) - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* [createSubscriptionDefinition](#createsubscriptiondefinition) - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* [createSubscriptionDefinitionVersion](#createsubscriptiondefinitionversion) - Creates a version of a subscription definition which has already been defined.
* [deleteConnectorDefinition](#deleteconnectordefinition) - Deletes a connector definition.
* [deleteCoreDefinition](#deletecoredefinition) - Deletes a core definition.
* [deleteDeviceDefinition](#deletedevicedefinition) - Deletes a device definition.
* [deleteFunctionDefinition](#deletefunctiondefinition) - Deletes a Lambda function definition.
* [deleteGroup](#deletegroup) - Deletes a group.
* [deleteLoggerDefinition](#deleteloggerdefinition) - Deletes a logger definition.
* [deleteResourceDefinition](#deleteresourcedefinition) - Deletes a resource definition.
* [deleteSubscriptionDefinition](#deletesubscriptiondefinition) - Deletes a subscription definition.
* [disassociateRoleFromGroup](#disassociaterolefromgroup) - Disassociates the role from a group.
* [disassociateServiceRoleFromAccount](#disassociateservicerolefromaccount) - Disassociates the service role from your account. Without a service role, deployments will not work.
* [getAssociatedRole](#getassociatedrole) - Retrieves the role associated with a particular group.
* [getBulkDeploymentStatus](#getbulkdeploymentstatus) - Returns the status of a bulk deployment.
* [getConnectivityInfo](#getconnectivityinfo) - Retrieves the connectivity information for a core.
* [getConnectorDefinition](#getconnectordefinition) - Retrieves information about a connector definition.
* [getConnectorDefinitionVersion](#getconnectordefinitionversion) - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* [getCoreDefinition](#getcoredefinition) - Retrieves information about a core definition version.
* [getCoreDefinitionVersion](#getcoredefinitionversion) - Retrieves information about a core definition version.
* [getDeploymentStatus](#getdeploymentstatus) - Returns the status of a deployment.
* [getDeviceDefinition](#getdevicedefinition) - Retrieves information about a device definition.
* [getDeviceDefinitionVersion](#getdevicedefinitionversion) - Retrieves information about a device definition version.
* [getFunctionDefinition](#getfunctiondefinition) - Retrieves information about a Lambda function definition, including its creation time and latest version.
* [getFunctionDefinitionVersion](#getfunctiondefinitionversion) - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* [getGroup](#getgroup) - Retrieves information about a group.
* [getGroupCertificateAuthority](#getgroupcertificateauthority) - Retreives the CA associated with a group. Returns the public key of the CA.
* [getGroupCertificateConfiguration](#getgroupcertificateconfiguration) - Retrieves the current configuration for the CA used by the group.
* [getGroupVersion](#getgroupversion) - Retrieves information about a group version.
* [getLoggerDefinition](#getloggerdefinition) - Retrieves information about a logger definition.
* [getLoggerDefinitionVersion](#getloggerdefinitionversion) - Retrieves information about a logger definition version.
* [getResourceDefinition](#getresourcedefinition) - Retrieves information about a resource definition, including its creation time and latest version.
* [getResourceDefinitionVersion](#getresourcedefinitionversion) - Retrieves information about a resource definition version, including which resources are included in the version.
* [getServiceRoleForAccount](#getserviceroleforaccount) - Retrieves the service role that is attached to your account.
* [getSubscriptionDefinition](#getsubscriptiondefinition) - Retrieves information about a subscription definition.
* [getSubscriptionDefinitionVersion](#getsubscriptiondefinitionversion) - Retrieves information about a subscription definition version.
* [getThingRuntimeConfiguration](#getthingruntimeconfiguration) - Get the runtime configuration of a thing.
* [listBulkDeploymentDetailedReports](#listbulkdeploymentdetailedreports) - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* [listBulkDeployments](#listbulkdeployments) - Returns a list of bulk deployments.
* [listConnectorDefinitionVersions](#listconnectordefinitionversions) - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* [listConnectorDefinitions](#listconnectordefinitions) - Retrieves a list of connector definitions.
* [listCoreDefinitionVersions](#listcoredefinitionversions) - Lists the versions of a core definition.
* [listCoreDefinitions](#listcoredefinitions) - Retrieves a list of core definitions.
* [listDeployments](#listdeployments) - Returns a history of deployments for the group.
* [listDeviceDefinitionVersions](#listdevicedefinitionversions) - Lists the versions of a device definition.
* [listDeviceDefinitions](#listdevicedefinitions) - Retrieves a list of device definitions.
* [listFunctionDefinitionVersions](#listfunctiondefinitionversions) - Lists the versions of a Lambda function definition.
* [listFunctionDefinitions](#listfunctiondefinitions) - Retrieves a list of Lambda function definitions.
* [listGroupCertificateAuthorities](#listgroupcertificateauthorities) - Retrieves the current CAs for a group.
* [listGroupVersions](#listgroupversions) - Lists the versions of a group.
* [listGroups](#listgroups) - Retrieves a list of groups.
* [listLoggerDefinitionVersions](#listloggerdefinitionversions) - Lists the versions of a logger definition.
* [listLoggerDefinitions](#listloggerdefinitions) - Retrieves a list of logger definitions.
* [listResourceDefinitionVersions](#listresourcedefinitionversions) - Lists the versions of a resource definition.
* [listResourceDefinitions](#listresourcedefinitions) - Retrieves a list of resource definitions.
* [listSubscriptionDefinitionVersions](#listsubscriptiondefinitionversions) - Lists the versions of a subscription definition.
* [listSubscriptionDefinitions](#listsubscriptiondefinitions) - Retrieves a list of subscription definitions.
* [listTagsForResource](#listtagsforresource) - Retrieves a list of resource tags for a resource arn.
* [resetDeployments](#resetdeployments) - Resets a group's deployments.
* [startBulkDeployment](#startbulkdeployment) - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* [stopBulkDeployment](#stopbulkdeployment) - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* [tagResource](#tagresource) - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* [untagResource](#untagresource) - Remove resource tags from a Greengrass Resource.
* [updateConnectivityInfo](#updateconnectivityinfo) - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* [updateConnectorDefinition](#updateconnectordefinition) - Updates a connector definition.
* [updateCoreDefinition](#updatecoredefinition) - Updates a core definition.
* [updateDeviceDefinition](#updatedevicedefinition) - Updates a device definition.
* [updateFunctionDefinition](#updatefunctiondefinition) - Updates a Lambda function definition.
* [updateGroup](#updategroup) - Updates a group.
* [updateGroupCertificateConfiguration](#updategroupcertificateconfiguration) - Updates the Certificate expiry time for a group.
* [updateLoggerDefinition](#updateloggerdefinition) - Updates a logger definition.
* [updateResourceDefinition](#updateresourcedefinition) - Updates a resource definition.
* [updateSubscriptionDefinition](#updatesubscriptiondefinition) - Updates a subscription definition.
* [updateThingRuntimeConfiguration](#updatethingruntimeconfiguration) - Updates the runtime configuration of a thing.

## associateRoleToGroup

Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRoleToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateRoleToGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateRoleToGroupRequest();
    $request->groupId = 'error';
    $request->requestBody = new AssociateRoleToGroupRequestBody();
    $request->requestBody->roleArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->associateRoleToGroup($request);

    if ($response->associateRoleToGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateServiceRoleToAccount

Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceRoleToAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceRoleToAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceRoleToAccountRequest();
    $request->requestBody = new AssociateServiceRoleToAccountRequestBody();
    $request->requestBody->roleArn = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->associateServiceRoleToAccount($request);

    if ($response->associateServiceRoleToAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectorDefinition

Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Connector;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectorDefinitionRequest();
    $request->requestBody = new CreateConnectorDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateConnectorDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->connectors = [
        new Connector(),
        new Connector(),
        new Connector(),
        new Connector(),
    ];
    $request->requestBody->name = 'Miss Raymond Hauck III';
    $request->requestBody->tags = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmznClientToken = 'officia';

    $response = $sdk->sdk->createConnectorDefinition($request);

    if ($response->createConnectorDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectorDefinitionVersion

Creates a version of a connector definition which has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Connector;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectorDefinitionVersionRequest();
    $request->connectorDefinitionId = 'occaecati';
    $request->requestBody = new CreateConnectorDefinitionVersionRequestBody();
    $request->requestBody->connectors = [
        new Connector(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmznClientToken = 'modi';

    $response = $sdk->sdk->createConnectorDefinitionVersion($request);

    if ($response->createConnectorDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCoreDefinition

Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCoreDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCoreDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCoreDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Core;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCoreDefinitionRequest();
    $request->requestBody = new CreateCoreDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateCoreDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->cores = [
        new Core(),
    ];
    $request->requestBody->name = 'Jonathon Klocko';
    $request->requestBody->tags = [
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmznClientToken = 'saepe';

    $response = $sdk->sdk->createCoreDefinition($request);

    if ($response->createCoreDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCoreDefinitionVersion

Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCoreDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCoreDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Core;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCoreDefinitionVersionRequest();
    $request->coreDefinitionId = 'fuga';
    $request->requestBody = new CreateCoreDefinitionVersionRequestBody();
    $request->requestBody->cores = [
        new Core(),
        new Core(),
    ];
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmznClientToken = 'reiciendis';

    $response = $sdk->sdk->createCoreDefinitionVersion($request);

    if ($response->createCoreDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBodyDeploymentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->groupId = 'est';
    $request->requestBody = new CreateDeploymentRequestBody();
    $request->requestBody->deploymentId = 'mollitia';
    $request->requestBody->deploymentType = CreateDeploymentRequestBodyDeploymentTypeEnum::RESET_DEPLOYMENT;
    $request->requestBody->groupVersionId = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmznClientToken = 'minima';

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceDefinition

Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Device;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceDefinitionRequest();
    $request->requestBody = new CreateDeviceDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateDeviceDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->devices = [
        new Device(),
        new Device(),
        new Device(),
    ];
    $request->requestBody->name = 'Charlene Nicolas';
    $request->requestBody->tags = [
        'mollitia' => 'dolorem',
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmznClientToken = 'quam';

    $response = $sdk->sdk->createDeviceDefinition($request);

    if ($response->createDeviceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeviceDefinitionVersion

Creates a version of a device definition that has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeviceDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Device;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeviceDefinitionVersionRequest();
    $request->deviceDefinitionId = 'molestiae';
    $request->requestBody = new CreateDeviceDefinitionVersionRequestBody();
    $request->requestBody->devices = [
        new Device(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmznClientToken = 'odit';

    $response = $sdk->sdk->createDeviceDefinitionVersion($request);

    if ($response->createDeviceDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunctionDefinition

Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\FunctionDefaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionDefaultExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionIsolationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionRunAsConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionT;
use \OpenAPI\OpenAPI\Models\Shared\FunctionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionConfigurationEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\FunctionExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionDefinitionRequest();
    $request->requestBody = new CreateFunctionDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateFunctionDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->defaultConfig = new FunctionDefaultConfig();
    $request->requestBody->initialVersion->defaultConfig->execution = new FunctionDefaultExecutionConfig();
    $request->requestBody->initialVersion->defaultConfig->execution->isolationMode = FunctionIsolationModeEnum::NO_CONTAINER;
    $request->requestBody->initialVersion->defaultConfig->execution->runAs = new FunctionRunAsConfig();
    $request->requestBody->initialVersion->defaultConfig->execution->runAs->gid = 196582;
    $request->requestBody->initialVersion->defaultConfig->execution->runAs->uid = 949572;
    $request->requestBody->initialVersion->functions = [
        new FunctionT(),
        new FunctionT(),
    ];
    $request->requestBody->name = 'Miss Rufus Ankunding';
    $request->requestBody->tags = [
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmznClientToken = 'reprehenderit';

    $response = $sdk->sdk->createFunctionDefinition($request);

    if ($response->createFunctionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFunctionDefinitionVersion

Creates a version of a Lambda function definition that has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFunctionDefinitionVersionRequestBodyDefaultConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionDefaultExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionIsolationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionRunAsConfig;
use \OpenAPI\OpenAPI\Models\Shared\FunctionT;
use \OpenAPI\OpenAPI\Models\Shared\FunctionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FunctionConfigurationEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\FunctionExecutionConfig;
use \OpenAPI\OpenAPI\Models\Shared\ResourceAccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFunctionDefinitionVersionRequest();
    $request->functionDefinitionId = 'ut';
    $request->requestBody = new CreateFunctionDefinitionVersionRequestBody();
    $request->requestBody->defaultConfig = new CreateFunctionDefinitionVersionRequestBodyDefaultConfig();
    $request->requestBody->defaultConfig->execution = new FunctionDefaultExecutionConfig();
    $request->requestBody->defaultConfig->execution->isolationMode = FunctionIsolationModeEnum::NO_CONTAINER;
    $request->requestBody->defaultConfig->execution->runAs = new FunctionRunAsConfig();
    $request->requestBody->defaultConfig->execution->runAs->gid = 120196;
    $request->requestBody->defaultConfig->execution->runAs->uid = 359444;
    $request->requestBody->functions = [
        new FunctionT(),
        new FunctionT(),
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmznClientToken = 'quae';

    $response = $sdk->sdk->createFunctionDefinitionVersion($request);

    if ($response->createFunctionDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequestBodyInitialVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->requestBody = new CreateGroupRequestBody();
    $request->requestBody->initialVersion = new CreateGroupRequestBodyInitialVersion();
    $request->requestBody->initialVersion->connectorDefinitionVersionArn = 'ipsum';
    $request->requestBody->initialVersion->coreDefinitionVersionArn = 'quidem';
    $request->requestBody->initialVersion->deviceDefinitionVersionArn = 'molestias';
    $request->requestBody->initialVersion->functionDefinitionVersionArn = 'excepturi';
    $request->requestBody->initialVersion->loggerDefinitionVersionArn = 'pariatur';
    $request->requestBody->initialVersion->resourceDefinitionVersionArn = 'modi';
    $request->requestBody->initialVersion->subscriptionDefinitionVersionArn = 'praesentium';
    $request->requestBody->name = 'Grady Botsford';
    $request->requestBody->tags = [
        'itaque' => 'incidunt',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmznClientToken = 'quibusdam';

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupCertificateAuthority

Creates a CA for the group. If a CA already exists, it will rotate the existing CA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupCertificateAuthorityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupCertificateAuthorityRequest();
    $request->groupId = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmznClientToken = 'assumenda';

    $response = $sdk->sdk->createGroupCertificateAuthority($request);

    if ($response->createGroupCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupVersion

Creates a version of a group which has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupVersionRequest();
    $request->groupId = 'ipsam';
    $request->requestBody = new CreateGroupVersionRequestBody();
    $request->requestBody->connectorDefinitionVersionArn = 'alias';
    $request->requestBody->coreDefinitionVersionArn = 'fugit';
    $request->requestBody->deviceDefinitionVersionArn = 'dolorum';
    $request->requestBody->functionDefinitionVersionArn = 'excepturi';
    $request->requestBody->loggerDefinitionVersionArn = 'tempora';
    $request->requestBody->resourceDefinitionVersionArn = 'facilis';
    $request->requestBody->subscriptionDefinitionVersionArn = 'tempore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmznClientToken = 'provident';

    $response = $sdk->sdk->createGroupVersion($request);

    if ($response->createGroupVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoggerDefinition

Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggerDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggerDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Logger;
use \OpenAPI\OpenAPI\Models\Shared\LoggerComponentEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggerLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoggerDefinitionRequest();
    $request->requestBody = new CreateLoggerDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateLoggerDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->loggers = [
        new Logger(),
        new Logger(),
        new Logger(),
        new Logger(),
    ];
    $request->requestBody->name = 'Luke Fadel';
    $request->requestBody->tags = [
        'in' => 'in',
        'illum' => 'maiores',
        'rerum' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmznClientToken = 'non';

    $response = $sdk->sdk->createLoggerDefinition($request);

    if ($response->createLoggerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoggerDefinitionVersion

Creates a version of a logger definition that has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggerDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggerDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Logger;
use \OpenAPI\OpenAPI\Models\Shared\LoggerComponentEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggerLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\LoggerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoggerDefinitionVersionRequest();
    $request->loggerDefinitionId = 'occaecati';
    $request->requestBody = new CreateLoggerDefinitionVersionRequestBody();
    $request->requestBody->loggers = [
        new Logger(),
        new Logger(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmznClientToken = 'deleniti';

    $response = $sdk->sdk->createLoggerDefinitionVersion($request);

    if ($response->createLoggerDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourceDefinition

Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataContainer;
use \OpenAPI\OpenAPI\Models\Shared\LocalDeviceResourceData;
use \OpenAPI\OpenAPI\Models\Shared\GroupOwnerSetting;
use \OpenAPI\OpenAPI\Models\Shared\LocalVolumeResourceData;
use \OpenAPI\OpenAPI\Models\Shared\S3MachineLearningModelResourceData;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDownloadOwnerSetting;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerMachineLearningModelResourceData;
use \OpenAPI\OpenAPI\Models\Shared\SecretsManagerSecretResourceData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceDefinitionRequest();
    $request->requestBody = new CreateResourceDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateResourceDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->resources = [
        new Resource(),
        new Resource(),
        new Resource(),
        new Resource(),
    ];
    $request->requestBody->name = 'Sandy Huels';
    $request->requestBody->tags = [
        'molestiae' => 'perferendis',
        'nihil' => 'magnam',
        'distinctio' => 'id',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmznClientToken = 'aspernatur';

    $response = $sdk->sdk->createResourceDefinition($request);

    if ($response->createResourceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourceDefinitionVersion

Creates a version of a resource definition that has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDataContainer;
use \OpenAPI\OpenAPI\Models\Shared\LocalDeviceResourceData;
use \OpenAPI\OpenAPI\Models\Shared\GroupOwnerSetting;
use \OpenAPI\OpenAPI\Models\Shared\LocalVolumeResourceData;
use \OpenAPI\OpenAPI\Models\Shared\S3MachineLearningModelResourceData;
use \OpenAPI\OpenAPI\Models\Shared\ResourceDownloadOwnerSetting;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerMachineLearningModelResourceData;
use \OpenAPI\OpenAPI\Models\Shared\SecretsManagerSecretResourceData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceDefinitionVersionRequest();
    $request->requestBody = new CreateResourceDefinitionVersionRequestBody();
    $request->requestBody->resources = [
        new Resource(),
    ];
    $request->resourceDefinitionId = 'magnam';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmznClientToken = 'mollitia';

    $response = $sdk->sdk->createResourceDefinitionVersion($request);

    if ($response->createResourceDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSoftwareUpdateJob

Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSoftwareUpdateJobRequest();
    $request->requestBody = new CreateSoftwareUpdateJobRequestBody();
    $request->requestBody->s3UrlSignerRole = 'reiciendis';
    $request->requestBody->softwareToUpdate = CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum::OTA_AGENT;
    $request->requestBody->updateAgentLogLevel = CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum::DEBUG;
    $request->requestBody->updateTargets = [
        'dolor',
        'necessitatibus',
    ];
    $request->requestBody->updateTargetsArchitecture = CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum::ARMV6L;
    $request->requestBody->updateTargetsOperatingSystem = CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum::RASPBIAN;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmznClientToken = 'facilis';

    $response = $sdk->sdk->createSoftwareUpdateJob($request);

    if ($response->createSoftwareUpdateJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscriptionDefinition

Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionDefinitionRequestBodyInitialVersion;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionDefinitionRequest();
    $request->requestBody = new CreateSubscriptionDefinitionRequestBody();
    $request->requestBody->initialVersion = new CreateSubscriptionDefinitionRequestBodyInitialVersion();
    $request->requestBody->initialVersion->subscriptions = [
        new Subscription(),
        new Subscription(),
    ];
    $request->requestBody->name = 'Diane VonRueden';
    $request->requestBody->tags = [
        'repellat' => 'quibusdam',
        'sed' => 'saepe',
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmznClientToken = 'quo';

    $response = $sdk->sdk->createSubscriptionDefinition($request);

    if ($response->createSubscriptionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscriptionDefinitionVersion

Creates a version of a subscription definition which has already been defined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionDefinitionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionDefinitionVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionDefinitionVersionRequest();
    $request->requestBody = new CreateSubscriptionDefinitionVersionRequestBody();
    $request->requestBody->subscriptions = [
        new Subscription(),
        new Subscription(),
        new Subscription(),
        new Subscription(),
    ];
    $request->subscriptionDefinitionId = 'pariatur';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmznClientToken = 'maiores';

    $response = $sdk->sdk->createSubscriptionDefinitionVersion($request);

    if ($response->createSubscriptionDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectorDefinition

Deletes a connector definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorDefinitionRequest();
    $request->connectorDefinitionId = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->deleteConnectorDefinition($request);

    if ($response->deleteConnectorDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCoreDefinition

Deletes a core definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCoreDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCoreDefinitionRequest();
    $request->coreDefinitionId = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->deleteCoreDefinition($request);

    if ($response->deleteCoreDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeviceDefinition

Deletes a device definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeviceDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeviceDefinitionRequest();
    $request->deviceDefinitionId = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->deleteDeviceDefinition($request);

    if ($response->deleteDeviceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFunctionDefinition

Deletes a Lambda function definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFunctionDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFunctionDefinitionRequest();
    $request->functionDefinitionId = 'nesciunt';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->deleteFunctionDefinition($request);

    if ($response->deleteFunctionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

Deletes a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->groupId = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->deleteGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoggerDefinition

Deletes a logger definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoggerDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoggerDefinitionRequest();
    $request->loggerDefinitionId = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->deleteLoggerDefinition($request);

    if ($response->deleteLoggerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceDefinition

Deletes a resource definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceDefinitionRequest();
    $request->resourceDefinitionId = 'earum';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->deleteResourceDefinition($request);

    if ($response->deleteResourceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscriptionDefinition

Deletes a subscription definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionDefinitionRequest();
    $request->subscriptionDefinitionId = 'libero';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->deleteSubscriptionDefinition($request);

    if ($response->deleteSubscriptionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateRoleFromGroup

Disassociates the role from a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateRoleFromGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateRoleFromGroupRequest();
    $request->groupId = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->disassociateRoleFromGroup($request);

    if ($response->disassociateRoleFromGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateServiceRoleFromAccount

Disassociates the service role from your account. Without a service role, deployments will not work.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateServiceRoleFromAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateServiceRoleFromAccountRequest();
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->disassociateServiceRoleFromAccount($request);

    if ($response->disassociateServiceRoleFromAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociatedRole

Retrieves the role associated with a particular group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociatedRoleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociatedRoleRequest();
    $request->groupId = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->getAssociatedRole($request);

    if ($response->getAssociatedRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBulkDeploymentStatus

Returns the status of a bulk deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBulkDeploymentStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBulkDeploymentStatusRequest();
    $request->bulkDeploymentId = 'atque';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getBulkDeploymentStatus($request);

    if ($response->getBulkDeploymentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectivityInfo

Retrieves the connectivity information for a core.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectivityInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectivityInfoRequest();
    $request->thingName = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getConnectivityInfo($request);

    if ($response->getConnectivityInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorDefinition

Retrieves information about a connector definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorDefinitionRequest();
    $request->connectorDefinitionId = 'voluptate';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getConnectorDefinition($request);

    if ($response->getConnectorDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectorDefinitionVersion

Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectorDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectorDefinitionVersionRequest();
    $request->connectorDefinitionId = 'accusamus';
    $request->connectorDefinitionVersionId = 'ad';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';

    $response = $sdk->sdk->getConnectorDefinitionVersion($request);

    if ($response->getConnectorDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoreDefinition

Retrieves information about a core definition version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoreDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoreDefinitionRequest();
    $request->coreDefinitionId = 'alias';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getCoreDefinition($request);

    if ($response->getCoreDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoreDefinitionVersion

Retrieves information about a core definition version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoreDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoreDefinitionVersionRequest();
    $request->coreDefinitionId = 'dolorum';
    $request->coreDefinitionVersionId = 'a';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->getCoreDefinitionVersion($request);

    if ($response->getCoreDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeploymentStatus

Returns the status of a deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentStatusRequest();
    $request->deploymentId = 'tempore';
    $request->groupId = 'accusamus';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->getDeploymentStatus($request);

    if ($response->getDeploymentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceDefinition

Retrieves information about a device definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceDefinitionRequest();
    $request->deviceDefinitionId = 'expedita';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getDeviceDefinition($request);

    if ($response->getDeviceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceDefinitionVersion

Retrieves information about a device definition version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceDefinitionVersionRequest();
    $request->deviceDefinitionId = 'ipsum';
    $request->deviceDefinitionVersionId = 'incidunt';
    $request->nextToken = 'qui';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->getDeviceDefinitionVersion($request);

    if ($response->getDeviceDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionDefinition

Retrieves information about a Lambda function definition, including its creation time and latest version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionDefinitionRequest();
    $request->functionDefinitionId = 'incidunt';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';

    $response = $sdk->sdk->getFunctionDefinition($request);

    if ($response->getFunctionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFunctionDefinitionVersion

Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFunctionDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFunctionDefinitionVersionRequest();
    $request->functionDefinitionId = 'temporibus';
    $request->functionDefinitionVersionId = 'qui';
    $request->nextToken = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getFunctionDefinitionVersion($request);

    if ($response->getFunctionDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroup

Retrieves information about a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->groupId = 'voluptatem';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->getGroup($request);

    if ($response->getGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupCertificateAuthority

Retreives the CA associated with a group. Returns the public key of the CA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupCertificateAuthorityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupCertificateAuthorityRequest();
    $request->certificateAuthorityId = 'nobis';
    $request->groupId = 'quos';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getGroupCertificateAuthority($request);

    if ($response->getGroupCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupCertificateConfiguration

Retrieves the current configuration for the CA used by the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupCertificateConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupCertificateConfigurationRequest();
    $request->groupId = 'adipisci';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->getGroupCertificateConfiguration($request);

    if ($response->getGroupCertificateConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupVersion

Retrieves information about a group version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupVersionRequest();
    $request->groupId = 'est';
    $request->groupVersionId = 'repellendus';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getGroupVersion($request);

    if ($response->getGroupVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoggerDefinition

Retrieves information about a logger definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoggerDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoggerDefinitionRequest();
    $request->loggerDefinitionId = 'laudantium';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getLoggerDefinition($request);

    if ($response->getLoggerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoggerDefinitionVersion

Retrieves information about a logger definition version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoggerDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoggerDefinitionVersionRequest();
    $request->loggerDefinitionId = 'ipsum';
    $request->loggerDefinitionVersionId = 'delectus';
    $request->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->getLoggerDefinitionVersion($request);

    if ($response->getLoggerDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceDefinition

Retrieves information about a resource definition, including its creation time and latest version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceDefinitionRequest();
    $request->resourceDefinitionId = 'odio';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getResourceDefinition($request);

    if ($response->getResourceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceDefinitionVersion

Retrieves information about a resource definition version, including which resources are included in the version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceDefinitionVersionRequest();
    $request->resourceDefinitionId = 'sequi';
    $request->resourceDefinitionVersionId = 'natus';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->getResourceDefinitionVersion($request);

    if ($response->getResourceDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceRoleForAccount

Retrieves the service role that is attached to your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceRoleForAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceRoleForAccountRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->getServiceRoleForAccount($request);

    if ($response->getServiceRoleForAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionDefinition

Retrieves information about a subscription definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionDefinitionRequest();
    $request->subscriptionDefinitionId = 'tempora';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->getSubscriptionDefinition($request);

    if ($response->getSubscriptionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionDefinitionVersion

Retrieves information about a subscription definition version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionDefinitionVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionDefinitionVersionRequest();
    $request->nextToken = 'ex';
    $request->subscriptionDefinitionId = 'laudantium';
    $request->subscriptionDefinitionVersionId = 'dicta';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->getSubscriptionDefinitionVersion($request);

    if ($response->getSubscriptionDefinitionVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThingRuntimeConfiguration

Get the runtime configuration of a thing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThingRuntimeConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThingRuntimeConfigurationRequest();
    $request->thingName = 'nostrum';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'veniam';

    $response = $sdk->sdk->getThingRuntimeConfiguration($request);

    if ($response->getThingRuntimeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBulkDeploymentDetailedReports

Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBulkDeploymentDetailedReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBulkDeploymentDetailedReportsRequest();
    $request->bulkDeploymentId = 'aliquid';
    $request->maxResults = 'inventore';
    $request->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->listBulkDeploymentDetailedReports($request);

    if ($response->listBulkDeploymentDetailedReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBulkDeployments

Returns a list of bulk deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBulkDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBulkDeploymentsRequest();
    $request->maxResults = 'a';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->listBulkDeployments($request);

    if ($response->listBulkDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectorDefinitionVersions

Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorDefinitionVersionsRequest();
    $request->connectorDefinitionId = 'inventore';
    $request->maxResults = 'non';
    $request->nextToken = 'et';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->listConnectorDefinitionVersions($request);

    if ($response->listConnectorDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectorDefinitions

Retrieves a list of connector definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorDefinitionsRequest();
    $request->maxResults = 'quas';
    $request->nextToken = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->listConnectorDefinitions($request);

    if ($response->listConnectorDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCoreDefinitionVersions

Lists the versions of a core definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCoreDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCoreDefinitionVersionsRequest();
    $request->coreDefinitionId = 'provident';
    $request->maxResults = 'ipsa';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->listCoreDefinitionVersions($request);

    if ($response->listCoreDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCoreDefinitions

Retrieves a list of core definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCoreDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCoreDefinitionsRequest();
    $request->maxResults = 'reprehenderit';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->listCoreDefinitions($request);

    if ($response->listCoreDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployments

Returns a history of deployments for the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentsRequest();
    $request->groupId = 'quisquam';
    $request->maxResults = 'veritatis';
    $request->nextToken = 'ipsa';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->listDeployments($request);

    if ($response->listDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceDefinitionVersions

Lists the versions of a device definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceDefinitionVersionsRequest();
    $request->deviceDefinitionId = 'eius';
    $request->maxResults = 'eos';
    $request->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->listDeviceDefinitionVersions($request);

    if ($response->listDeviceDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceDefinitions

Retrieves a list of device definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceDefinitionsRequest();
    $request->maxResults = 'sequi';
    $request->nextToken = 'quo';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->listDeviceDefinitions($request);

    if ($response->listDeviceDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionDefinitionVersions

Lists the versions of a Lambda function definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionDefinitionVersionsRequest();
    $request->functionDefinitionId = 'nihil';
    $request->maxResults = 'totam';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->listFunctionDefinitionVersions($request);

    if ($response->listFunctionDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFunctionDefinitions

Retrieves a list of Lambda function definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFunctionDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFunctionDefinitionsRequest();
    $request->maxResults = 'molestiae';
    $request->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->listFunctionDefinitions($request);

    if ($response->listFunctionDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupCertificateAuthorities

Retrieves the current CAs for a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupCertificateAuthoritiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupCertificateAuthoritiesRequest();
    $request->groupId = 'fuga';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->listGroupCertificateAuthorities($request);

    if ($response->listGroupCertificateAuthoritiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroupVersions

Lists the versions of a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupVersionsRequest();
    $request->groupId = 'sapiente';
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'ratione';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'eveniet';

    $response = $sdk->sdk->listGroupVersions($request);

    if ($response->listGroupVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

Retrieves a list of groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->maxResults = 'accusamus';
    $request->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->listGroups($request);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLoggerDefinitionVersions

Lists the versions of a logger definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLoggerDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLoggerDefinitionVersionsRequest();
    $request->loggerDefinitionId = 'vel';
    $request->maxResults = 'harum';
    $request->nextToken = 'molestiae';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->listLoggerDefinitionVersions($request);

    if ($response->listLoggerDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLoggerDefinitions

Retrieves a list of logger definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLoggerDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLoggerDefinitionsRequest();
    $request->maxResults = 'tempore';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consectetur';

    $response = $sdk->sdk->listLoggerDefinitions($request);

    if ($response->listLoggerDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceDefinitionVersions

Lists the versions of a resource definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceDefinitionVersionsRequest();
    $request->maxResults = 'esse';
    $request->nextToken = 'blanditiis';
    $request->resourceDefinitionId = 'provident';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->listResourceDefinitionVersions($request);

    if ($response->listResourceDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceDefinitions

Retrieves a list of resource definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceDefinitionsRequest();
    $request->maxResults = 'sint';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->listResourceDefinitions($request);

    if ($response->listResourceDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscriptionDefinitionVersions

Lists the versions of a subscription definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionDefinitionVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscriptionDefinitionVersionsRequest();
    $request->maxResults = 'quasi';
    $request->nextToken = 'similique';
    $request->subscriptionDefinitionId = 'culpa';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->listSubscriptionDefinitionVersions($request);

    if ($response->listSubscriptionDefinitionVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubscriptionDefinitions

Retrieves a list of subscription definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSubscriptionDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubscriptionDefinitionsRequest();
    $request->maxResults = 'libero';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->listSubscriptionDefinitions($request);

    if ($response->listSubscriptionDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves a list of resource tags for a resource arn.

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
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';
    $request->resourceArn = 'deleniti';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetDeployments

Resets a group's deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetDeploymentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetDeploymentsRequest();
    $request->groupId = 'itaque';
    $request->requestBody = new ResetDeploymentsRequestBody();
    $request->requestBody->force = false;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmznClientToken = 'voluptate';

    $response = $sdk->sdk->resetDeployments($request);

    if ($response->resetDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBulkDeployment

Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBulkDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartBulkDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBulkDeploymentRequest();
    $request->requestBody = new StartBulkDeploymentRequestBody();
    $request->requestBody->executionRoleArn = 'ipsa';
    $request->requestBody->inputFileUri = 'minima';
    $request->requestBody->tags = [
        'consectetur' => 'adipisci',
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmznClientToken = 'mollitia';

    $response = $sdk->sdk->startBulkDeployment($request);

    if ($response->startBulkDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopBulkDeployment

Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopBulkDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopBulkDeploymentRequest();
    $request->bulkDeploymentId = 'ab';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->stopBulkDeployment($request);

    if ($response->stopBulkDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.

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
        'voluptas' => 'aut',
    ];
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->resourceArn = 'asperiores';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove resource tags from a Greengrass Resource.

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
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'maxime';
    $request->resourceArn = 'dignissimos';
    $request->tagKeys = [
        'asperiores',
        'nemo',
        'quae',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectivityInfo

Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectivityInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectivityInfoRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConnectivityInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectivityInfoRequest();
    $request->requestBody = new UpdateConnectivityInfoRequestBody();
    $request->requestBody->connectivityInfo = [
        new ConnectivityInfo(),
        new ConnectivityInfo(),
    ];
    $request->thingName = 'porro';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->updateConnectivityInfo($request);

    if ($response->updateConnectivityInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectorDefinition

Updates a connector definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectorDefinitionRequest();
    $request->connectorDefinitionId = 'velit';
    $request->requestBody = new UpdateConnectorDefinitionRequestBody();
    $request->requestBody->name = 'Rex Walter';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->updateConnectorDefinition($request);

    if ($response->updateConnectorDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCoreDefinition

Updates a core definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCoreDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCoreDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCoreDefinitionRequest();
    $request->coreDefinitionId = 'cum';
    $request->requestBody = new UpdateCoreDefinitionRequestBody();
    $request->requestBody->name = 'Pearl Hessel';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->updateCoreDefinition($request);

    if ($response->updateCoreDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceDefinition

Updates a device definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceDefinitionRequest();
    $request->deviceDefinitionId = 'exercitationem';
    $request->requestBody = new UpdateDeviceDefinitionRequestBody();
    $request->requestBody->name = 'Carroll Gerhold';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->updateDeviceDefinition($request);

    if ($response->updateDeviceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFunctionDefinition

Updates a Lambda function definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFunctionDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFunctionDefinitionRequest();
    $request->functionDefinitionId = 'adipisci';
    $request->requestBody = new UpdateFunctionDefinitionRequestBody();
    $request->requestBody->name = 'Wendy Breitenberg';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->updateFunctionDefinition($request);

    if ($response->updateFunctionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroup

Updates a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupRequest();
    $request->groupId = 'libero';
    $request->requestBody = new UpdateGroupRequestBody();
    $request->requestBody->name = 'Sophia Murray';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->updateGroup($request);

    if ($response->updateGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroupCertificateConfiguration

Updates the Certificate expiry time for a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupCertificateConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupCertificateConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupCertificateConfigurationRequest();
    $request->groupId = 'minus';
    $request->requestBody = new UpdateGroupCertificateConfigurationRequestBody();
    $request->requestBody->certificateExpiryInMilliseconds = 'dolores';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->updateGroupCertificateConfiguration($request);

    if ($response->updateGroupCertificateConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLoggerDefinition

Updates a logger definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggerDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggerDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLoggerDefinitionRequest();
    $request->loggerDefinitionId = 'adipisci';
    $request->requestBody = new UpdateLoggerDefinitionRequestBody();
    $request->requestBody->name = 'Guy Luettgen';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->updateLoggerDefinition($request);

    if ($response->updateLoggerDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceDefinition

Updates a resource definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceDefinitionRequest();
    $request->requestBody = new UpdateResourceDefinitionRequestBody();
    $request->requestBody->name = 'Luz Cormier';
    $request->resourceDefinitionId = 'asperiores';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->updateResourceDefinition($request);

    if ($response->updateResourceDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionDefinition

Updates a subscription definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionDefinitionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionDefinitionRequest();
    $request->requestBody = new UpdateSubscriptionDefinitionRequestBody();
    $request->requestBody->name = 'Pearl Johnson';
    $request->subscriptionDefinitionId = 'voluptas';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->updateSubscriptionDefinition($request);

    if ($response->updateSubscriptionDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThingRuntimeConfiguration

Updates the runtime configuration of a thing.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRuntimeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRuntimeConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThingRuntimeConfigurationRequest();
    $request->requestBody = new UpdateThingRuntimeConfigurationRequestBody();
    $request->requestBody->telemetryConfiguration = new UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration();
    $request->requestBody->telemetryConfiguration->telemetry = TelemetryEnum::ON;
    $request->thingName = 'corrupti';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->updateThingRuntimeConfiguration($request);

    if ($response->updateThingRuntimeConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
