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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequest;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequestBody;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceRoleToAccountRequest req = new AssociateServiceRoleToAccountRequest(                new AssociateServiceRoleToAccountRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AssociateServiceRoleToAccountResponse res = sdk.sdk.associateServiceRoleToAccount(req);

            if (res.associateServiceRoleToAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateClientDeviceWithCoreDevice

<p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateClientDeviceWithCoreDeviceRequest;
import org.openapis.openapi.models.operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody;
import org.openapis.openapi.models.operations.BatchAssociateClientDeviceWithCoreDeviceResponse;
import org.openapis.openapi.models.shared.AssociateClientDeviceWithCoreDeviceEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateClientDeviceWithCoreDeviceRequest req = new BatchAssociateClientDeviceWithCoreDeviceRequest(                new BatchAssociateClientDeviceWithCoreDeviceRequestBody() {{
                                entries = new org.openapis.openapi.models.shared.AssociateClientDeviceWithCoreDeviceEntry[]{{
                                    add(new AssociateClientDeviceWithCoreDeviceEntry("placeat") {{
                                        thingName = "minus";
                                    }}),
                                    add(new AssociateClientDeviceWithCoreDeviceEntry("iusto") {{
                                        thingName = "voluptatum";
                                    }}),
                                }};
                            }};, "excepturi") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            BatchAssociateClientDeviceWithCoreDeviceResponse res = sdk.sdk.batchAssociateClientDeviceWithCoreDevice(req);

            if (res.batchAssociateClientDeviceWithCoreDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateClientDeviceFromCoreDevice

Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateClientDeviceFromCoreDeviceRequest;
import org.openapis.openapi.models.operations.BatchDisassociateClientDeviceFromCoreDeviceRequestBody;
import org.openapis.openapi.models.operations.BatchDisassociateClientDeviceFromCoreDeviceResponse;
import org.openapis.openapi.models.shared.DisassociateClientDeviceFromCoreDeviceEntry;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateClientDeviceFromCoreDeviceRequest req = new BatchDisassociateClientDeviceFromCoreDeviceRequest(                new BatchDisassociateClientDeviceFromCoreDeviceRequestBody() {{
                                entries = new org.openapis.openapi.models.shared.DisassociateClientDeviceFromCoreDeviceEntry[]{{
                                    add(new DisassociateClientDeviceFromCoreDeviceEntry("sapiente") {{
                                        thingName = "repellendus";
                                    }}),
                                    add(new DisassociateClientDeviceFromCoreDeviceEntry("odit") {{
                                        thingName = "quo";
                                    }}),
                                }};
                            }};, "at") {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            BatchDisassociateClientDeviceFromCoreDeviceResponse res = sdk.sdk.batchDisassociateClientDeviceFromCoreDevice(req);

            if (res.batchDisassociateClientDeviceFromCoreDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelDeployment

Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelDeploymentRequest;
import org.openapis.openapi.models.operations.CancelDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelDeploymentRequest req = new CancelDeploymentRequest("dolorum") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            CancelDeploymentResponse res = sdk.sdk.cancelDeployment(req);

            if (res.cancelDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComponentVersion

<p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComponentVersionRequest;
import org.openapis.openapi.models.operations.CreateComponentVersionRequestBody;
import org.openapis.openapi.models.operations.CreateComponentVersionRequestBodyLambdaFunction;
import org.openapis.openapi.models.operations.CreateComponentVersionResponse;
import org.openapis.openapi.models.shared.ComponentDependencyRequirement;
import org.openapis.openapi.models.shared.ComponentDependencyTypeEnum;
import org.openapis.openapi.models.shared.ComponentPlatform;
import org.openapis.openapi.models.shared.LambdaContainerParams;
import org.openapis.openapi.models.shared.LambdaDeviceMount;
import org.openapis.openapi.models.shared.LambdaEventSource;
import org.openapis.openapi.models.shared.LambdaEventSourceTypeEnum;
import org.openapis.openapi.models.shared.LambdaExecutionParameters;
import org.openapis.openapi.models.shared.LambdaFilesystemPermissionEnum;
import org.openapis.openapi.models.shared.LambdaInputPayloadEncodingTypeEnum;
import org.openapis.openapi.models.shared.LambdaIsolationModeEnum;
import org.openapis.openapi.models.shared.LambdaLinuxProcessParams;
import org.openapis.openapi.models.shared.LambdaVolumeMount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComponentVersionRequest req = new CreateComponentVersionRequest(                new CreateComponentVersionRequestBody() {{
                                clientToken = "totam";
                                inlineRecipe = "beatae";
                                lambdaFunction = new CreateComponentVersionRequestBodyLambdaFunction() {{
                                    componentDependencies = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentDependencyRequirement>() {{
                                        put("molestiae", new ComponentDependencyRequirement() {{
                                            dependencyType = ComponentDependencyTypeEnum.HARD;
                                            versionRequirement = "qui";
                                        }});
                                        put("impedit", new ComponentDependencyRequirement() {{
                                            dependencyType = ComponentDependencyTypeEnum.SOFT;
                                            versionRequirement = "esse";
                                        }});
                                    }};
                                    componentLambdaParameters = new LambdaExecutionParameters() {{
                                        environmentVariables = new java.util.HashMap<String, String>() {{
                                            put("excepturi", "aspernatur");
                                        }};
                                        eventSources = new org.openapis.openapi.models.shared.LambdaEventSource[]{{
                                            add(new LambdaEventSource("sed", LambdaEventSourceTypeEnum.IOT_CORE) {{
                                                topic = "ad";
                                                type = LambdaEventSourceTypeEnum.IOT_CORE;
                                            }}),
                                        }};
                                        execArgs = new String[]{{
                                            add("natus"),
                                        }};
                                        inputPayloadEncodingType = LambdaInputPayloadEncodingTypeEnum.JSON;
                                        linuxProcessParams = new LambdaLinuxProcessParams() {{
                                            containerParams = new LambdaContainerParams() {{
                                                devices = new org.openapis.openapi.models.shared.LambdaDeviceMount[]{{
                                                    add(new LambdaDeviceMount("in") {{
                                                        addGroupOwner = false;
                                                        path = "saepe";
                                                        permission = LambdaFilesystemPermissionEnum.RW;
                                                    }}),
                                                    add(new LambdaDeviceMount("iure") {{
                                                        addGroupOwner = false;
                                                        path = "corporis";
                                                        permission = LambdaFilesystemPermissionEnum.RW;
                                                    }}),
                                                    add(new LambdaDeviceMount("architecto") {{
                                                        addGroupOwner = false;
                                                        path = "saepe";
                                                        permission = LambdaFilesystemPermissionEnum.RW;
                                                    }}),
                                                    add(new LambdaDeviceMount("est") {{
                                                        addGroupOwner = false;
                                                        path = "ipsa";
                                                        permission = LambdaFilesystemPermissionEnum.RW;
                                                    }}),
                                                }};
                                                memorySizeInKB = 653140L;
                                                mountROSysfs = false;
                                                volumes = new org.openapis.openapi.models.shared.LambdaVolumeMount[]{{
                                                    add(new LambdaVolumeMount("explicabo", "nobis") {{
                                                        addGroupOwner = false;
                                                        destinationPath = "dolores";
                                                        permission = LambdaFilesystemPermissionEnum.RO;
                                                        sourcePath = "corporis";
                                                    }}),
                                                    add(new LambdaVolumeMount("minima", "excepturi") {{
                                                        addGroupOwner = false;
                                                        destinationPath = "enim";
                                                        permission = LambdaFilesystemPermissionEnum.RW;
                                                        sourcePath = "nemo";
                                                    }}),
                                                    add(new LambdaVolumeMount("doloribus", "sapiente") {{
                                                        addGroupOwner = false;
                                                        destinationPath = "accusantium";
                                                        permission = LambdaFilesystemPermissionEnum.RO;
                                                        sourcePath = "culpa";
                                                    }}),
                                                }};
                                            }};;
                                            isolationMode = LambdaIsolationModeEnum.GREENGRASS_CONTAINER;
                                        }};;
                                        maxIdleTimeInSeconds = 652790L;
                                        maxInstancesCount = 208876L;
                                        maxQueueSize = 635059L;
                                        pinned = false;
                                        statusTimeoutInSeconds = 161309L;
                                        timeoutInSeconds = 995300L;
                                    }};;
                                    componentName = "mollitia";
                                    componentPlatforms = new org.openapis.openapi.models.shared.ComponentPlatform[]{{
                                        add(new ComponentPlatform() {{
                                            attributes = new java.util.HashMap<String, String>() {{
                                                put("commodi", "quam");
                                                put("molestiae", "velit");
                                            }};
                                            name = "Miss Eugene Hauck";
                                        }}),
                                        add(new ComponentPlatform() {{
                                            attributes = new java.util.HashMap<String, String>() {{
                                                put("odit", "quo");
                                                put("sequi", "tenetur");
                                            }};
                                            name = "Mr. Alberta Schuster";
                                        }}),
                                        add(new ComponentPlatform() {{
                                            attributes = new java.util.HashMap<String, String>() {{
                                                put("laborum", "quasi");
                                                put("reiciendis", "voluptatibus");
                                                put("vero", "nihil");
                                                put("praesentium", "voluptatibus");
                                            }};
                                            name = "Geneva Klein Jr.";
                                        }}),
                                    }};
                                    componentVersion = "reprehenderit";
                                    lambdaArn = "ut";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dicta", "corporis");
                                    put("dolore", "iusto");
                                    put("dicta", "harum");
                                    put("enim", "accusamus");
                                }};
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateComponentVersionResponse res = sdk.sdk.createComponentVersion(req);

            if (res.createComponentVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

<p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBodyDeploymentPolicies;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBodyIotJobConfiguration;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.shared.ComponentConfigurationUpdate;
import org.openapis.openapi.models.shared.ComponentDeploymentSpecification;
import org.openapis.openapi.models.shared.ComponentRunWith;
import org.openapis.openapi.models.shared.DeploymentComponentUpdatePolicy;
import org.openapis.openapi.models.shared.DeploymentComponentUpdatePolicyActionEnum;
import org.openapis.openapi.models.shared.DeploymentConfigurationValidationPolicy;
import org.openapis.openapi.models.shared.DeploymentFailureHandlingPolicyEnum;
import org.openapis.openapi.models.shared.IoTJobAbortActionEnum;
import org.openapis.openapi.models.shared.IoTJobAbortConfig;
import org.openapis.openapi.models.shared.IoTJobAbortCriteria;
import org.openapis.openapi.models.shared.IoTJobExecutionFailureTypeEnum;
import org.openapis.openapi.models.shared.IoTJobExecutionsRolloutConfig;
import org.openapis.openapi.models.shared.IoTJobExponentialRolloutRate;
import org.openapis.openapi.models.shared.IoTJobRateIncreaseCriteria;
import org.openapis.openapi.models.shared.IoTJobTimeoutConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SystemResourceLimits;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentRequestBody("modi") {{
                                clientToken = "praesentium";
                                components = new java.util.HashMap<String, org.openapis.openapi.models.shared.ComponentDeploymentSpecification>() {{
                                    put("voluptates", new ComponentDeploymentSpecification() {{
                                        componentVersion = "quasi";
                                        configurationUpdate = new ComponentConfigurationUpdate() {{
                                            merge = "repudiandae";
                                            reset = new String[]{{
                                                add("veritatis"),
                                                add("itaque"),
                                                add("incidunt"),
                                            }};
                                        }};
                                        runWith = new ComponentRunWith() {{
                                            posixUser = "enim";
                                            systemResourceLimits = new SystemResourceLimits() {{
                                                cpus = 93.56;
                                                memory = 667411L;
                                            }};
                                            windowsUser = "quibusdam";
                                        }};
                                    }});
                                    put("explicabo", new ComponentDeploymentSpecification() {{
                                        componentVersion = "deserunt";
                                        configurationUpdate = new ComponentConfigurationUpdate() {{
                                            merge = "distinctio";
                                            reset = new String[]{{
                                                add("labore"),
                                                add("modi"),
                                                add("qui"),
                                                add("aliquid"),
                                            }};
                                        }};
                                        runWith = new ComponentRunWith() {{
                                            posixUser = "cupiditate";
                                            systemResourceLimits = new SystemResourceLimits() {{
                                                cpus = 5528.22;
                                                memory = 20107L;
                                            }};
                                            windowsUser = "magni";
                                        }};
                                    }});
                                    put("assumenda", new ComponentDeploymentSpecification() {{
                                        componentVersion = "ipsam";
                                        configurationUpdate = new ComponentConfigurationUpdate() {{
                                            merge = "alias";
                                            reset = new String[]{{
                                                add("dolorum"),
                                            }};
                                        }};
                                        runWith = new ComponentRunWith() {{
                                            posixUser = "excepturi";
                                            systemResourceLimits = new SystemResourceLimits() {{
                                                cpus = 2700.08;
                                                memory = 703737L;
                                            }};
                                            windowsUser = "tempore";
                                        }};
                                    }});
                                }};
                                deploymentName = "labore";
                                deploymentPolicies = new CreateDeploymentRequestBodyDeploymentPolicies() {{
                                    componentUpdatePolicy = new DeploymentComponentUpdatePolicy() {{
                                        action = DeploymentComponentUpdatePolicyActionEnum.SKIP_NOTIFY_COMPONENTS;
                                        timeoutInSeconds = 433288L;
                                    }};;
                                    configurationValidationPolicy = new DeploymentConfigurationValidationPolicy() {{
                                        timeoutInSeconds = 248753L;
                                    }};;
                                    failureHandlingPolicy = DeploymentFailureHandlingPolicyEnum.DO_NOTHING;
                                }};;
                                iotJobConfiguration = new CreateDeploymentRequestBodyIotJobConfiguration() {{
                                    abortConfig = new IoTJobAbortConfig(                new org.openapis.openapi.models.shared.IoTJobAbortCriteria[]{{
                                                        add(new IoTJobAbortCriteria(IoTJobAbortActionEnum.CANCEL, IoTJobExecutionFailureTypeEnum.TIMED_OUT, 638921L, 2230.81) {{
                                                            action = IoTJobAbortActionEnum.CANCEL;
                                                            failureType = IoTJobExecutionFailureTypeEnum.REJECTED;
                                                            minNumberOfExecutedThings = 592042L;
                                                            thresholdPercentage = 8960.39;
                                                        }}),
                                                        add(new IoTJobAbortCriteria(IoTJobAbortActionEnum.CANCEL, IoTJobExecutionFailureTypeEnum.REJECTED, 449198L, 8464.09) {{
                                                            action = IoTJobAbortActionEnum.CANCEL;
                                                            failureType = IoTJobExecutionFailureTypeEnum.ALL;
                                                            minNumberOfExecutedThings = 952749L;
                                                            thresholdPercentage = 6800.56;
                                                        }}),
                                                        add(new IoTJobAbortCriteria(IoTJobAbortActionEnum.CANCEL, IoTJobExecutionFailureTypeEnum.REJECTED, 767024L, 8137.98) {{
                                                            action = IoTJobAbortActionEnum.CANCEL;
                                                            failureType = IoTJobExecutionFailureTypeEnum.ALL;
                                                            minNumberOfExecutedThings = 699479L;
                                                            thresholdPercentage = 1162.02;
                                                        }}),
                                                    }});;
                                    jobExecutionsRolloutConfig = new IoTJobExecutionsRolloutConfig() {{
                                        exponentialRate = new IoTJobExponentialRolloutRate(411820L, 3965.06,                 new IoTJobRateIncreaseCriteria() {{
                                                            numberOfNotifiedThings = 675439L;
                                                            numberOfSucceededThings = 881104L;
                                                        }};);;
                                        maximumPerMinute = 249796L;
                                    }};;
                                    timeoutConfig = new IoTJobTimeoutConfig() {{
                                        inProgressTimeoutInMinutes = 581273L;
                                    }};;
                                }};;
                                parentTargetArn = "enim";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                    put("id", "blanditiis");
                                    put("deleniti", "sapiente");
                                }};
                            }};) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComponent

<p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteComponentRequest;
import org.openapis.openapi.models.operations.DeleteComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteComponentRequest req = new DeleteComponentRequest("nihil") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "id";
                xAmzDate = "labore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteComponentResponse res = sdk.sdk.deleteComponent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCoreDevice

Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCoreDeviceRequest;
import org.openapis.openapi.models.operations.DeleteCoreDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCoreDeviceRequest req = new DeleteCoreDeviceRequest("eum") {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            DeleteCoreDeviceResponse res = sdk.sdk.deleteCoreDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeployment

<p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeploymentRequest;
import org.openapis.openapi.models.operations.DeleteDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeploymentRequest req = new DeleteDeploymentRequest("quos") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            DeleteDeploymentResponse res = sdk.sdk.deleteDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeComponent

Retrieves metadata for a version of a component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeComponentRequest;
import org.openapis.openapi.models.operations.DescribeComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeComponentRequest req = new DescribeComponentRequest("necessitatibus") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            DescribeComponentResponse res = sdk.sdk.describeComponent(req);

            if (res.describeComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateServiceRoleFromAccount

Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateServiceRoleFromAccountRequest;
import org.openapis.openapi.models.operations.DisassociateServiceRoleFromAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateServiceRoleFromAccountRequest req = new DisassociateServiceRoleFromAccountRequest() {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            DisassociateServiceRoleFromAccountResponse res = sdk.sdk.disassociateServiceRoleFromAccount(req);

            if (res.disassociateServiceRoleFromAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponent

Gets the recipe for a version of a component.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentRecipeOutputFormatEnum;
import org.openapis.openapi.models.operations.GetComponentRequest;
import org.openapis.openapi.models.operations.GetComponentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentRequest req = new GetComponentRequest("nihil") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
                recipeOutputFormat = GetComponentRecipeOutputFormatEnum.YAML;
            }};            

            GetComponentResponse res = sdk.sdk.getComponent(req);

            if (res.getComponentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComponentVersionArtifact

Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComponentVersionArtifactRequest;
import org.openapis.openapi.models.operations.GetComponentVersionArtifactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComponentVersionArtifactRequest req = new GetComponentVersionArtifactRequest("magni", "sunt") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
            }};            

            GetComponentVersionArtifactResponse res = sdk.sdk.getComponentVersionArtifact(req);

            if (res.getComponentVersionArtifactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectivityInfo

<p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectivityInfoRequest;
import org.openapis.openapi.models.operations.GetConnectivityInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectivityInfoRequest req = new GetConnectivityInfoRequest("accusantium") {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GetConnectivityInfoResponse res = sdk.sdk.getConnectivityInfo(req);

            if (res.getConnectivityInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoreDevice

<p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoreDeviceRequest;
import org.openapis.openapi.models.operations.GetCoreDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoreDeviceRequest req = new GetCoreDeviceRequest("pariatur") {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            GetCoreDeviceResponse res = sdk.sdk.getCoreDevice(req);

            if (res.getCoreDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeployment

Gets a deployment. Deployments define the components that run on Greengrass core devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentRequest;
import org.openapis.openapi.models.operations.GetDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentRequest req = new GetDeploymentRequest("hic") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "dolores";
                xAmzDate = "quis";
                xAmzSecurityToken = "totam";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "eaque";
            }};            

            GetDeploymentResponse res = sdk.sdk.getDeployment(req);

            if (res.getDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceRoleForAccount

Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRoleForAccountRequest;
import org.openapis.openapi.models.operations.GetServiceRoleForAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceRoleForAccountRequest req = new GetServiceRoleForAccountRequest() {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "eos";
                xAmzCredential = "perferendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "minus";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "dolor";
            }};            

            GetServiceRoleForAccountResponse res = sdk.sdk.getServiceRoleForAccount(req);

            if (res.getServiceRoleForAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClientDevicesAssociatedWithCoreDevice

Retrieves a paginated list of client devices that are associated with a core device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClientDevicesAssociatedWithCoreDeviceRequest;
import org.openapis.openapi.models.operations.ListClientDevicesAssociatedWithCoreDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClientDevicesAssociatedWithCoreDeviceRequest req = new ListClientDevicesAssociatedWithCoreDeviceRequest("nostrum") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
                maxResults = 164694L;
                nextToken = "blanditiis";
            }};            

            ListClientDevicesAssociatedWithCoreDeviceResponse res = sdk.sdk.listClientDevicesAssociatedWithCoreDevice(req);

            if (res.listClientDevicesAssociatedWithCoreDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponentVersions

Retrieves a paginated list of all versions for a component. Greater versions are listed first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentVersionsRequest;
import org.openapis.openapi.models.operations.ListComponentVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentVersionsRequest req = new ListComponentVersionsRequest("eaque") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
                maxResults = 679091L;
                nextToken = "deleniti";
            }};            

            ListComponentVersionsResponse res = sdk.sdk.listComponentVersions(req);

            if (res.listComponentVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComponents

Retrieves a paginated list of component summaries. This list includes components that you have permission to view.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComponentsRequest;
import org.openapis.openapi.models.operations.ListComponentsResponse;
import org.openapis.openapi.models.operations.ListComponentsScopeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComponentsRequest req = new ListComponentsRequest() {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "libero";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "aliquid";
                maxResults = 212390L;
                nextToken = "dolorem";
                scope = ListComponentsScopeEnum.PRIVATE_;
            }};            

            ListComponentsResponse res = sdk.sdk.listComponents(req);

            if (res.listComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCoreDevices

<p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCoreDevicesRequest;
import org.openapis.openapi.models.operations.ListCoreDevicesResponse;
import org.openapis.openapi.models.operations.ListCoreDevicesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCoreDevicesRequest req = new ListCoreDevicesRequest() {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
                maxResults = 227414L;
                nextToken = "dolorum";
                status = ListCoreDevicesStatusEnum.HEALTHY;
                thingGroupArn = "veritatis";
            }};            

            ListCoreDevicesResponse res = sdk.sdk.listCoreDevices(req);

            if (res.listCoreDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployments

Retrieves a paginated list of deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentsHistoryFilterEnum;
import org.openapis.openapi.models.operations.ListDeploymentsRequest;
import org.openapis.openapi.models.operations.ListDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentsRequest req = new ListDeploymentsRequest() {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "iure";
                xAmzCredential = "odio";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "voluptatibus";
                historyFilter = ListDeploymentsHistoryFilterEnum.ALL;
                maxResults = 617658L;
                nextToken = "eos";
                parentTargetArn = "atque";
                targetArn = "sit";
            }};            

            ListDeploymentsResponse res = sdk.sdk.listDeployments(req);

            if (res.listDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEffectiveDeployments

Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEffectiveDeploymentsRequest;
import org.openapis.openapi.models.operations.ListEffectiveDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEffectiveDeploymentsRequest req = new ListEffectiveDeploymentsRequest("ab") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
                maxResults = 896672L;
                nextToken = "distinctio";
            }};            

            ListEffectiveDeploymentsResponse res = sdk.sdk.listEffectiveDeployments(req);

            if (res.listEffectiveDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInstalledComponents

<p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInstalledComponentsRequest;
import org.openapis.openapi.models.operations.ListInstalledComponentsResponse;
import org.openapis.openapi.models.operations.ListInstalledComponentsTopologyFilterEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInstalledComponentsRequest req = new ListInstalledComponentsRequest("nihil") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
                maxResults = 229219L;
                nextToken = "optio";
                topologyFilter = ListInstalledComponentsTopologyFilterEnum.ROOT;
            }};            

            ListInstalledComponentsResponse res = sdk.sdk.listInstalledComponents(req);

            if (res.listInstalledComponentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves the list of tags for an IoT Greengrass resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("saepe") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resolveComponentCandidates

<p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResolveComponentCandidatesRequest;
import org.openapis.openapi.models.operations.ResolveComponentCandidatesRequestBody;
import org.openapis.openapi.models.operations.ResolveComponentCandidatesRequestBodyPlatform;
import org.openapis.openapi.models.operations.ResolveComponentCandidatesResponse;
import org.openapis.openapi.models.shared.ComponentCandidate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResolveComponentCandidatesRequest req = new ResolveComponentCandidatesRequest(                new ResolveComponentCandidatesRequestBody() {{
                                componentCandidates = new org.openapis.openapi.models.shared.ComponentCandidate[]{{
                                    add(new ComponentCandidate() {{
                                        componentName = "quaerat";
                                        componentVersion = "tempora";
                                        versionRequirements = new java.util.HashMap<String, String>() {{
                                            put("quod", "officiis");
                                            put("qui", "dolorum");
                                        }};
                                    }}),
                                    add(new ComponentCandidate() {{
                                        componentName = "a";
                                        componentVersion = "esse";
                                        versionRequirements = new java.util.HashMap<String, String>() {{
                                            put("iusto", "ipsum");
                                            put("quisquam", "tenetur");
                                            put("amet", "tempore");
                                        }};
                                    }}),
                                    add(new ComponentCandidate() {{
                                        componentName = "accusamus";
                                        componentVersion = "numquam";
                                        versionRequirements = new java.util.HashMap<String, String>() {{
                                            put("dolorem", "sapiente");
                                            put("totam", "nihil");
                                        }};
                                    }}),
                                    add(new ComponentCandidate() {{
                                        componentName = "sit";
                                        componentVersion = "expedita";
                                        versionRequirements = new java.util.HashMap<String, String>() {{
                                            put("sed", "vel");
                                        }};
                                    }}),
                                }};
                                platform = new ResolveComponentCandidatesRequestBodyPlatform() {{
                                    attributes = new java.util.HashMap<String, String>() {{
                                        put("voluptas", "deserunt");
                                        put("quam", "ipsum");
                                        put("incidunt", "qui");
                                    }};
                                    name = "Simon Stracke MD";
                                }};;
                            }};) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "aspernatur";
                xAmzDate = "dolores";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquid";
            }};            

            ResolveComponentCandidatesResponse res = sdk.sdk.resolveComponentCandidates(req);

            if (res.resolveComponentCandidatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("temporibus", "qui");
                                                put("neque", "fugit");
                                                put("magni", "odio");
                                            }});, "sunt") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag from an IoT Greengrass resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("saepe",                 new String[]{{
                                add("veritatis"),
                            }}) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectivityInfo

<p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectivityInfoRequest;
import org.openapis.openapi.models.operations.UpdateConnectivityInfoRequestBody;
import org.openapis.openapi.models.operations.UpdateConnectivityInfoResponse;
import org.openapis.openapi.models.shared.ConnectivityInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectivityInfoRequest req = new UpdateConnectivityInfoRequest(                new UpdateConnectivityInfoRequestBody(                new org.openapis.openapi.models.shared.ConnectivityInfo[]{{
                                                add(new ConnectivityInfo() {{
                                                    hostAddress = "adipisci";
                                                    id = "a1108e0a-dcf4-4b92-9879-fce953f73ef7";
                                                    metadata = "hic";
                                                    portNumber = 715561L;
                                                }}),
                                                add(new ConnectivityInfo() {{
                                                    hostAddress = "quod";
                                                    id = "7abd74dd-39c0-4f5d-acff-7c70a45626d4";
                                                    metadata = "ratione";
                                                    portNumber = 401132L;
                                                }}),
                                            }});, "laudantium") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            UpdateConnectivityInfoResponse res = sdk.sdk.updateConnectivityInfo(req);

            if (res.updateConnectivityInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
