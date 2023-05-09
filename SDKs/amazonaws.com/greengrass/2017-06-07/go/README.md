# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/greengrass/2017-06-07/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateRoleToGroup(ctx, operations.AssociateRoleToGroupRequest{
        GroupID: "corrupti",
        RequestBody: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRoleToGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateRoleToGroup](docs/sdk/README.md#associateroletogroup) - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* [AssociateServiceRoleToAccount](docs/sdk/README.md#associateserviceroletoaccount) - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* [CreateConnectorDefinition](docs/sdk/README.md#createconnectordefinition) - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* [CreateConnectorDefinitionVersion](docs/sdk/README.md#createconnectordefinitionversion) - Creates a version of a connector definition which has already been defined.
* [CreateCoreDefinition](docs/sdk/README.md#createcoredefinition) - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* [CreateCoreDefinitionVersion](docs/sdk/README.md#createcoredefinitionversion) - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* [CreateDeployment](docs/sdk/README.md#createdeployment) - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* [CreateDeviceDefinition](docs/sdk/README.md#createdevicedefinition) - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* [CreateDeviceDefinitionVersion](docs/sdk/README.md#createdevicedefinitionversion) - Creates a version of a device definition that has already been defined.
* [CreateFunctionDefinition](docs/sdk/README.md#createfunctiondefinition) - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* [CreateFunctionDefinitionVersion](docs/sdk/README.md#createfunctiondefinitionversion) - Creates a version of a Lambda function definition that has already been defined.
* [CreateGroup](docs/sdk/README.md#creategroup) - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* [CreateGroupCertificateAuthority](docs/sdk/README.md#creategroupcertificateauthority) - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* [CreateGroupVersion](docs/sdk/README.md#creategroupversion) - Creates a version of a group which has already been defined.
* [CreateLoggerDefinition](docs/sdk/README.md#createloggerdefinition) - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* [CreateLoggerDefinitionVersion](docs/sdk/README.md#createloggerdefinitionversion) - Creates a version of a logger definition that has already been defined.
* [CreateResourceDefinition](docs/sdk/README.md#createresourcedefinition) - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* [CreateResourceDefinitionVersion](docs/sdk/README.md#createresourcedefinitionversion) - Creates a version of a resource definition that has already been defined.
* [CreateSoftwareUpdateJob](docs/sdk/README.md#createsoftwareupdatejob) - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* [CreateSubscriptionDefinition](docs/sdk/README.md#createsubscriptiondefinition) - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* [CreateSubscriptionDefinitionVersion](docs/sdk/README.md#createsubscriptiondefinitionversion) - Creates a version of a subscription definition which has already been defined.
* [DeleteConnectorDefinition](docs/sdk/README.md#deleteconnectordefinition) - Deletes a connector definition.
* [DeleteCoreDefinition](docs/sdk/README.md#deletecoredefinition) - Deletes a core definition.
* [DeleteDeviceDefinition](docs/sdk/README.md#deletedevicedefinition) - Deletes a device definition.
* [DeleteFunctionDefinition](docs/sdk/README.md#deletefunctiondefinition) - Deletes a Lambda function definition.
* [DeleteGroup](docs/sdk/README.md#deletegroup) - Deletes a group.
* [DeleteLoggerDefinition](docs/sdk/README.md#deleteloggerdefinition) - Deletes a logger definition.
* [DeleteResourceDefinition](docs/sdk/README.md#deleteresourcedefinition) - Deletes a resource definition.
* [DeleteSubscriptionDefinition](docs/sdk/README.md#deletesubscriptiondefinition) - Deletes a subscription definition.
* [DisassociateRoleFromGroup](docs/sdk/README.md#disassociaterolefromgroup) - Disassociates the role from a group.
* [DisassociateServiceRoleFromAccount](docs/sdk/README.md#disassociateservicerolefromaccount) - Disassociates the service role from your account. Without a service role, deployments will not work.
* [GetAssociatedRole](docs/sdk/README.md#getassociatedrole) - Retrieves the role associated with a particular group.
* [GetBulkDeploymentStatus](docs/sdk/README.md#getbulkdeploymentstatus) - Returns the status of a bulk deployment.
* [GetConnectivityInfo](docs/sdk/README.md#getconnectivityinfo) - Retrieves the connectivity information for a core.
* [GetConnectorDefinition](docs/sdk/README.md#getconnectordefinition) - Retrieves information about a connector definition.
* [GetConnectorDefinitionVersion](docs/sdk/README.md#getconnectordefinitionversion) - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* [GetCoreDefinition](docs/sdk/README.md#getcoredefinition) - Retrieves information about a core definition version.
* [GetCoreDefinitionVersion](docs/sdk/README.md#getcoredefinitionversion) - Retrieves information about a core definition version.
* [GetDeploymentStatus](docs/sdk/README.md#getdeploymentstatus) - Returns the status of a deployment.
* [GetDeviceDefinition](docs/sdk/README.md#getdevicedefinition) - Retrieves information about a device definition.
* [GetDeviceDefinitionVersion](docs/sdk/README.md#getdevicedefinitionversion) - Retrieves information about a device definition version.
* [GetFunctionDefinition](docs/sdk/README.md#getfunctiondefinition) - Retrieves information about a Lambda function definition, including its creation time and latest version.
* [GetFunctionDefinitionVersion](docs/sdk/README.md#getfunctiondefinitionversion) - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* [GetGroup](docs/sdk/README.md#getgroup) - Retrieves information about a group.
* [GetGroupCertificateAuthority](docs/sdk/README.md#getgroupcertificateauthority) - Retreives the CA associated with a group. Returns the public key of the CA.
* [GetGroupCertificateConfiguration](docs/sdk/README.md#getgroupcertificateconfiguration) - Retrieves the current configuration for the CA used by the group.
* [GetGroupVersion](docs/sdk/README.md#getgroupversion) - Retrieves information about a group version.
* [GetLoggerDefinition](docs/sdk/README.md#getloggerdefinition) - Retrieves information about a logger definition.
* [GetLoggerDefinitionVersion](docs/sdk/README.md#getloggerdefinitionversion) - Retrieves information about a logger definition version.
* [GetResourceDefinition](docs/sdk/README.md#getresourcedefinition) - Retrieves information about a resource definition, including its creation time and latest version.
* [GetResourceDefinitionVersion](docs/sdk/README.md#getresourcedefinitionversion) - Retrieves information about a resource definition version, including which resources are included in the version.
* [GetServiceRoleForAccount](docs/sdk/README.md#getserviceroleforaccount) - Retrieves the service role that is attached to your account.
* [GetSubscriptionDefinition](docs/sdk/README.md#getsubscriptiondefinition) - Retrieves information about a subscription definition.
* [GetSubscriptionDefinitionVersion](docs/sdk/README.md#getsubscriptiondefinitionversion) - Retrieves information about a subscription definition version.
* [GetThingRuntimeConfiguration](docs/sdk/README.md#getthingruntimeconfiguration) - Get the runtime configuration of a thing.
* [ListBulkDeploymentDetailedReports](docs/sdk/README.md#listbulkdeploymentdetailedreports) - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* [ListBulkDeployments](docs/sdk/README.md#listbulkdeployments) - Returns a list of bulk deployments.
* [ListConnectorDefinitionVersions](docs/sdk/README.md#listconnectordefinitionversions) - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* [ListConnectorDefinitions](docs/sdk/README.md#listconnectordefinitions) - Retrieves a list of connector definitions.
* [ListCoreDefinitionVersions](docs/sdk/README.md#listcoredefinitionversions) - Lists the versions of a core definition.
* [ListCoreDefinitions](docs/sdk/README.md#listcoredefinitions) - Retrieves a list of core definitions.
* [ListDeployments](docs/sdk/README.md#listdeployments) - Returns a history of deployments for the group.
* [ListDeviceDefinitionVersions](docs/sdk/README.md#listdevicedefinitionversions) - Lists the versions of a device definition.
* [ListDeviceDefinitions](docs/sdk/README.md#listdevicedefinitions) - Retrieves a list of device definitions.
* [ListFunctionDefinitionVersions](docs/sdk/README.md#listfunctiondefinitionversions) - Lists the versions of a Lambda function definition.
* [ListFunctionDefinitions](docs/sdk/README.md#listfunctiondefinitions) - Retrieves a list of Lambda function definitions.
* [ListGroupCertificateAuthorities](docs/sdk/README.md#listgroupcertificateauthorities) - Retrieves the current CAs for a group.
* [ListGroupVersions](docs/sdk/README.md#listgroupversions) - Lists the versions of a group.
* [ListGroups](docs/sdk/README.md#listgroups) - Retrieves a list of groups.
* [ListLoggerDefinitionVersions](docs/sdk/README.md#listloggerdefinitionversions) - Lists the versions of a logger definition.
* [ListLoggerDefinitions](docs/sdk/README.md#listloggerdefinitions) - Retrieves a list of logger definitions.
* [ListResourceDefinitionVersions](docs/sdk/README.md#listresourcedefinitionversions) - Lists the versions of a resource definition.
* [ListResourceDefinitions](docs/sdk/README.md#listresourcedefinitions) - Retrieves a list of resource definitions.
* [ListSubscriptionDefinitionVersions](docs/sdk/README.md#listsubscriptiondefinitionversions) - Lists the versions of a subscription definition.
* [ListSubscriptionDefinitions](docs/sdk/README.md#listsubscriptiondefinitions) - Retrieves a list of subscription definitions.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of resource tags for a resource arn.
* [ResetDeployments](docs/sdk/README.md#resetdeployments) - Resets a group's deployments.
* [StartBulkDeployment](docs/sdk/README.md#startbulkdeployment) - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* [StopBulkDeployment](docs/sdk/README.md#stopbulkdeployment) - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* [UntagResource](docs/sdk/README.md#untagresource) - Remove resource tags from a Greengrass Resource.
* [UpdateConnectivityInfo](docs/sdk/README.md#updateconnectivityinfo) - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* [UpdateConnectorDefinition](docs/sdk/README.md#updateconnectordefinition) - Updates a connector definition.
* [UpdateCoreDefinition](docs/sdk/README.md#updatecoredefinition) - Updates a core definition.
* [UpdateDeviceDefinition](docs/sdk/README.md#updatedevicedefinition) - Updates a device definition.
* [UpdateFunctionDefinition](docs/sdk/README.md#updatefunctiondefinition) - Updates a Lambda function definition.
* [UpdateGroup](docs/sdk/README.md#updategroup) - Updates a group.
* [UpdateGroupCertificateConfiguration](docs/sdk/README.md#updategroupcertificateconfiguration) - Updates the Certificate expiry time for a group.
* [UpdateLoggerDefinition](docs/sdk/README.md#updateloggerdefinition) - Updates a logger definition.
* [UpdateResourceDefinition](docs/sdk/README.md#updateresourcedefinition) - Updates a resource definition.
* [UpdateSubscriptionDefinition](docs/sdk/README.md#updatesubscriptiondefinition) - Updates a subscription definition.
* [UpdateThingRuntimeConfiguration](docs/sdk/README.md#updatethingruntimeconfiguration) - Updates the runtime configuration of a thing.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
