# SDK

## Overview

<p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities to edge devices. This enables devices to collect and analyze data closer to the source of information, react autonomously to local events, and communicate securely with each other on local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and deploy applications to fleets of edge devices for local operation.</p> <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console. Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components, manage deployments, and core devices.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/greengrass/>
### Available Operations

* [AssociateServiceRoleToAccount](#associateserviceroletoaccount) - Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [BatchAssociateClientDeviceWithCoreDevice](#batchassociateclientdevicewithcoredevice) - <p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>
* [BatchDisassociateClientDeviceFromCoreDevice](#batchdisassociateclientdevicefromcoredevice) - Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.
* [CancelDeployment](#canceldeployment) - Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.
* [CreateComponentVersion](#createcomponentversion) - <p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>
* [CreateDeployment](#createdeployment) - <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
* [DeleteComponent](#deletecomponent) - <p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>
* [DeleteCoreDevice](#deletecoredevice) - Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.
* [DeleteDeployment](#deletedeployment) - <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>
* [DescribeComponent](#describecomponent) - Retrieves metadata for a version of a component.
* [DisassociateServiceRoleFromAccount](#disassociateservicerolefromaccount) - Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [GetComponent](#getcomponent) - Gets the recipe for a version of a component.
* [GetComponentVersionArtifact](#getcomponentversionartifact) - Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.
* [GetConnectivityInfo](#getconnectivityinfo) - <p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
* [GetCoreDevice](#getcoredevice) - <p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [GetDeployment](#getdeployment) - Gets a deployment. Deployments define the components that run on Greengrass core devices.
* [GetServiceRoleForAccount](#getserviceroleforaccount) - Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* [ListClientDevicesAssociatedWithCoreDevice](#listclientdevicesassociatedwithcoredevice) - Retrieves a paginated list of client devices that are associated with a core device.
* [ListComponentVersions](#listcomponentversions) - Retrieves a paginated list of all versions for a component. Greater versions are listed first.
* [ListComponents](#listcomponents) - Retrieves a paginated list of component summaries. This list includes components that you have permission to view.
* [ListCoreDevices](#listcoredevices) - <p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [ListDeployments](#listdeployments) - Retrieves a paginated list of deployments.
* [ListEffectiveDeployments](#listeffectivedeployments) - Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
* [ListInstalledComponents](#listinstalledcomponents) - <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* [ListTagsForResource](#listtagsforresource) - Retrieves the list of tags for an IoT Greengrass resource.
* [ResolveComponentCandidates](#resolvecomponentcandidates) - <p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>
* [TagResource](#tagresource) - Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.
* [UntagResource](#untagresource) - Removes a tag from an IoT Greengrass resource.
* [UpdateConnectivityInfo](#updateconnectivityinfo) - <p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

## AssociateServiceRoleToAccount

Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateServiceRoleToAccount(ctx, operations.AssociateServiceRoleToAccountRequest{
        RequestBody: operations.AssociateServiceRoleToAccountRequestBody{
            RoleArn: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceRoleToAccountResponse != nil {
        // handle response
    }
}
```

## BatchAssociateClientDeviceWithCoreDevice

<p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchAssociateClientDeviceWithCoreDevice(ctx, operations.BatchAssociateClientDeviceWithCoreDeviceRequest{
        RequestBody: operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody{
            Entries: []shared.AssociateClientDeviceWithCoreDeviceEntry{
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "tempora",
                },
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "suscipit",
                },
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "molestiae",
                },
                shared.AssociateClientDeviceWithCoreDeviceEntry{
                    ThingName: "minus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        CoreDeviceThingName: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateClientDeviceWithCoreDeviceResponse != nil {
        // handle response
    }
}
```

## BatchDisassociateClientDeviceFromCoreDevice

Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDisassociateClientDeviceFromCoreDevice(ctx, operations.BatchDisassociateClientDeviceFromCoreDeviceRequest{
        RequestBody: operations.BatchDisassociateClientDeviceFromCoreDeviceRequestBody{
            Entries: []shared.DisassociateClientDeviceFromCoreDeviceEntry{
                shared.DisassociateClientDeviceFromCoreDeviceEntry{
                    ThingName: "veritatis",
                },
                shared.DisassociateClientDeviceFromCoreDeviceEntry{
                    ThingName: "deserunt",
                },
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        CoreDeviceThingName: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateClientDeviceFromCoreDeviceResponse != nil {
        // handle response
    }
}
```

## CancelDeployment

Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelDeployment(ctx, operations.CancelDeploymentRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        DeploymentID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelDeploymentResponse != nil {
        // handle response
    }
}
```

## CreateComponentVersion

<p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateComponentVersion(ctx, operations.CreateComponentVersionRequest{
        RequestBody: operations.CreateComponentVersionRequestBody{
            ClientToken: sdk.String("dicta"),
            InlineRecipe: sdk.String("nam"),
            LambdaFunction: &operations.CreateComponentVersionRequestBodyLambdaFunction{
                ComponentDependencies: map[string]shared.ComponentDependencyRequirement{
                    "occaecati": shared.ComponentDependencyRequirement{
                        DependencyType: shared.ComponentDependencyTypeEnumHard.ToPointer(),
                        VersionRequirement: sdk.String("deleniti"),
                    },
                    "hic": shared.ComponentDependencyRequirement{
                        DependencyType: shared.ComponentDependencyTypeEnumSoft.ToPointer(),
                        VersionRequirement: sdk.String("totam"),
                    },
                    "beatae": shared.ComponentDependencyRequirement{
                        DependencyType: shared.ComponentDependencyTypeEnumHard.ToPointer(),
                        VersionRequirement: sdk.String("molestiae"),
                    },
                },
                ComponentLambdaParameters: &shared.LambdaExecutionParameters{
                    EnvironmentVariables: map[string]string{
                        "qui": "impedit",
                        "cum": "esse",
                    },
                    EventSources: []shared.LambdaEventSource{
                        shared.LambdaEventSource{
                            Topic: "excepturi",
                            Type: shared.LambdaEventSourceTypeEnumPubSub,
                        },
                    },
                    ExecArgs: []string{
                        "ad",
                    },
                    InputPayloadEncodingType: shared.LambdaInputPayloadEncodingTypeEnumBinary.ToPointer(),
                    LinuxProcessParams: &shared.LambdaLinuxProcessParams{
                        ContainerParams: &shared.LambdaContainerParams{
                            Devices: []shared.LambdaDeviceMount{
                                shared.LambdaDeviceMount{
                                    AddGroupOwner: sdk.Bool(false),
                                    Path: "iste",
                                    Permission: shared.LambdaFilesystemPermissionEnumRo.ToPointer(),
                                },
                            },
                            MemorySizeInKB: sdk.Int64(616934),
                            MountROSysfs: sdk.Bool(false),
                            Volumes: []shared.LambdaVolumeMount{
                                shared.LambdaVolumeMount{
                                    AddGroupOwner: sdk.Bool(false),
                                    DestinationPath: "hic",
                                    Permission: shared.LambdaFilesystemPermissionEnumRw.ToPointer(),
                                    SourcePath: "fuga",
                                },
                                shared.LambdaVolumeMount{
                                    AddGroupOwner: sdk.Bool(false),
                                    DestinationPath: "in",
                                    Permission: shared.LambdaFilesystemPermissionEnumRo.ToPointer(),
                                    SourcePath: "iste",
                                },
                            },
                        },
                        IsolationMode: shared.LambdaIsolationModeEnumGreengrassContainer.ToPointer(),
                    },
                    MaxIdleTimeInSeconds: sdk.Int64(902349),
                    MaxInstancesCount: sdk.Int64(697631),
                    MaxQueueSize: sdk.Int64(99280),
                    Pinned: sdk.Bool(false),
                    StatusTimeoutInSeconds: sdk.Int64(60225),
                    TimeoutInSeconds: sdk.Int64(969810),
                },
                ComponentName: sdk.String("est"),
                ComponentPlatforms: []shared.ComponentPlatform{
                    shared.ComponentPlatform{
                        Attributes: map[string]string{
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                            "nobis": "enim",
                        },
                        Name: sdk.String("Corey Hane III"),
                    },
                    shared.ComponentPlatform{
                        Attributes: map[string]string{
                            "doloribus": "sapiente",
                            "architecto": "mollitia",
                            "dolorem": "culpa",
                        },
                        Name: sdk.String("Jaime O'Hara"),
                    },
                    shared.ComponentPlatform{
                        Attributes: map[string]string{
                            "quam": "molestiae",
                            "velit": "error",
                        },
                        Name: sdk.String("Beatrice Brown"),
                    },
                },
                ComponentVersion: sdk.String("enim"),
                LambdaArn: sdk.String("odit"),
            },
            Tags: map[string]string{
                "sequi": "tenetur",
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
            },
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentVersionResponse != nil {
        // handle response
    }
}
```

## CreateDeployment

<p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        RequestBody: operations.CreateDeploymentRequestBody{
            ClientToken: sdk.String("praesentium"),
            Components: map[string]shared.ComponentDeploymentSpecification{
                "ipsa": shared.ComponentDeploymentSpecification{
                    ComponentVersion: sdk.String("omnis"),
                    ConfigurationUpdate: &shared.ComponentConfigurationUpdate{
                        Merge: sdk.String("voluptate"),
                        Reset: []string{
                            "perferendis",
                            "doloremque",
                            "reprehenderit",
                        },
                    },
                    RunWith: &shared.ComponentRunWith{
                        PosixUser: sdk.String("ut"),
                        SystemResourceLimits: &shared.SystemResourceLimits{
                            Cpus: sdk.Float64(9795.87),
                            Memory: sdk.Int64(120196),
                        },
                        WindowsUser: sdk.String("corporis"),
                    },
                },
                "dolore": shared.ComponentDeploymentSpecification{
                    ComponentVersion: sdk.String("iusto"),
                    ConfigurationUpdate: &shared.ComponentConfigurationUpdate{
                        Merge: sdk.String("dicta"),
                        Reset: []string{
                            "enim",
                            "accusamus",
                            "commodi",
                        },
                    },
                    RunWith: &shared.ComponentRunWith{
                        PosixUser: sdk.String("repudiandae"),
                        SystemResourceLimits: &shared.SystemResourceLimits{
                            Cpus: sdk.Float64(641.47),
                            Memory: sdk.Int64(216822),
                        },
                        WindowsUser: sdk.String("quidem"),
                    },
                },
                "molestias": shared.ComponentDeploymentSpecification{
                    ComponentVersion: sdk.String("excepturi"),
                    ConfigurationUpdate: &shared.ComponentConfigurationUpdate{
                        Merge: sdk.String("pariatur"),
                        Reset: []string{
                            "praesentium",
                            "rem",
                        },
                    },
                    RunWith: &shared.ComponentRunWith{
                        PosixUser: sdk.String("voluptates"),
                        SystemResourceLimits: &shared.SystemResourceLimits{
                            Cpus: sdk.Float64(939.4),
                            Memory: sdk.Int64(921158),
                        },
                        WindowsUser: sdk.String("sint"),
                    },
                },
                "veritatis": shared.ComponentDeploymentSpecification{
                    ComponentVersion: sdk.String("itaque"),
                    ConfigurationUpdate: &shared.ComponentConfigurationUpdate{
                        Merge: sdk.String("incidunt"),
                        Reset: []string{
                            "consequatur",
                            "est",
                        },
                    },
                    RunWith: &shared.ComponentRunWith{
                        PosixUser: sdk.String("quibusdam"),
                        SystemResourceLimits: &shared.SystemResourceLimits{
                            Cpus: sdk.Float64(1317.97),
                            Memory: sdk.Int64(647174),
                        },
                        WindowsUser: sdk.String("distinctio"),
                    },
                },
            },
            DeploymentName: sdk.String("quibusdam"),
            DeploymentPolicies: &operations.CreateDeploymentRequestBodyDeploymentPolicies{
                ComponentUpdatePolicy: &shared.DeploymentComponentUpdatePolicy{
                    Action: shared.DeploymentComponentUpdatePolicyActionEnumNotifyComponents.ToPointer(),
                    TimeoutInSeconds: sdk.Int64(264730),
                },
                ConfigurationValidationPolicy: &shared.DeploymentConfigurationValidationPolicy{
                    TimeoutInSeconds: sdk.Int64(183191),
                },
                FailureHandlingPolicy: shared.DeploymentFailureHandlingPolicyEnumRollback.ToPointer(),
            },
            IotJobConfiguration: &operations.CreateDeploymentRequestBodyIotJobConfiguration{
                AbortConfig: &shared.IoTJobAbortConfig{
                    CriteriaList: []shared.IoTJobAbortCriteria{
                        shared.IoTJobAbortCriteria{
                            Action: shared.IoTJobAbortActionEnumCancel,
                            FailureType: shared.IoTJobExecutionFailureTypeEnumTimedOut,
                            MinNumberOfExecutedThings: 20107,
                            ThresholdPercentage: 1649.4,
                        },
                        shared.IoTJobAbortCriteria{
                            Action: shared.IoTJobAbortActionEnumCancel,
                            FailureType: shared.IoTJobExecutionFailureTypeEnumAll,
                            MinNumberOfExecutedThings: 369808,
                            ThresholdPercentage: 46.95,
                        },
                        shared.IoTJobAbortCriteria{
                            Action: shared.IoTJobAbortActionEnumCancel,
                            FailureType: shared.IoTJobExecutionFailureTypeEnumFailed,
                            MinNumberOfExecutedThings: 677817,
                            ThresholdPercentage: 5696.18,
                        },
                    },
                },
                JobExecutionsRolloutConfig: &shared.IoTJobExecutionsRolloutConfig{
                    ExponentialRate: &shared.IoTJobExponentialRolloutRate{
                        BaseRatePerMinute: 270008,
                        IncrementFactor: 7037.37,
                        RateIncreaseCriteria: shared.IoTJobRateIncreaseCriteria{
                            NumberOfNotifiedThings: sdk.Int64(735194),
                            NumberOfSucceededThings: sdk.Int64(288476),
                        },
                    },
                    MaximumPerMinute: sdk.Int64(962189),
                },
                TimeoutConfig: &shared.IoTJobTimeoutConfig{
                    InProgressTimeoutInMinutes: sdk.Int64(433288),
                },
            },
            ParentTargetArn: sdk.String("non"),
            Tags: map[string]string{
                "sint": "aliquid",
                "provident": "necessitatibus",
                "sint": "officia",
                "dolor": "debitis",
            },
            TargetArn: "a",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResponse != nil {
        // handle response
    }
}
```

## DeleteComponent

<p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteComponent(ctx, operations.DeleteComponentRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        Arn: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCoreDevice

Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCoreDevice(ctx, operations.DeleteCoreDeviceRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nam"),
        CoreDeviceThingName: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeployment

<p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDeployment(ctx, operations.DeleteDeploymentRequest{
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
        DeploymentID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeComponent

Retrieves metadata for a version of a component.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeComponent(ctx, operations.DescribeComponentRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        Arn: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeComponentResponse != nil {
        // handle response
    }
}
```

## DisassociateServiceRoleFromAccount

Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateServiceRoleFromAccount(ctx, operations.DisassociateServiceRoleFromAccountRequest{
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateServiceRoleFromAccountResponse != nil {
        // handle response
    }
}
```

## GetComponent

Gets the recipe for a version of a component.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComponent(ctx, operations.GetComponentRequest{
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
        Arn: "sint",
        RecipeOutputFormat: operations.GetComponentRecipeOutputFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentResponse != nil {
        // handle response
    }
}
```

## GetComponentVersionArtifact

Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetComponentVersionArtifact(ctx, operations.GetComponentVersionArtifactRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        Arn: "odit",
        ArtifactName: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentVersionArtifactResponse != nil {
        // handle response
    }
}
```

## GetConnectivityInfo

<p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetConnectivityInfo(ctx, operations.GetConnectivityInfoRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        ThingName: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectivityInfoResponse != nil {
        // handle response
    }
}
```

## GetCoreDevice

<p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCoreDevice(ctx, operations.GetCoreDeviceRequest{
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
        CoreDeviceThingName: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCoreDeviceResponse != nil {
        // handle response
    }
}
```

## GetDeployment

Gets a deployment. Deployments define the components that run on Greengrass core devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDeployment(ctx, operations.GetDeploymentRequest{
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        DeploymentID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentResponse != nil {
        // handle response
    }
}
```

## GetServiceRoleForAccount

Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServiceRoleForAccount(ctx, operations.GetServiceRoleForAccountRequest{
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceRoleForAccountResponse != nil {
        // handle response
    }
}
```

## ListClientDevicesAssociatedWithCoreDevice

Retrieves a paginated list of client devices that are associated with a core device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListClientDevicesAssociatedWithCoreDevice(ctx, operations.ListClientDevicesAssociatedWithCoreDeviceRequest{
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        CoreDeviceThingName: "ipsam",
        MaxResults: sdk.Int64(453543),
        NextToken: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClientDevicesAssociatedWithCoreDeviceResponse != nil {
        // handle response
    }
}
```

## ListComponentVersions

Retrieves a paginated list of all versions for a component. Greater versions are listed first.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListComponentVersions(ctx, operations.ListComponentVersionsRequest{
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        Arn: "amet",
        MaxResults: sdk.Int64(11714),
        NextToken: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentVersionsResponse != nil {
        // handle response
    }
}
```

## ListComponents

Retrieves a paginated list of component summaries. This list includes components that you have permission to view.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListComponents(ctx, operations.ListComponentsRequest{
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("totam"),
        MaxResults: sdk.Int64(489549),
        NextToken: sdk.String("eaque"),
        Scope: operations.ListComponentsScopeEnumPrivate.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentsResponse != nil {
        // handle response
    }
}
```

## ListCoreDevices

<p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCoreDevices(ctx, operations.ListCoreDevicesRequest{
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        MaxResults: sdk.Int64(874573),
        NextToken: sdk.String("nostrum"),
        Status: operations.ListCoreDevicesStatusEnumUnhealthy.ToPointer(),
        ThingGroupArn: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoreDevicesResponse != nil {
        // handle response
    }
}
```

## ListDeployments

Retrieves a paginated list of deployments.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDeployments(ctx, operations.ListDeploymentsRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        HistoryFilter: operations.ListDeploymentsHistoryFilterEnumLatestOnly.ToPointer(),
        MaxResults: sdk.Int64(50370),
        NextToken: sdk.String("occaecati"),
        ParentTargetArn: sdk.String("rerum"),
        TargetArn: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentsResponse != nil {
        // handle response
    }
}
```

## ListEffectiveDeployments

Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEffectiveDeployments(ctx, operations.ListEffectiveDeploymentsRequest{
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        CoreDeviceThingName: "provident",
        MaxResults: sdk.Int64(750844),
        NextToken: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEffectiveDeploymentsResponse != nil {
        // handle response
    }
}
```

## ListInstalledComponents

<p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListInstalledComponents(ctx, operations.ListInstalledComponentsRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
        CoreDeviceThingName: "qui",
        MaxResults: sdk.Int64(218749),
        NextToken: sdk.String("hic"),
        TopologyFilter: operations.ListInstalledComponentsTopologyFilterEnumRoot.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstalledComponentsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves the list of tags for an IoT Greengrass resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        ResourceArn: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ResolveComponentCandidates

<p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResolveComponentCandidates(ctx, operations.ResolveComponentCandidatesRequest{
        RequestBody: operations.ResolveComponentCandidatesRequestBody{
            ComponentCandidates: []shared.ComponentCandidate{
                shared.ComponentCandidate{
                    ComponentName: sdk.String("ipsa"),
                    ComponentVersion: sdk.String("iure"),
                    VersionRequirements: map[string]string{
                        "quaerat": "accusamus",
                        "quidem": "voluptatibus",
                    },
                },
            },
            Platform: &operations.ResolveComponentCandidatesRequestBodyPlatform{
                Attributes: map[string]string{
                    "natus": "eos",
                    "atque": "sit",
                },
                Name: sdk.String("Stephen Roberts"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResolveComponentCandidatesResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "ipsum": "voluptate",
                "id": "saepe",
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        ResourceArn: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from an IoT Greengrass resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        ResourceArn: "alias",
        TagKeys: []string{
            "quaerat",
            "tempora",
            "vel",
            "quod",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConnectivityInfo

<p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConnectivityInfo(ctx, operations.UpdateConnectivityInfoRequest{
        RequestBody: operations.UpdateConnectivityInfoRequestBody{
            ConnectivityInfo: []shared.ConnectivityInfo{
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("qui"),
                    ID: sdk.String("af7a73cf-3be4-453f-870b-326b5a73429c"),
                    Metadata: sdk.String("pariatur"),
                    PortNumber: sdk.Int64(747080),
                },
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("dicta"),
                    ID: sdk.String("a8422bb6-79d2-4322-b15b-f0cbb1e31b8b"),
                    Metadata: sdk.String("cupiditate"),
                    PortNumber: sdk.Int64(45614),
                },
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("delectus"),
                    ID: sdk.String("3443a110-8e0a-4dcf-8b92-1879fce953f7"),
                    Metadata: sdk.String("consectetur"),
                    PortNumber: sdk.Int64(878870),
                },
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("tenetur"),
                    ID: sdk.String("7fbc7abd-74dd-439c-8f5d-2cff7c70a456"),
                    Metadata: sdk.String("aspernatur"),
                    PortNumber: sdk.Int64(428224),
                },
            },
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        ThingName: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectivityInfoResponse != nil {
        // handle response
    }
}
```
