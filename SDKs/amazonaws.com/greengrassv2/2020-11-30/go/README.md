# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/greengrassv2/2020-11-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateServiceRoleToAccountRequest{
        Headers: operations.AssociateServiceRoleToAccountHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateServiceRoleToAccountRequestBody{
            RoleArn: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateServiceRoleToAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceRoleToAccountResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateServiceRoleToAccount` - Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that defines equivalent permissions for the IoT Greengrass features that you use. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* `BatchAssociateClientDeviceWithCoreDevice` - <p>Associates a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>
* `BatchDisassociateClientDeviceFromCoreDevice` - Disassociates a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.
* `CancelDeployment` - Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.
* `CreateComponentVersion` - <p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Python 3.9 – <code>python3.9</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Java 11 – <code>java11</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> <li> <p>Node.js 14 – <code>nodejs14.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> <note> <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p> </note> </li> </ul>
* `CreateDeployment` - <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
* `DeleteComponent` - <p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>
* `DeleteCoreDevice` - Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.
* `DeleteDeployment` - <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p> <p>Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</p>
* `DescribeComponent` - Retrieves metadata for a version of a component.
* `DisassociateServiceRoleFromAccount` - Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* `GetComponent` - Gets the recipe for a version of a component.
* `GetComponentVersionArtifact` - Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.
* `GetConnectivityInfo` - <p>Retrieves connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
* `GetCoreDevice` - <p>Retrieves metadata for a Greengrass core device.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* `GetDeployment` - Gets a deployment. Deployments define the components that run on Greengrass core devices.
* `GetServiceRoleForAccount` - Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass uses this role to verify the identity of client devices and manage core device connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.
* `ListClientDevicesAssociatedWithCoreDevice` - Retrieves a paginated list of client devices that are associated with a core device.
* `ListComponentVersions` - Retrieves a paginated list of all versions for a component. Greater versions are listed first.
* `ListComponents` - Retrieves a paginated list of component summaries. This list includes components that you have permission to view.
* `ListCoreDevices` - <p>Retrieves a paginated list of Greengrass core devices.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* `ListDeployments` - Retrieves a paginated list of deployments.
* `ListEffectiveDeployments` - Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
* `ListInstalledComponents` - <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the <code>topologyFilter</code> parameter to <code>ALL</code>.</p> <note> <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.</p> <p>Core devices send status updates at the following times:</p> <ul> <li> <p>When the IoT Greengrass Core software starts</p> </li> <li> <p>When the core device receives a deployment from the Amazon Web Services Cloud</p> </li> <li> <p>When the status of any component on the core device becomes <code>BROKEN</code> </p> </li> <li> <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p> </li> <li> <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment</p> </li> </ul> </note>
* `ListTagsForResource` - Retrieves the list of tags for an IoT Greengrass resource.
* `ResolveComponentCandidates` - <p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>
* `TagResource` - Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.
* `UntagResource` - Removes a tag from an IoT Greengrass resource.
* `UpdateConnectivityInfo` - <p>Updates connectivity information for a Greengrass core device.</p> <p>Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
