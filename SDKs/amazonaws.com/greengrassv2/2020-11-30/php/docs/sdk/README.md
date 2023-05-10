# SDK

## Overview

<p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and deploy applications to fleets of edge devices for local operation.</p> <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components, manage deployments, and core devices.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/greengrass/>
### Available Operations

* [associateServiceRoleToAccount](#associateserviceroletoaccount) - Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [batchAssociateClientDeviceWithCoreDevice](#batchassociateclientdevicewithcoredevice) - <p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>
* [batchDisassociateClientDeviceFromCoreDevice](#batchdisassociateclientdevicefromcoredevice) - Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.
* [cancelDeployment](#canceldeployment) - Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.
* [createComponentVersion](#createcomponentversion) - <p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>
* [createDeployment](#createdeployment) - <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
* [deleteComponent](#deletecomponent) - <p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>
* [deleteCoreDevice](#deletecoredevice) - Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.
* [deleteDeployment](#deletedeployment) - <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>
* [describeComponent](#describecomponent) - Retrieves metadata for a version of a component.
* [disassociateServiceRoleFromAccount](#disassociateservicerolefromaccount) - Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [getComponent](#getcomponent) - Gets the recipe for a version of a component.
* [getComponentVersionArtifact](#getcomponentversionartifact) - Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.
* [getConnectivityInfo](#getconnectivityinfo) - <p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
* [getCoreDevice](#getcoredevice) - <p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [getDeployment](#getdeployment) - Gets a deployment. Deployments define the components that run on Greengrass core devices.
* [getServiceRoleForAccount](#getserviceroleforaccount) - Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [listClientDevicesAssociatedWithCoreDevice](#listclientdevicesassociatedwithcoredevice) - Retrieves a paginated list of client devices that are associated with a core device.
* [listComponentVersions](#listcomponentversions) - Retrieves a paginated list of all versions for a component. Greater versions are listed first.
* [listComponents](#listcomponents) - Retrieves a paginated list of component summaries. This list includes components that you have permission to view.
* [listCoreDevices](#listcoredevices) - <p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [listDeployments](#listdeployments) - Retrieves a paginated list of deployments.
* [listEffectiveDeployments](#listeffectivedeployments) - Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
* [listInstalledComponents](#listinstalledcomponents) - <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [listTagsForResource](#listtagsforresource) - Retrieves the list of tags for an IoT Greengrass resource.
* [resolveComponentCandidates](#resolvecomponentcandidates) - <p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>
* [tagResource](#tagresource) - Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.
* [untagResource](#untagresource) - Removes a tag from an IoT Greengrass resource.
* [updateConnectivityInfo](#updateconnectivityinfo) - <p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

## associateServiceRoleToAccount

Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

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
    $request->requestBody->roleArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->associateServiceRoleToAccount($request);

    if ($response->associateServiceRoleToAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateClientDeviceWithCoreDevice

<p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateClientDeviceWithCoreDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateClientDeviceWithCoreDeviceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AssociateClientDeviceWithCoreDeviceEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateClientDeviceWithCoreDeviceRequest();
    $request->requestBody = new BatchAssociateClientDeviceWithCoreDeviceRequestBody();
    $request->requestBody->entries = [
        new AssociateClientDeviceWithCoreDeviceEntry(),
        new AssociateClientDeviceWithCoreDeviceEntry(),
        new AssociateClientDeviceWithCoreDeviceEntry(),
        new AssociateClientDeviceWithCoreDeviceEntry(),
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->coreDeviceThingName = 'excepturi';

    $response = $sdk->sdk->batchAssociateClientDeviceWithCoreDevice($request);

    if ($response->batchAssociateClientDeviceWithCoreDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateClientDeviceFromCoreDevice

Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateClientDeviceFromCoreDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateClientDeviceFromCoreDeviceEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateClientDeviceFromCoreDeviceRequest();
    $request->requestBody = new BatchDisassociateClientDeviceFromCoreDeviceRequestBody();
    $request->requestBody->entries = [
        new DisassociateClientDeviceFromCoreDeviceEntry(),
        new DisassociateClientDeviceFromCoreDeviceEntry(),
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->coreDeviceThingName = 'ipsam';

    $response = $sdk->sdk->batchDisassociateClientDeviceFromCoreDevice($request);

    if ($response->batchDisassociateClientDeviceFromCoreDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDeployment

Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDeploymentRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->deploymentId = 'molestiae';

    $response = $sdk->sdk->cancelDeployment($request);

    if ($response->cancelDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComponentVersion

<p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentVersionRequestBodyLambdaFunction;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDependencyRequirement;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDependencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaExecutionParameters;
use \OpenAPI\OpenAPI\Models\Shared\LambdaEventSource;
use \OpenAPI\OpenAPI\Models\Shared\LambdaEventSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaInputPayloadEncodingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaLinuxProcessParams;
use \OpenAPI\OpenAPI\Models\Shared\LambdaContainerParams;
use \OpenAPI\OpenAPI\Models\Shared\LambdaDeviceMount;
use \OpenAPI\OpenAPI\Models\Shared\LambdaFilesystemPermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaVolumeMount;
use \OpenAPI\OpenAPI\Models\Shared\LambdaIsolationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentPlatform;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentVersionRequest();
    $request->requestBody = new CreateComponentVersionRequestBody();
    $request->requestBody->clientToken = 'quod';
    $request->requestBody->inlineRecipe = 'quod';
    $request->requestBody->lambdaFunction = new CreateComponentVersionRequestBodyLambdaFunction();
    $request->requestBody->lambdaFunction->componentDependencies = [
        'totam' => new ComponentDependencyRequirement(),
        'porro' => new ComponentDependencyRequirement(),
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters = new LambdaExecutionParameters();
    $request->requestBody->lambdaFunction->componentLambdaParameters->environmentVariables = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters->eventSources = [
        new LambdaEventSource(),
        new LambdaEventSource(),
        new LambdaEventSource(),
        new LambdaEventSource(),
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters->execArgs = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters->inputPayloadEncodingType = LambdaInputPayloadEncodingTypeEnum::JSON;
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams = new LambdaLinuxProcessParams();
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->containerParams = new LambdaContainerParams();
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->containerParams->devices = [
        new LambdaDeviceMount(),
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->containerParams->memorySizeInKB = 774234;
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->containerParams->mountROSysfs = false;
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->containerParams->volumes = [
        new LambdaVolumeMount(),
        new LambdaVolumeMount(),
        new LambdaVolumeMount(),
    ];
    $request->requestBody->lambdaFunction->componentLambdaParameters->linuxProcessParams->isolationMode = LambdaIsolationModeEnum::GREENGRASS_CONTAINER;
    $request->requestBody->lambdaFunction->componentLambdaParameters->maxIdleTimeInSeconds = 216550;
    $request->requestBody->lambdaFunction->componentLambdaParameters->maxInstancesCount = 568434;
    $request->requestBody->lambdaFunction->componentLambdaParameters->maxQueueSize = 135218;
    $request->requestBody->lambdaFunction->componentLambdaParameters->pinned = false;
    $request->requestBody->lambdaFunction->componentLambdaParameters->statusTimeoutInSeconds = 18789;
    $request->requestBody->lambdaFunction->componentLambdaParameters->timeoutInSeconds = 324141;
    $request->requestBody->lambdaFunction->componentName = 'natus';
    $request->requestBody->lambdaFunction->componentPlatforms = [
        new ComponentPlatform(),
    ];
    $request->requestBody->lambdaFunction->componentVersion = 'iste';
    $request->requestBody->lambdaFunction->lambdaArn = 'dolor';
    $request->requestBody->tags = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->createComponentVersion($request);

    if ($response->createComponentVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

<p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDeploymentSpecification;
use \OpenAPI\OpenAPI\Models\Shared\ComponentConfigurationUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ComponentRunWith;
use \OpenAPI\OpenAPI\Models\Shared\SystemResourceLimits;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBodyDeploymentPolicies;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentComponentUpdatePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentComponentUpdatePolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentConfigurationValidationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentFailureHandlingPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBodyIotJobConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobAbortConfig;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobAbortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobAbortActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobExecutionFailureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobExecutionsRolloutConfig;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobExponentialRolloutRate;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobRateIncreaseCriteria;
use \OpenAPI\OpenAPI\Models\Shared\IoTJobTimeoutConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->requestBody = new CreateDeploymentRequestBody();
    $request->requestBody->clientToken = 'est';
    $request->requestBody->components = [
        'laborum' => new ComponentDeploymentSpecification(),
        'dolores' => new ComponentDeploymentSpecification(),
        'dolorem' => new ComponentDeploymentSpecification(),
    ];
    $request->requestBody->deploymentName = 'corporis';
    $request->requestBody->deploymentPolicies = new CreateDeploymentRequestBodyDeploymentPolicies();
    $request->requestBody->deploymentPolicies->componentUpdatePolicy = new DeploymentComponentUpdatePolicy();
    $request->requestBody->deploymentPolicies->componentUpdatePolicy->action = DeploymentComponentUpdatePolicyActionEnum::NOTIFY_COMPONENTS;
    $request->requestBody->deploymentPolicies->componentUpdatePolicy->timeoutInSeconds = 750686;
    $request->requestBody->deploymentPolicies->configurationValidationPolicy = new DeploymentConfigurationValidationPolicy();
    $request->requestBody->deploymentPolicies->configurationValidationPolicy->timeoutInSeconds = 315428;
    $request->requestBody->deploymentPolicies->failureHandlingPolicy = DeploymentFailureHandlingPolicyEnum::DO_NOTHING;
    $request->requestBody->iotJobConfiguration = new CreateDeploymentRequestBodyIotJobConfiguration();
    $request->requestBody->iotJobConfiguration->abortConfig = new IoTJobAbortConfig();
    $request->requestBody->iotJobConfiguration->abortConfig->criteriaList = [
        new IoTJobAbortCriteria(),
        new IoTJobAbortCriteria(),
    ];
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig = new IoTJobExecutionsRolloutConfig();
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate = new IoTJobExponentialRolloutRate();
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate->baseRatePerMinute = 325047;
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate->incrementFactor = 5701.97;
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria = new IoTJobRateIncreaseCriteria();
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfNotifiedThings = 38425;
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->exponentialRate->rateIncreaseCriteria->numberOfSucceededThings = 438601;
    $request->requestBody->iotJobConfiguration->jobExecutionsRolloutConfig->maximumPerMinute = 634274;
    $request->requestBody->iotJobConfiguration->timeoutConfig = new IoTJobTimeoutConfig();
    $request->requestBody->iotJobConfiguration->timeoutConfig->inProgressTimeoutInMinutes = 988374;
    $request->requestBody->parentTargetArn = 'sapiente';
    $request->requestBody->tags = [
        'mollitia' => 'dolorem',
    ];
    $request->requestBody->targetArn = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponent

<p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->arn = 'animi';

    $response = $sdk->sdk->deleteComponent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCoreDevice

Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCoreDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCoreDeviceRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';
    $request->coreDeviceThingName = 'possimus';

    $response = $sdk->sdk->deleteCoreDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployment

<p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeploymentRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->deploymentId = 'voluptatibus';

    $response = $sdk->sdk->deleteDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComponent

Retrieves metadata for a version of a component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComponentRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->arn = 'cum';

    $response = $sdk->sdk->describeComponent($request);

    if ($response->describeComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateServiceRoleFromAccount

Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

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
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->disassociateServiceRoleFromAccount($request);

    if ($response->disassociateServiceRoleFromAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponent

Gets the recipe for a version of a component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRecipeOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->arn = 'repudiandae';
    $request->recipeOutputFormat = GetComponentRecipeOutputFormatEnum::JSON;

    $response = $sdk->sdk->getComponent($request);

    if ($response->getComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponentVersionArtifact

Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentVersionArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentVersionArtifactRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->arn = 'rem';
    $request->artifactName = 'voluptates';

    $response = $sdk->sdk->getComponentVersionArtifact($request);

    if ($response->getComponentVersionArtifactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectivityInfo

<p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

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
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->thingName = 'consequatur';

    $response = $sdk->sdk->getConnectivityInfo($request);

    if ($response->getConnectivityInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCoreDevice

<p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCoreDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCoreDeviceRequest();
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->coreDeviceThingName = 'modi';

    $response = $sdk->sdk->getCoreDevice($request);

    if ($response->getCoreDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeployment

Gets a deployment. Deployments define the components that run on Greengrass core devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->deploymentId = 'ipsam';

    $response = $sdk->sdk->getDeployment($request);

    if ($response->getDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceRoleForAccount

Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

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
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->getServiceRoleForAccount($request);

    if ($response->getServiceRoleForAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listClientDevicesAssociatedWithCoreDevice

Retrieves a paginated list of client devices that are associated with a core device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListClientDevicesAssociatedWithCoreDeviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListClientDevicesAssociatedWithCoreDeviceRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->coreDeviceThingName = 'provident';
    $request->maxResults = 896039;
    $request->nextToken = 'sint';

    $response = $sdk->sdk->listClientDevicesAssociatedWithCoreDevice($request);

    if ($response->listClientDevicesAssociatedWithCoreDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponentVersions

Retrieves a paginated list of all versions for a component. Greater versions are listed first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentVersionsRequest();
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->arn = 'illum';
    $request->maxResults = 978571;
    $request->nextToken = 'rerum';

    $response = $sdk->sdk->listComponentVersions($request);

    if ($response->listComponentVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

Retrieves a paginated list of component summaries. This list includes components that you have permission to view.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsScopeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->maxResults = 881104;
    $request->nextToken = 'non';
    $request->scope = ListComponentsScopeEnum::PUBLIC;

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCoreDevices

<p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCoreDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCoreDevicesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCoreDevicesRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->maxResults = 501324;
    $request->nextToken = 'deleniti';
    $request->status = ListCoreDevicesStatusEnum::UNHEALTHY;
    $request->thingGroupArn = 'amet';

    $response = $sdk->sdk->listCoreDevices($request);

    if ($response->listCoreDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployments

Retrieves a paginated list of deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeploymentsHistoryFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeploymentsRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->historyFilter = ListDeploymentsHistoryFilterEnum::ALL;
    $request->maxResults = 301575;
    $request->nextToken = 'distinctio';
    $request->parentTargetArn = 'id';
    $request->targetArn = 'labore';

    $response = $sdk->sdk->listDeployments($request);

    if ($response->listDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEffectiveDeployments

Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEffectiveDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEffectiveDeploymentsRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->coreDeviceThingName = 'architecto';
    $request->maxResults = 298282;
    $request->nextToken = 'et';

    $response = $sdk->sdk->listEffectiveDeployments($request);

    if ($response->listEffectiveDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstalledComponents

<p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstalledComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstalledComponentsTopologyFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstalledComponentsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->coreDeviceThingName = 'reiciendis';
    $request->maxResults = 652103;
    $request->nextToken = 'ad';
    $request->topologyFilter = ListInstalledComponentsTopologyFilterEnum::ALL;

    $response = $sdk->sdk->listInstalledComponents($request);

    if ($response->listInstalledComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves the list of tags for an IoT Greengrass resource.

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
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->resourceArn = 'debitis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resolveComponentCandidates

<p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResolveComponentCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResolveComponentCandidatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ComponentCandidate;
use \OpenAPI\OpenAPI\Models\Operations\ResolveComponentCandidatesRequestBodyPlatform;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResolveComponentCandidatesRequest();
    $request->requestBody = new ResolveComponentCandidatesRequestBody();
    $request->requestBody->componentCandidates = [
        new ComponentCandidate(),
        new ComponentCandidate(),
    ];
    $request->requestBody->platform = new ResolveComponentCandidatesRequestBodyPlatform();
    $request->requestBody->platform->attributes = [
        'deleniti' => 'facilis',
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->requestBody->platform->name = 'Kristie Spencer';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->resolveComponentCandidates($request);

    if ($response->resolveComponentCandidatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.

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
        'illum' => 'pariatur',
        'maxime' => 'ea',
        'excepturi' => 'odit',
        'ea' => 'accusantium',
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';
    $request->resourceArn = 'eaque';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from an IoT Greengrass resource.

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
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->resourceArn = 'cumque';
    $request->tagKeys = [
        'hic',
        'libero',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectivityInfo

<p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

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
        new ConnectivityInfo(),
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->thingName = 'eos';

    $response = $sdk->sdk->updateConnectivityInfo($request);

    if ($response->updateConnectivityInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
