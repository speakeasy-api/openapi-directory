# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequest;
import org.openapis.openapi.models.operations.AssociateRoleToGroupRequestBody;
import org.openapis.openapi.models.operations.AssociateRoleToGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest("provident",                 new AssociateRoleToGroupRequestBody("distinctio");) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AssociateRoleToGroupResponse res = sdk.associateRoleToGroup(req);

            if (res.associateRoleToGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateRoleToGroup](docs/sdk/README.md#associateroletogroup) - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* [associateServiceRoleToAccount](docs/sdk/README.md#associateserviceroletoaccount) - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* [createConnectorDefinition](docs/sdk/README.md#createconnectordefinition) - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* [createConnectorDefinitionVersion](docs/sdk/README.md#createconnectordefinitionversion) - Creates a version of a connector definition which has already been defined.
* [createCoreDefinition](docs/sdk/README.md#createcoredefinition) - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* [createCoreDefinitionVersion](docs/sdk/README.md#createcoredefinitionversion) - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* [createDeployment](docs/sdk/README.md#createdeployment) - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* [createDeviceDefinition](docs/sdk/README.md#createdevicedefinition) - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* [createDeviceDefinitionVersion](docs/sdk/README.md#createdevicedefinitionversion) - Creates a version of a device definition that has already been defined.
* [createFunctionDefinition](docs/sdk/README.md#createfunctiondefinition) - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* [createFunctionDefinitionVersion](docs/sdk/README.md#createfunctiondefinitionversion) - Creates a version of a Lambda function definition that has already been defined.
* [createGroup](docs/sdk/README.md#creategroup) - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* [createGroupCertificateAuthority](docs/sdk/README.md#creategroupcertificateauthority) - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* [createGroupVersion](docs/sdk/README.md#creategroupversion) - Creates a version of a group which has already been defined.
* [createLoggerDefinition](docs/sdk/README.md#createloggerdefinition) - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* [createLoggerDefinitionVersion](docs/sdk/README.md#createloggerdefinitionversion) - Creates a version of a logger definition that has already been defined.
* [createResourceDefinition](docs/sdk/README.md#createresourcedefinition) - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* [createResourceDefinitionVersion](docs/sdk/README.md#createresourcedefinitionversion) - Creates a version of a resource definition that has already been defined.
* [createSoftwareUpdateJob](docs/sdk/README.md#createsoftwareupdatejob) - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* [createSubscriptionDefinition](docs/sdk/README.md#createsubscriptiondefinition) - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* [createSubscriptionDefinitionVersion](docs/sdk/README.md#createsubscriptiondefinitionversion) - Creates a version of a subscription definition which has already been defined.
* [deleteConnectorDefinition](docs/sdk/README.md#deleteconnectordefinition) - Deletes a connector definition.
* [deleteCoreDefinition](docs/sdk/README.md#deletecoredefinition) - Deletes a core definition.
* [deleteDeviceDefinition](docs/sdk/README.md#deletedevicedefinition) - Deletes a device definition.
* [deleteFunctionDefinition](docs/sdk/README.md#deletefunctiondefinition) - Deletes a Lambda function definition.
* [deleteGroup](docs/sdk/README.md#deletegroup) - Deletes a group.
* [deleteLoggerDefinition](docs/sdk/README.md#deleteloggerdefinition) - Deletes a logger definition.
* [deleteResourceDefinition](docs/sdk/README.md#deleteresourcedefinition) - Deletes a resource definition.
* [deleteSubscriptionDefinition](docs/sdk/README.md#deletesubscriptiondefinition) - Deletes a subscription definition.
* [disassociateRoleFromGroup](docs/sdk/README.md#disassociaterolefromgroup) - Disassociates the role from a group.
* [disassociateServiceRoleFromAccount](docs/sdk/README.md#disassociateservicerolefromaccount) - Disassociates the service role from your account. Without a service role, deployments will not work.
* [getAssociatedRole](docs/sdk/README.md#getassociatedrole) - Retrieves the role associated with a particular group.
* [getBulkDeploymentStatus](docs/sdk/README.md#getbulkdeploymentstatus) - Returns the status of a bulk deployment.
* [getConnectivityInfo](docs/sdk/README.md#getconnectivityinfo) - Retrieves the connectivity information for a core.
* [getConnectorDefinition](docs/sdk/README.md#getconnectordefinition) - Retrieves information about a connector definition.
* [getConnectorDefinitionVersion](docs/sdk/README.md#getconnectordefinitionversion) - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* [getCoreDefinition](docs/sdk/README.md#getcoredefinition) - Retrieves information about a core definition version.
* [getCoreDefinitionVersion](docs/sdk/README.md#getcoredefinitionversion) - Retrieves information about a core definition version.
* [getDeploymentStatus](docs/sdk/README.md#getdeploymentstatus) - Returns the status of a deployment.
* [getDeviceDefinition](docs/sdk/README.md#getdevicedefinition) - Retrieves information about a device definition.
* [getDeviceDefinitionVersion](docs/sdk/README.md#getdevicedefinitionversion) - Retrieves information about a device definition version.
* [getFunctionDefinition](docs/sdk/README.md#getfunctiondefinition) - Retrieves information about a Lambda function definition, including its creation time and latest version.
* [getFunctionDefinitionVersion](docs/sdk/README.md#getfunctiondefinitionversion) - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* [getGroup](docs/sdk/README.md#getgroup) - Retrieves information about a group.
* [getGroupCertificateAuthority](docs/sdk/README.md#getgroupcertificateauthority) - Retreives the CA associated with a group. Returns the public key of the CA.
* [getGroupCertificateConfiguration](docs/sdk/README.md#getgroupcertificateconfiguration) - Retrieves the current configuration for the CA used by the group.
* [getGroupVersion](docs/sdk/README.md#getgroupversion) - Retrieves information about a group version.
* [getLoggerDefinition](docs/sdk/README.md#getloggerdefinition) - Retrieves information about a logger definition.
* [getLoggerDefinitionVersion](docs/sdk/README.md#getloggerdefinitionversion) - Retrieves information about a logger definition version.
* [getResourceDefinition](docs/sdk/README.md#getresourcedefinition) - Retrieves information about a resource definition, including its creation time and latest version.
* [getResourceDefinitionVersion](docs/sdk/README.md#getresourcedefinitionversion) - Retrieves information about a resource definition version, including which resources are included in the version.
* [getServiceRoleForAccount](docs/sdk/README.md#getserviceroleforaccount) - Retrieves the service role that is attached to your account.
* [getSubscriptionDefinition](docs/sdk/README.md#getsubscriptiondefinition) - Retrieves information about a subscription definition.
* [getSubscriptionDefinitionVersion](docs/sdk/README.md#getsubscriptiondefinitionversion) - Retrieves information about a subscription definition version.
* [getThingRuntimeConfiguration](docs/sdk/README.md#getthingruntimeconfiguration) - Get the runtime configuration of a thing.
* [listBulkDeploymentDetailedReports](docs/sdk/README.md#listbulkdeploymentdetailedreports) - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* [listBulkDeployments](docs/sdk/README.md#listbulkdeployments) - Returns a list of bulk deployments.
* [listConnectorDefinitionVersions](docs/sdk/README.md#listconnectordefinitionversions) - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* [listConnectorDefinitions](docs/sdk/README.md#listconnectordefinitions) - Retrieves a list of connector definitions.
* [listCoreDefinitionVersions](docs/sdk/README.md#listcoredefinitionversions) - Lists the versions of a core definition.
* [listCoreDefinitions](docs/sdk/README.md#listcoredefinitions) - Retrieves a list of core definitions.
* [listDeployments](docs/sdk/README.md#listdeployments) - Returns a history of deployments for the group.
* [listDeviceDefinitionVersions](docs/sdk/README.md#listdevicedefinitionversions) - Lists the versions of a device definition.
* [listDeviceDefinitions](docs/sdk/README.md#listdevicedefinitions) - Retrieves a list of device definitions.
* [listFunctionDefinitionVersions](docs/sdk/README.md#listfunctiondefinitionversions) - Lists the versions of a Lambda function definition.
* [listFunctionDefinitions](docs/sdk/README.md#listfunctiondefinitions) - Retrieves a list of Lambda function definitions.
* [listGroupCertificateAuthorities](docs/sdk/README.md#listgroupcertificateauthorities) - Retrieves the current CAs for a group.
* [listGroupVersions](docs/sdk/README.md#listgroupversions) - Lists the versions of a group.
* [listGroups](docs/sdk/README.md#listgroups) - Retrieves a list of groups.
* [listLoggerDefinitionVersions](docs/sdk/README.md#listloggerdefinitionversions) - Lists the versions of a logger definition.
* [listLoggerDefinitions](docs/sdk/README.md#listloggerdefinitions) - Retrieves a list of logger definitions.
* [listResourceDefinitionVersions](docs/sdk/README.md#listresourcedefinitionversions) - Lists the versions of a resource definition.
* [listResourceDefinitions](docs/sdk/README.md#listresourcedefinitions) - Retrieves a list of resource definitions.
* [listSubscriptionDefinitionVersions](docs/sdk/README.md#listsubscriptiondefinitionversions) - Lists the versions of a subscription definition.
* [listSubscriptionDefinitions](docs/sdk/README.md#listsubscriptiondefinitions) - Retrieves a list of subscription definitions.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieves a list of resource tags for a resource arn.
* [resetDeployments](docs/sdk/README.md#resetdeployments) - Resets a group's deployments.
* [startBulkDeployment](docs/sdk/README.md#startbulkdeployment) - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* [stopBulkDeployment](docs/sdk/README.md#stopbulkdeployment) - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* [untagResource](docs/sdk/README.md#untagresource) - Remove resource tags from a Greengrass Resource.
* [updateConnectivityInfo](docs/sdk/README.md#updateconnectivityinfo) - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* [updateConnectorDefinition](docs/sdk/README.md#updateconnectordefinition) - Updates a connector definition.
* [updateCoreDefinition](docs/sdk/README.md#updatecoredefinition) - Updates a core definition.
* [updateDeviceDefinition](docs/sdk/README.md#updatedevicedefinition) - Updates a device definition.
* [updateFunctionDefinition](docs/sdk/README.md#updatefunctiondefinition) - Updates a Lambda function definition.
* [updateGroup](docs/sdk/README.md#updategroup) - Updates a group.
* [updateGroupCertificateConfiguration](docs/sdk/README.md#updategroupcertificateconfiguration) - Updates the Certificate expiry time for a group.
* [updateLoggerDefinition](docs/sdk/README.md#updateloggerdefinition) - Updates a logger definition.
* [updateResourceDefinition](docs/sdk/README.md#updateresourcedefinition) - Updates a resource definition.
* [updateSubscriptionDefinition](docs/sdk/README.md#updatesubscriptiondefinition) - Updates a subscription definition.
* [updateThingRuntimeConfiguration](docs/sdk/README.md#updatethingruntimeconfiguration) - Updates the runtime configuration of a thing.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
