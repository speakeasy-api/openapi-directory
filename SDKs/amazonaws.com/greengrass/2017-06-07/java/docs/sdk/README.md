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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRoleToGroupRequest req = new AssociateRoleToGroupRequest("suscipit",                 new AssociateRoleToGroupRequestBody("iure");) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateRoleToGroupResponse res = sdk.sdk.associateRoleToGroup(req);

            if (res.associateRoleToGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateServiceRoleToAccount

Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.

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
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceRoleToAccountRequest req = new AssociateServiceRoleToAccountRequest(                new AssociateServiceRoleToAccountRequestBody("placeat");) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
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

## createConnectorDefinition

Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionRequest;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionResponse;
import org.openapis.openapi.models.shared.Connector;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorDefinitionRequest req = new CreateConnectorDefinitionRequest(                new CreateConnectorDefinitionRequestBody() {{
                                initialVersion = new CreateConnectorDefinitionRequestBodyInitialVersion() {{
                                    connectors = new org.openapis.openapi.models.shared.Connector[]{{
                                        add(new Connector("natus", "sed") {{
                                            connectorArn = "deserunt";
                                            id = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                                            parameters = new java.util.HashMap<String, String>() {{
                                                put("esse", "ipsum");
                                                put("excepturi", "aspernatur");
                                                put("perferendis", "ad");
                                            }};
                                        }}),
                                    }};
                                }};;
                                name = "Curtis Morissette";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
                xAmznClientToken = "corporis";
            }};            

            CreateConnectorDefinitionResponse res = sdk.sdk.createConnectorDefinition(req);

            if (res.createConnectorDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnectorDefinitionVersion

Creates a version of a connector definition which has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateConnectorDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Connector;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorDefinitionVersionRequest req = new CreateConnectorDefinitionVersionRequest("nobis",                 new CreateConnectorDefinitionVersionRequestBody() {{
                                connectors = new org.openapis.openapi.models.shared.Connector[]{{
                                    add(new Connector("quasi", "reiciendis") {{
                                        connectorArn = "omnis";
                                        id = "55907aff-1a3a-42fa-9467-739251aa52c3";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("ipsam", "id");
                                            put("possimus", "aut");
                                            put("quasi", "error");
                                            put("temporibus", "laborum");
                                        }};
                                    }}),
                                    add(new Connector("incidunt", "enim") {{
                                        connectorArn = "voluptatibus";
                                        id = "e78f097b-0074-4f15-871b-5e6e13b99d48";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("voluptates", "quasi");
                                            put("repudiandae", "sint");
                                            put("veritatis", "itaque");
                                        }};
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
                xAmznClientToken = "labore";
            }};            

            CreateConnectorDefinitionVersionResponse res = sdk.sdk.createConnectorDefinitionVersion(req);

            if (res.createConnectorDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCoreDefinition

Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCoreDefinitionRequest;
import org.openapis.openapi.models.operations.CreateCoreDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateCoreDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateCoreDefinitionResponse;
import org.openapis.openapi.models.shared.Core;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCoreDefinitionRequest req = new CreateCoreDefinitionRequest(                new CreateCoreDefinitionRequestBody() {{
                                initialVersion = new CreateCoreDefinitionRequestBodyInitialVersion() {{
                                    cores = new org.openapis.openapi.models.shared.Core[]{{
                                        add(new Core("rerum", "dicta", "magnam") {{
                                            certificateArn = "aliquid";
                                            id = "9802d502-a94b-4b4f-a3c9-69e9a3efa77d";
                                            syncShadow = false;
                                            thingArn = "maiores";
                                        }}),
                                    }};
                                }};;
                                name = "Irving Jenkins";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("non", "occaecati");
                                    put("enim", "accusamus");
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                }};
                            }};) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
                xAmznClientToken = "vel";
            }};            

            CreateCoreDefinitionResponse res = sdk.sdk.createCoreDefinition(req);

            if (res.createCoreDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCoreDefinitionVersion

Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCoreDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateCoreDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateCoreDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Core;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCoreDefinitionVersionRequest req = new CreateCoreDefinitionVersionRequest("omnis",                 new CreateCoreDefinitionVersionRequestBody() {{
                                cores = new org.openapis.openapi.models.shared.Core[]{{
                                    add(new Core("doloribus", "debitis", "eius") {{
                                        certificateArn = "perferendis";
                                        id = "74ba4469-b6e2-4141-9598-90afa563e251";
                                        syncShadow = false;
                                        thingArn = "iure";
                                    }}),
                                    add(new Core("ipsam", "voluptate", "autem") {{
                                        certificateArn = "maxime";
                                        id = "8b711e5b-7fd2-4ed0-a892-1cddc692601f";
                                        syncShadow = false;
                                        thingArn = "quidem";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
                xAmznClientToken = "amet";
            }};            

            CreateCoreDefinitionVersionResponse res = sdk.sdk.createCoreDefinitionVersion(req);

            if (res.createCoreDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBodyDeploymentTypeEnum;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest("cumque",                 new CreateDeploymentRequestBody(CreateDeploymentRequestBodyDeploymentTypeEnum.REDEPLOYMENT) {{
                                deploymentId = "hic";
                                groupVersionId = "libero";
                            }};) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
                xAmznClientToken = "nesciunt";
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

## createDeviceDefinition

Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionRequest;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionResponse;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceDefinitionRequest req = new CreateDeviceDefinitionRequest(                new CreateDeviceDefinitionRequestBody() {{
                                initialVersion = new CreateDeviceDefinitionRequestBodyInitialVersion() {{
                                    devices = new org.openapis.openapi.models.shared.Device[]{{
                                        add(new Device("aliquid", "dolorem", "dolorem") {{
                                            certificateArn = "dolores";
                                            id = "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4";
                                            syncShadow = false;
                                            thingArn = "quos";
                                        }}),
                                    }};
                                }};;
                                name = "Norma Erdman";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "dignissimos");
                                    put("reiciendis", "amet");
                                    put("dolorum", "numquam");
                                }};
                            }};) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
                xAmznClientToken = "quidem";
            }};            

            CreateDeviceDefinitionResponse res = sdk.sdk.createDeviceDefinition(req);

            if (res.createDeviceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceDefinitionVersion

Creates a version of a device definition that has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceDefinitionVersionRequest req = new CreateDeviceDefinitionVersionRequest("voluptas",                 new CreateDeviceDefinitionVersionRequestBody() {{
                                devices = new org.openapis.openapi.models.shared.Device[]{{
                                    add(new Device("totam", "similique", "alias") {{
                                        certificateArn = "eos";
                                        id = "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95";
                                        syncShadow = false;
                                        thingArn = "repellendus";
                                    }}),
                                    add(new Device("ipsum", "incidunt", "qui") {{
                                        certificateArn = "at";
                                        id = "446ce2af-7a73-4cf3-be45-3f870b326b5a";
                                        syncShadow = false;
                                        thingArn = "quam";
                                    }}),
                                    add(new Device("nobis", "quos", "tempore") {{
                                        certificateArn = "cupiditate";
                                        id = "cdb1a842-2bb6-479d-a322-715bf0cbb1e3";
                                        syncShadow = false;
                                        thingArn = "veritatis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
                xAmznClientToken = "dolorum";
            }};            

            CreateDeviceDefinitionVersionResponse res = sdk.sdk.createDeviceDefinitionVersion(req);

            if (res.createDeviceDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunctionDefinition

Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionRequest;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionResponse;
import org.openapis.openapi.models.shared.EncodingTypeEnum;
import org.openapis.openapi.models.shared.Function;
import org.openapis.openapi.models.shared.FunctionConfiguration;
import org.openapis.openapi.models.shared.FunctionConfigurationEnvironment;
import org.openapis.openapi.models.shared.FunctionDefaultConfig;
import org.openapis.openapi.models.shared.FunctionDefaultExecutionConfig;
import org.openapis.openapi.models.shared.FunctionExecutionConfig;
import org.openapis.openapi.models.shared.FunctionIsolationModeEnum;
import org.openapis.openapi.models.shared.FunctionRunAsConfig;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.ResourceAccessPolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFunctionDefinitionRequest req = new CreateFunctionDefinitionRequest(                new CreateFunctionDefinitionRequestBody() {{
                                initialVersion = new CreateFunctionDefinitionRequestBodyInitialVersion() {{
                                    defaultConfig = new FunctionDefaultConfig() {{
                                        execution = new FunctionDefaultExecutionConfig() {{
                                            isolationMode = FunctionIsolationModeEnum.GREENGRASS_CONTAINER;
                                            runAs = new FunctionRunAsConfig() {{
                                                gid = 16429L;
                                                uid = 555649L;
                                            }};;
                                        }};;
                                    }};;
                                    functions = new org.openapis.openapi.models.shared.Function[]{{
                                        add(new Function("aspernatur") {{
                                            functionArn = "consequatur";
                                            functionConfiguration = new FunctionConfiguration() {{
                                                encodingType = EncodingTypeEnum.JSON;
                                                environment = new FunctionConfigurationEnvironment() {{
                                                    accessSysfs = false;
                                                    execution = new FunctionExecutionConfig() {{
                                                        isolationMode = FunctionIsolationModeEnum.NO_CONTAINER;
                                                        runAs = new FunctionRunAsConfig() {{
                                                            gid = 785153L;
                                                            uid = 984330L;
                                                        }};
                                                    }};
                                                    resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                        add(new ResourceAccessPolicy("qui") {{
                                                            permission = PermissionEnum.RW;
                                                            resourceId = "cupiditate";
                                                        }}),
                                                        add(new ResourceAccessPolicy("odio") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "laudantium";
                                                        }}),
                                                    }};
                                                    variables = new java.util.HashMap<String, String>() {{
                                                        put("voluptatibus", "quisquam");
                                                        put("vero", "omnis");
                                                        put("quis", "ipsum");
                                                    }};
                                                }};
                                                execArgs = "delectus";
                                                executable = "voluptate";
                                                functionRuntimeOverride = "consectetur";
                                                memorySize = 878870L;
                                                pinned = false;
                                                timeout = 949319L;
                                            }};
                                            id = "7fbc7abd-74dd-439c-8f5d-2cff7c70a456";
                                        }}),
                                        add(new Function("provident") {{
                                            functionArn = "vel";
                                            functionConfiguration = new FunctionConfiguration() {{
                                                encodingType = EncodingTypeEnum.JSON;
                                                environment = new FunctionConfigurationEnvironment() {{
                                                    accessSysfs = false;
                                                    execution = new FunctionExecutionConfig() {{
                                                        isolationMode = FunctionIsolationModeEnum.GREENGRASS_CONTAINER;
                                                        runAs = new FunctionRunAsConfig() {{
                                                            gid = 189848L;
                                                            uid = 401132L;
                                                        }};
                                                    }};
                                                    resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                        add(new ResourceAccessPolicy("maiores") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "dolor";
                                                        }}),
                                                        add(new ResourceAccessPolicy("nulla") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "ex";
                                                        }}),
                                                        add(new ResourceAccessPolicy("nostrum") {{
                                                            permission = PermissionEnum.RW;
                                                            resourceId = "voluptatibus";
                                                        }}),
                                                    }};
                                                    variables = new java.util.HashMap<String, String>() {{
                                                        put("quisquam", "saepe");
                                                        put("ea", "impedit");
                                                        put("corporis", "veniam");
                                                        put("aliquid", "inventore");
                                                    }};
                                                }};
                                                execArgs = "magnam";
                                                executable = "ea";
                                                functionRuntimeOverride = "quo";
                                                memorySize = 232234L;
                                                pinned = false;
                                                timeout = 926213L;
                                            }};
                                            id = "250fb008-c42e-4141-aac3-66c8dd6b1442";
                                        }}),
                                        add(new Function("commodi") {{
                                            functionArn = "ipsa";
                                            functionConfiguration = new FunctionConfiguration() {{
                                                encodingType = EncodingTypeEnum.BINARY;
                                                environment = new FunctionConfigurationEnvironment() {{
                                                    accessSysfs = false;
                                                    execution = new FunctionExecutionConfig() {{
                                                        isolationMode = FunctionIsolationModeEnum.GREENGRASS_CONTAINER;
                                                        runAs = new FunctionRunAsConfig() {{
                                                            gid = 487935L;
                                                            uid = 262118L;
                                                        }};
                                                    }};
                                                    resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                        add(new ResourceAccessPolicy("fuga") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "rem";
                                                        }}),
                                                        add(new ResourceAccessPolicy("fugiat") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "quidem";
                                                        }}),
                                                    }};
                                                    variables = new java.util.HashMap<String, String>() {{
                                                        put("eum", "suscipit");
                                                        put("assumenda", "eos");
                                                    }};
                                                }};
                                                execArgs = "praesentium";
                                                executable = "quisquam";
                                                functionRuntimeOverride = "veritatis";
                                                memorySize = 56848L;
                                                pinned = false;
                                                timeout = 660040L;
                                            }};
                                            id = "b3cdca42-5190-44e5-a3c7-e0bc7178e479";
                                        }}),
                                        add(new Function("blanditiis") {{
                                            functionArn = "sapiente";
                                            functionConfiguration = new FunctionConfiguration() {{
                                                encodingType = EncodingTypeEnum.BINARY;
                                                environment = new FunctionConfigurationEnvironment() {{
                                                    accessSysfs = false;
                                                    execution = new FunctionExecutionConfig() {{
                                                        isolationMode = FunctionIsolationModeEnum.NO_CONTAINER;
                                                        runAs = new FunctionRunAsConfig() {{
                                                            gid = 475289L;
                                                            uid = 35362L;
                                                        }};
                                                    }};
                                                    resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                        add(new ResourceAccessPolicy("praesentium") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "quas";
                                                        }}),
                                                        add(new ResourceAccessPolicy("fugit") {{
                                                            permission = PermissionEnum.RO;
                                                            resourceId = "deleniti";
                                                        }}),
                                                        add(new ResourceAccessPolicy("incidunt") {{
                                                            permission = PermissionEnum.RW;
                                                            resourceId = "mollitia";
                                                        }}),
                                                        add(new ResourceAccessPolicy("minima") {{
                                                            permission = PermissionEnum.RW;
                                                            resourceId = "explicabo";
                                                        }}),
                                                    }};
                                                    variables = new java.util.HashMap<String, String>() {{
                                                        put("fugit", "sapiente");
                                                        put("consequuntur", "ratione");
                                                    }};
                                                }};
                                                execArgs = "explicabo";
                                                executable = "saepe";
                                                functionRuntimeOverride = "occaecati";
                                                memorySize = 543806L;
                                                pinned = false;
                                                timeout = 92260L;
                                            }};
                                            id = "7ee17cbe-61e6-4b7b-95bc-0ab3c20c4f37";
                                        }}),
                                    }};
                                }};;
                                name = "Randal Stiedemann";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("a", "error");
                                }};
                            }};) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "possimus";
                xAmzDate = "quia";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facere";
                xAmznClientToken = "veritatis";
            }};            

            CreateFunctionDefinitionResponse res = sdk.sdk.createFunctionDefinition(req);

            if (res.createFunctionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFunctionDefinitionVersion

Creates a version of a Lambda function definition that has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionVersionRequestBodyDefaultConfig;
import org.openapis.openapi.models.operations.CreateFunctionDefinitionVersionResponse;
import org.openapis.openapi.models.shared.EncodingTypeEnum;
import org.openapis.openapi.models.shared.Function;
import org.openapis.openapi.models.shared.FunctionConfiguration;
import org.openapis.openapi.models.shared.FunctionConfigurationEnvironment;
import org.openapis.openapi.models.shared.FunctionDefaultExecutionConfig;
import org.openapis.openapi.models.shared.FunctionExecutionConfig;
import org.openapis.openapi.models.shared.FunctionIsolationModeEnum;
import org.openapis.openapi.models.shared.FunctionRunAsConfig;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.ResourceAccessPolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFunctionDefinitionVersionRequest req = new CreateFunctionDefinitionVersionRequest("quasi",                 new CreateFunctionDefinitionVersionRequestBody() {{
                                defaultConfig = new CreateFunctionDefinitionVersionRequestBodyDefaultConfig() {{
                                    execution = new FunctionDefaultExecutionConfig() {{
                                        isolationMode = FunctionIsolationModeEnum.NO_CONTAINER;
                                        runAs = new FunctionRunAsConfig() {{
                                            gid = 633608L;
                                            uid = 398434L;
                                        }};;
                                    }};;
                                }};;
                                functions = new org.openapis.openapi.models.shared.Function[]{{
                                    add(new Function("dicta") {{
                                        functionArn = "quae";
                                        functionConfiguration = new FunctionConfiguration() {{
                                            encodingType = EncodingTypeEnum.JSON;
                                            environment = new FunctionConfigurationEnvironment() {{
                                                accessSysfs = false;
                                                execution = new FunctionExecutionConfig() {{
                                                    isolationMode = FunctionIsolationModeEnum.GREENGRASS_CONTAINER;
                                                    runAs = new FunctionRunAsConfig() {{
                                                        gid = 447378L;
                                                        uid = 258684L;
                                                    }};
                                                }};
                                                resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                    add(new ResourceAccessPolicy("accusantium") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "soluta";
                                                    }}),
                                                    add(new ResourceAccessPolicy("dicta") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "sapiente";
                                                    }}),
                                                    add(new ResourceAccessPolicy("ullam") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "reprehenderit";
                                                    }}),
                                                }};
                                                variables = new java.util.HashMap<String, String>() {{
                                                    put("aut", "voluptatum");
                                                    put("qui", "quibusdam");
                                                }};
                                            }};
                                            execArgs = "ex";
                                            executable = "deleniti";
                                            functionRuntimeOverride = "itaque";
                                            memorySize = 680270L;
                                            pinned = false;
                                            timeout = 99615L;
                                        }};
                                        id = "9f1d1705-1339-4d08-886a-1840394c2607";
                                    }}),
                                    add(new Function("reiciendis") {{
                                        functionArn = "maiores";
                                        functionConfiguration = new FunctionConfiguration() {{
                                            encodingType = EncodingTypeEnum.JSON;
                                            environment = new FunctionConfigurationEnvironment() {{
                                                accessSysfs = false;
                                                execution = new FunctionExecutionConfig() {{
                                                    isolationMode = FunctionIsolationModeEnum.GREENGRASS_CONTAINER;
                                                    runAs = new FunctionRunAsConfig() {{
                                                        gid = 974257L;
                                                        uid = 374323L;
                                                    }};
                                                }};
                                                resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                    add(new ResourceAccessPolicy("quaerat") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "ea";
                                                    }}),
                                                    add(new ResourceAccessPolicy("officia") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "repellendus";
                                                    }}),
                                                    add(new ResourceAccessPolicy("officia") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "dignissimos";
                                                    }}),
                                                    add(new ResourceAccessPolicy("quae") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "nemo";
                                                    }}),
                                                }};
                                                variables = new java.util.HashMap<String, String>() {{
                                                    put("porro", "quod");
                                                    put("labore", "ab");
                                                }};
                                            }};
                                            execArgs = "adipisci";
                                            executable = "fuga";
                                            functionRuntimeOverride = "id";
                                            memorySize = 380729L;
                                            pinned = false;
                                            timeout = 246063L;
                                        }};
                                        id = "aae8d678-64db-4b67-9fd5-e60b375ed4f6";
                                    }}),
                                    add(new Function("ab") {{
                                        functionArn = "quidem";
                                        functionConfiguration = new FunctionConfiguration() {{
                                            encodingType = EncodingTypeEnum.JSON;
                                            environment = new FunctionConfigurationEnvironment() {{
                                                accessSysfs = false;
                                                execution = new FunctionExecutionConfig() {{
                                                    isolationMode = FunctionIsolationModeEnum.NO_CONTAINER;
                                                    runAs = new FunctionRunAsConfig() {{
                                                        gid = 296556L;
                                                        uid = 121059L;
                                                    }};
                                                }};
                                                resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                    add(new ResourceAccessPolicy("amet") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "non";
                                                    }}),
                                                    add(new ResourceAccessPolicy("a") {{
                                                        permission = PermissionEnum.RO;
                                                        resourceId = "dignissimos";
                                                    }}),
                                                    add(new ResourceAccessPolicy("corporis") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "consectetur";
                                                    }}),
                                                    add(new ResourceAccessPolicy("ipsa") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "laboriosam";
                                                    }}),
                                                }};
                                                variables = new java.util.HashMap<String, String>() {{
                                                    put("libero", "vitae");
                                                    put("accusamus", "similique");
                                                    put("tempora", "aspernatur");
                                                    put("voluptas", "voluptas");
                                                }};
                                            }};
                                            execArgs = "voluptas";
                                            executable = "minima";
                                            functionRuntimeOverride = "nobis";
                                            memorySize = 680116L;
                                            pinned = false;
                                            timeout = 237807L;
                                        }};
                                        id = "c28744ed-53b8-48f3-a8d8-f5c0b2f2fb7b";
                                    }}),
                                    add(new Function("in") {{
                                        functionArn = "iste";
                                        functionConfiguration = new FunctionConfiguration() {{
                                            encodingType = EncodingTypeEnum.BINARY;
                                            environment = new FunctionConfigurationEnvironment() {{
                                                accessSysfs = false;
                                                execution = new FunctionExecutionConfig() {{
                                                    isolationMode = FunctionIsolationModeEnum.NO_CONTAINER;
                                                    runAs = new FunctionRunAsConfig() {{
                                                        gid = 152354L;
                                                        uid = 447516L;
                                                    }};
                                                }};
                                                resourceAccessPolicies = new org.openapis.openapi.models.shared.ResourceAccessPolicy[]{{
                                                    add(new ResourceAccessPolicy("voluptas") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "explicabo";
                                                    }}),
                                                    add(new ResourceAccessPolicy("suscipit") {{
                                                        permission = PermissionEnum.RW;
                                                        resourceId = "architecto";
                                                    }}),
                                                }};
                                                variables = new java.util.HashMap<String, String>() {{
                                                    put("debitis", "illo");
                                                    put("reiciendis", "perferendis");
                                                    put("corrupti", "maiores");
                                                    put("incidunt", "sed");
                                                }};
                                            }};
                                            execArgs = "provident";
                                            executable = "eius";
                                            functionRuntimeOverride = "necessitatibus";
                                            memorySize = 215529L;
                                            pinned = false;
                                            timeout = 406733L;
                                        }};
                                        id = "98f447f6-03e8-4b44-9e80-ca55efd20e45";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "laudantium";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "laboriosam";
                xAmznClientToken = "dolorum";
            }};            

            CreateFunctionDefinitionVersionResponse res = sdk.sdk.createFunctionDefinitionVersion(req);

            if (res.createFunctionDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroup

Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupRequestBody;
import org.openapis.openapi.models.operations.CreateGroupRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequestBody("error") {{
                                initialVersion = new CreateGroupRequestBodyInitialVersion() {{
                                    connectorDefinitionVersionArn = "hic";
                                    coreDefinitionVersionArn = "expedita";
                                    deviceDefinitionVersionArn = "debitis";
                                    functionDefinitionVersionArn = "neque";
                                    loggerDefinitionVersionArn = "dolorum";
                                    resourceDefinitionVersionArn = "nostrum";
                                    subscriptionDefinitionVersionArn = "officia";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "accusamus");
                                    put("tempora", "atque");
                                    put("fugit", "ut");
                                }};
                            }};) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "culpa";
                xAmzDate = "expedita";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "esse";
                xAmznClientToken = "ipsam";
            }};            

            CreateGroupResponse res = sdk.sdk.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupCertificateAuthority

Creates a CA for the group. If a CA already exists, it will rotate the existing CA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.CreateGroupCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupCertificateAuthorityRequest req = new CreateGroupCertificateAuthorityRequest("voluptatum") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "corporis";
                xAmzDate = "et";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "sed";
                xAmznClientToken = "sit";
            }};            

            CreateGroupCertificateAuthorityResponse res = sdk.sdk.createGroupCertificateAuthority(req);

            if (res.createGroupCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroupVersion

Creates a version of a group which has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupVersionRequest;
import org.openapis.openapi.models.operations.CreateGroupVersionRequestBody;
import org.openapis.openapi.models.operations.CreateGroupVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupVersionRequest req = new CreateGroupVersionRequest("nostrum",                 new CreateGroupVersionRequestBody() {{
                                connectorDefinitionVersionArn = "saepe";
                                coreDefinitionVersionArn = "error";
                                deviceDefinitionVersionArn = "consequatur";
                                functionDefinitionVersionArn = "incidunt";
                                loggerDefinitionVersionArn = "reiciendis";
                                resourceDefinitionVersionArn = "dolorem";
                                subscriptionDefinitionVersionArn = "harum";
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "occaecati";
                xAmzDate = "labore";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "laborum";
                xAmznClientToken = "nam";
            }};            

            CreateGroupVersionResponse res = sdk.sdk.createGroupVersion(req);

            if (res.createGroupVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoggerDefinition

Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionRequest;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionResponse;
import org.openapis.openapi.models.shared.Logger;
import org.openapis.openapi.models.shared.LoggerComponentEnum;
import org.openapis.openapi.models.shared.LoggerLevelEnum;
import org.openapis.openapi.models.shared.LoggerTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLoggerDefinitionRequest req = new CreateLoggerDefinitionRequest(                new CreateLoggerDefinitionRequestBody() {{
                                initialVersion = new CreateLoggerDefinitionRequestBodyInitialVersion() {{
                                    loggers = new org.openapis.openapi.models.shared.Logger[]{{
                                        add(new Logger(LoggerComponentEnum.LAMBDA, "error", LoggerLevelEnum.FATAL, LoggerTypeEnum.AWS_CLOUD_WATCH) {{
                                            component = LoggerComponentEnum.GREENGRASS_SYSTEM;
                                            id = "3a79f9df-e0ab-47da-8a50-ce187f86bc17";
                                            level = LoggerLevelEnum.INFO;
                                            space = 826825L;
                                            type = LoggerTypeEnum.FILE_SYSTEM;
                                        }}),
                                        add(new Logger(LoggerComponentEnum.LAMBDA, "perspiciatis", LoggerLevelEnum.WARN, LoggerTypeEnum.FILE_SYSTEM) {{
                                            component = LoggerComponentEnum.LAMBDA;
                                            id = "9526f8d9-86e8-481e-ad4f-0e1012563f94";
                                            level = LoggerLevelEnum.FATAL;
                                            space = 160467L;
                                            type = LoggerTypeEnum.AWS_CLOUD_WATCH;
                                        }}),
                                    }};
                                }};;
                                name = "Tracy Cronin";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "error");
                                    put("illo", "corporis");
                                }};
                            }};) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "non";
                xAmzDate = "vero";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "ipsa";
                xAmznClientToken = "totam";
            }};            

            CreateLoggerDefinitionResponse res = sdk.sdk.createLoggerDefinition(req);

            if (res.createLoggerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLoggerDefinitionVersion

Creates a version of a logger definition that has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateLoggerDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Logger;
import org.openapis.openapi.models.shared.LoggerComponentEnum;
import org.openapis.openapi.models.shared.LoggerLevelEnum;
import org.openapis.openapi.models.shared.LoggerTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLoggerDefinitionVersionRequest req = new CreateLoggerDefinitionVersionRequest("molestiae",                 new CreateLoggerDefinitionVersionRequestBody() {{
                                loggers = new org.openapis.openapi.models.shared.Logger[]{{
                                    add(new Logger(LoggerComponentEnum.GREENGRASS_SYSTEM, "debitis", LoggerLevelEnum.WARN, LoggerTypeEnum.FILE_SYSTEM) {{
                                        component = LoggerComponentEnum.GREENGRASS_SYSTEM;
                                        id = "b6e3ab88-45f0-4597-a60f-f2a54a31e947";
                                        level = LoggerLevelEnum.WARN;
                                        space = 284000L;
                                        type = LoggerTypeEnum.AWS_CLOUD_WATCH;
                                    }}),
                                    add(new Logger(LoggerComponentEnum.GREENGRASS_SYSTEM, "rerum", LoggerLevelEnum.INFO, LoggerTypeEnum.FILE_SYSTEM) {{
                                        component = LoggerComponentEnum.GREENGRASS_SYSTEM;
                                        id = "e7956f92-51a5-4a9d-a660-ff57bfaad4f9";
                                        level = LoggerLevelEnum.FATAL;
                                        space = 956933L;
                                        type = LoggerTypeEnum.AWS_CLOUD_WATCH;
                                    }}),
                                    add(new Logger(LoggerComponentEnum.LAMBDA, "ratione", LoggerLevelEnum.ERROR, LoggerTypeEnum.AWS_CLOUD_WATCH) {{
                                        component = LoggerComponentEnum.GREENGRASS_SYSTEM;
                                        id = "2c103264-8dc2-4f61-9199-ebfd0e9fe6c6";
                                        level = LoggerLevelEnum.INFO;
                                        space = 147808L;
                                        type = LoggerTypeEnum.AWS_CLOUD_WATCH;
                                    }}),
                                    add(new Logger(LoggerComponentEnum.GREENGRASS_SYSTEM, "laborum", LoggerLevelEnum.DEBUG, LoggerTypeEnum.FILE_SYSTEM) {{
                                        component = LoggerComponentEnum.LAMBDA;
                                        id = "01179963-12fd-4e04-b717-78ff61d01747";
                                        level = LoggerLevelEnum.WARN;
                                        space = 235263L;
                                        type = LoggerTypeEnum.FILE_SYSTEM;
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "aliquid";
                xAmzDate = "officia";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "perferendis";
                xAmznClientToken = "eum";
            }};            

            CreateLoggerDefinitionVersionResponse res = sdk.sdk.createLoggerDefinitionVersion(req);

            if (res.createLoggerDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResourceDefinition

Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceDefinitionRequest;
import org.openapis.openapi.models.operations.CreateResourceDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateResourceDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateResourceDefinitionResponse;
import org.openapis.openapi.models.shared.GroupOwnerSetting;
import org.openapis.openapi.models.shared.LocalDeviceResourceData;
import org.openapis.openapi.models.shared.LocalVolumeResourceData;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.ResourceDataContainer;
import org.openapis.openapi.models.shared.ResourceDownloadOwnerSetting;
import org.openapis.openapi.models.shared.S3MachineLearningModelResourceData;
import org.openapis.openapi.models.shared.SageMakerMachineLearningModelResourceData;
import org.openapis.openapi.models.shared.SecretsManagerSecretResourceData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceDefinitionRequest req = new CreateResourceDefinitionRequest(                new CreateResourceDefinitionRequestBody() {{
                                initialVersion = new CreateResourceDefinitionRequestBodyInitialVersion() {{
                                    resources = new org.openapis.openapi.models.shared.Resource[]{{
                                        add(new Resource("aliquam", "inventore",                 new ResourceDataContainer() {{
                                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "deleniti";
                                                                }};;
                                                                sourcePath = "veritatis";
                                                            }};;
                                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                                destinationPath = "tempora";
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "dolor";
                                                                }};;
                                                                sourcePath = "consequatur";
                                                            }};;
                                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                                destinationPath = "architecto";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("sit", PermissionEnum.RO);;
                                                                s3Uri = "fugit";
                                                            }};;
                                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                                destinationPath = "ab";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("laudantium", PermissionEnum.RO);;
                                                                sageMakerJobArn = "dolor";
                                                            }};;
                                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                                arn = "fugiat";
                                                                additionalStagingLabelsToDownload = new String[]{{
                                                                    add("consequuntur"),
                                                                    add("ipsa"),
                                                                }};
                                                            }};;
                                                        }};) {{
                                            id = "a1adeaab-5851-4d6c-a45b-08b61891baa0";
                                            name = "Stewart Brakus";
                                            resourceDataContainer = new ResourceDataContainer() {{
                                                localDeviceResourceData = new LocalDeviceResourceData() {{
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "debitis";
                                                    }};
                                                    sourcePath = "voluptatem";
                                                }};
                                                localVolumeResourceData = new LocalVolumeResourceData() {{
                                                    destinationPath = "alias";
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "deleniti";
                                                    }};
                                                    sourcePath = "earum";
                                                }};
                                                s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                    destinationPath = "ex";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("minus", PermissionEnum.RO) {{
                                                        groupOwner = "sapiente";
                                                        groupPermission = PermissionEnum.RW;
                                                    }};
                                                    s3Uri = "asperiores";
                                                }};
                                                sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                    destinationPath = "ratione";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("illum", PermissionEnum.RW) {{
                                                        groupOwner = "ullam";
                                                        groupPermission = PermissionEnum.RO;
                                                    }};
                                                    sageMakerJobArn = "impedit";
                                                }};
                                                secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                    arn = "quibusdam";
                                                    additionalStagingLabelsToDownload = new String[]{{
                                                        add("ipsam"),
                                                        add("culpa"),
                                                        add("dolor"),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new Resource("consequuntur", "consectetur",                 new ResourceDataContainer() {{
                                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "aperiam";
                                                                }};;
                                                                sourcePath = "cupiditate";
                                                            }};;
                                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                                destinationPath = "reiciendis";
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "soluta";
                                                                }};;
                                                                sourcePath = "alias";
                                                            }};;
                                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                                destinationPath = "omnis";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("eos", PermissionEnum.RW);;
                                                                s3Uri = "iste";
                                                            }};;
                                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                                destinationPath = "magni";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("inventore", PermissionEnum.RW);;
                                                                sageMakerJobArn = "accusamus";
                                                            }};;
                                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                                arn = "voluptatibus";
                                                                additionalStagingLabelsToDownload = new String[]{{
                                                                    add("omnis"),
                                                                    add("delectus"),
                                                                    add("minima"),
                                                                }};
                                                            }};;
                                                        }};) {{
                                            id = "8ece7e25-3b66-4845-9c6c-6e205e16deab";
                                            name = "Ora VonRueden";
                                            resourceDataContainer = new ResourceDataContainer() {{
                                                localDeviceResourceData = new LocalDeviceResourceData() {{
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "nemo";
                                                    }};
                                                    sourcePath = "voluptate";
                                                }};
                                                localVolumeResourceData = new LocalVolumeResourceData() {{
                                                    destinationPath = "blanditiis";
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "officia";
                                                    }};
                                                    sourcePath = "voluptas";
                                                }};
                                                s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                    destinationPath = "numquam";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("eius", PermissionEnum.RO) {{
                                                        groupOwner = "nemo";
                                                        groupPermission = PermissionEnum.RW;
                                                    }};
                                                    s3Uri = "ducimus";
                                                }};
                                                sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                    destinationPath = "nesciunt";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("incidunt", PermissionEnum.RO) {{
                                                        groupOwner = "fuga";
                                                        groupPermission = PermissionEnum.RW;
                                                    }};
                                                    sageMakerJobArn = "rem";
                                                }};
                                                secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                    arn = "fugiat";
                                                    additionalStagingLabelsToDownload = new String[]{{
                                                        add("nisi"),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                        add(new Resource("neque", "quo",                 new ResourceDataContainer() {{
                                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "deleniti";
                                                                }};;
                                                                sourcePath = "quibusdam";
                                                            }};;
                                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                                destinationPath = "iure";
                                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                                    autoAddGroupOwner = false;
                                                                    groupOwner = "odit";
                                                                }};;
                                                                sourcePath = "voluptatibus";
                                                            }};;
                                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                                destinationPath = "vel";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("magnam", PermissionEnum.RW);;
                                                                s3Uri = "inventore";
                                                            }};;
                                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                                destinationPath = "facere";
                                                                ownerSetting = new ResourceDownloadOwnerSetting("libero", PermissionEnum.RO);;
                                                                sageMakerJobArn = "voluptatibus";
                                                            }};;
                                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                                arn = "quia";
                                                                additionalStagingLabelsToDownload = new String[]{{
                                                                    add("aliquam"),
                                                                    add("velit"),
                                                                    add("illo"),
                                                                    add("accusantium"),
                                                                }};
                                                            }};;
                                                        }};) {{
                                            id = "8c4d86e6-8e4b-4e05-a013-f59da757a59e";
                                            name = "Irvin Tromp";
                                            resourceDataContainer = new ResourceDataContainer() {{
                                                localDeviceResourceData = new LocalDeviceResourceData() {{
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "voluptas";
                                                    }};
                                                    sourcePath = "debitis";
                                                }};
                                                localVolumeResourceData = new LocalVolumeResourceData() {{
                                                    destinationPath = "delectus";
                                                    groupOwnerSetting = new GroupOwnerSetting() {{
                                                        autoAddGroupOwner = false;
                                                        groupOwner = "quae";
                                                    }};
                                                    sourcePath = "minus";
                                                }};
                                                s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                    destinationPath = "fuga";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("velit", PermissionEnum.RW) {{
                                                        groupOwner = "laborum";
                                                        groupPermission = PermissionEnum.RO;
                                                    }};
                                                    s3Uri = "ipsum";
                                                }};
                                                sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                    destinationPath = "impedit";
                                                    ownerSetting = new ResourceDownloadOwnerSetting("repudiandae", PermissionEnum.RW) {{
                                                        groupOwner = "magni";
                                                        groupPermission = PermissionEnum.RW;
                                                    }};
                                                    sageMakerJobArn = "dolore";
                                                }};
                                                secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                    arn = "iusto";
                                                    additionalStagingLabelsToDownload = new String[]{{
                                                        add("sequi"),
                                                        add("dignissimos"),
                                                    }};
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};;
                                name = "Rosemary Breitenberg";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("velit", "ut");
                                    put("perspiciatis", "earum");
                                }};
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "iste";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "nisi";
                xAmznClientToken = "itaque";
            }};            

            CreateResourceDefinitionResponse res = sdk.sdk.createResourceDefinition(req);

            if (res.createResourceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResourceDefinitionVersion

Creates a version of a resource definition that has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateResourceDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateResourceDefinitionVersionResponse;
import org.openapis.openapi.models.shared.GroupOwnerSetting;
import org.openapis.openapi.models.shared.LocalDeviceResourceData;
import org.openapis.openapi.models.shared.LocalVolumeResourceData;
import org.openapis.openapi.models.shared.PermissionEnum;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.ResourceDataContainer;
import org.openapis.openapi.models.shared.ResourceDownloadOwnerSetting;
import org.openapis.openapi.models.shared.S3MachineLearningModelResourceData;
import org.openapis.openapi.models.shared.SageMakerMachineLearningModelResourceData;
import org.openapis.openapi.models.shared.SecretsManagerSecretResourceData;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceDefinitionVersionRequest req = new CreateResourceDefinitionVersionRequest(                new CreateResourceDefinitionVersionRequestBody() {{
                                resources = new org.openapis.openapi.models.shared.Resource[]{{
                                    add(new Resource("distinctio", "maxime",                 new ResourceDataContainer() {{
                                                        localDeviceResourceData = new LocalDeviceResourceData() {{
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "quia";
                                                            }};;
                                                            sourcePath = "quia";
                                                        }};;
                                                        localVolumeResourceData = new LocalVolumeResourceData() {{
                                                            destinationPath = "nostrum";
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "omnis";
                                                            }};;
                                                            sourcePath = "libero";
                                                        }};;
                                                        s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                            destinationPath = "dicta";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("id", PermissionEnum.RW);;
                                                            s3Uri = "fugiat";
                                                        }};;
                                                        sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                            destinationPath = "officia";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("quos", PermissionEnum.RW);;
                                                            sageMakerJobArn = "sit";
                                                        }};;
                                                        secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                            arn = "iusto";
                                                            additionalStagingLabelsToDownload = new String[]{{
                                                                add("voluptates"),
                                                            }};
                                                        }};;
                                                    }};) {{
                                        id = "437000ae-6b6b-4c9b-8f75-9eac55a9741d";
                                        name = "Evelyn Bode";
                                        resourceDataContainer = new ResourceDataContainer() {{
                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "qui";
                                                }};
                                                sourcePath = "iste";
                                            }};
                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                destinationPath = "ex";
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "nemo";
                                                }};
                                                sourcePath = "soluta";
                                            }};
                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                destinationPath = "libero";
                                                ownerSetting = new ResourceDownloadOwnerSetting("odio", PermissionEnum.RO) {{
                                                    groupOwner = "rem";
                                                    groupPermission = PermissionEnum.RW;
                                                }};
                                                s3Uri = "alias";
                                            }};
                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                destinationPath = "magni";
                                                ownerSetting = new ResourceDownloadOwnerSetting("quae", PermissionEnum.RO) {{
                                                    groupOwner = "vel";
                                                    groupPermission = PermissionEnum.RO;
                                                }};
                                                sageMakerJobArn = "neque";
                                            }};
                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                arn = "exercitationem";
                                                additionalStagingLabelsToDownload = new String[]{{
                                                    add("et"),
                                                    add("ipsum"),
                                                    add("unde"),
                                                    add("nulla"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                    add(new Resource("molestiae", "delectus",                 new ResourceDataContainer() {{
                                                        localDeviceResourceData = new LocalDeviceResourceData() {{
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "cupiditate";
                                                            }};;
                                                            sourcePath = "fugit";
                                                        }};;
                                                        localVolumeResourceData = new LocalVolumeResourceData() {{
                                                            destinationPath = "numquam";
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "numquam";
                                                            }};;
                                                            sourcePath = "nesciunt";
                                                        }};;
                                                        s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                            destinationPath = "at";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("officia", PermissionEnum.RO);;
                                                            s3Uri = "optio";
                                                        }};;
                                                        sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                            destinationPath = "necessitatibus";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("corporis", PermissionEnum.RO);;
                                                            sageMakerJobArn = "expedita";
                                                        }};;
                                                        secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                            arn = "voluptatum";
                                                            additionalStagingLabelsToDownload = new String[]{{
                                                                add("minima"),
                                                                add("placeat"),
                                                                add("enim"),
                                                            }};
                                                        }};;
                                                    }};) {{
                                        id = "1084cb06-72d1-4ad8-b9ee-b9665b85efbd";
                                        name = "Rachel Powlowski";
                                        resourceDataContainer = new ResourceDataContainer() {{
                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "accusantium";
                                                }};
                                                sourcePath = "expedita";
                                            }};
                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                destinationPath = "officiis";
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "eos";
                                                }};
                                                sourcePath = "quibusdam";
                                            }};
                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                destinationPath = "odio";
                                                ownerSetting = new ResourceDownloadOwnerSetting("explicabo", PermissionEnum.RO) {{
                                                    groupOwner = "praesentium";
                                                    groupPermission = PermissionEnum.RO;
                                                }};
                                                s3Uri = "error";
                                            }};
                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                destinationPath = "earum";
                                                ownerSetting = new ResourceDownloadOwnerSetting("similique", PermissionEnum.RO) {{
                                                    groupOwner = "adipisci";
                                                    groupPermission = PermissionEnum.RW;
                                                }};
                                                sageMakerJobArn = "quidem";
                                            }};
                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                arn = "quis";
                                                additionalStagingLabelsToDownload = new String[]{{
                                                    add("unde"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                    add(new Resource("ipsa", "sint",                 new ResourceDataContainer() {{
                                                        localDeviceResourceData = new LocalDeviceResourceData() {{
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "vero";
                                                            }};;
                                                            sourcePath = "sequi";
                                                        }};;
                                                        localVolumeResourceData = new LocalVolumeResourceData() {{
                                                            destinationPath = "repudiandae";
                                                            groupOwnerSetting = new GroupOwnerSetting() {{
                                                                autoAddGroupOwner = false;
                                                                groupOwner = "cum";
                                                            }};;
                                                            sourcePath = "dicta";
                                                        }};;
                                                        s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                            destinationPath = "earum";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("veniam", PermissionEnum.RW);;
                                                            s3Uri = "dolores";
                                                        }};;
                                                        sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                            destinationPath = "nam";
                                                            ownerSetting = new ResourceDownloadOwnerSetting("dicta", PermissionEnum.RO);;
                                                            sageMakerJobArn = "necessitatibus";
                                                        }};;
                                                        secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                            arn = "nobis";
                                                            additionalStagingLabelsToDownload = new String[]{{
                                                                add("ducimus"),
                                                            }};
                                                        }};;
                                                    }};) {{
                                        id = "37c6454e-fb0b-4348-96c3-ca5acfbe2fd5";
                                        name = "Sarah Kuhlman";
                                        resourceDataContainer = new ResourceDataContainer() {{
                                            localDeviceResourceData = new LocalDeviceResourceData() {{
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "ducimus";
                                                }};
                                                sourcePath = "excepturi";
                                            }};
                                            localVolumeResourceData = new LocalVolumeResourceData() {{
                                                destinationPath = "dolores";
                                                groupOwnerSetting = new GroupOwnerSetting() {{
                                                    autoAddGroupOwner = false;
                                                    groupOwner = "error";
                                                }};
                                                sourcePath = "veritatis";
                                            }};
                                            s3MachineLearningModelResourceData = new S3MachineLearningModelResourceData() {{
                                                destinationPath = "ducimus";
                                                ownerSetting = new ResourceDownloadOwnerSetting("itaque", PermissionEnum.RW) {{
                                                    groupOwner = "voluptate";
                                                    groupPermission = PermissionEnum.RW;
                                                }};
                                                s3Uri = "optio";
                                            }};
                                            sageMakerMachineLearningModelResourceData = new SageMakerMachineLearningModelResourceData() {{
                                                destinationPath = "ex";
                                                ownerSetting = new ResourceDownloadOwnerSetting("officiis", PermissionEnum.RW) {{
                                                    groupOwner = "quaerat";
                                                    groupPermission = PermissionEnum.RO;
                                                }};
                                                sageMakerJobArn = "quidem";
                                            }};
                                            secretsManagerSecretResourceData = new SecretsManagerSecretResourceData() {{
                                                arn = "exercitationem";
                                                additionalStagingLabelsToDownload = new String[]{{
                                                    add("dolorem"),
                                                    add("modi"),
                                                }};
                                            }};
                                        }};
                                    }}),
                                }};
                            }};, "maiores") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "laboriosam";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "libero";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "occaecati";
                xAmznClientToken = "nemo";
            }};            

            CreateResourceDefinitionVersionResponse res = sdk.sdk.createResourceDefinitionVersion(req);

            if (res.createResourceDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSoftwareUpdateJob

Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequest;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequestBody;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
import org.openapis.openapi.models.operations.CreateSoftwareUpdateJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSoftwareUpdateJobRequest req = new CreateSoftwareUpdateJobRequest(                new CreateSoftwareUpdateJobRequestBody("nostrum", CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum.OTA_AGENT,                 new String[]{{
                                                add("sint"),
                                                add("enim"),
                                                add("hic"),
                                                add("animi"),
                                            }}, CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum.X8664, CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum.AMAZON_LINUX) {{
                                updateAgentLogLevel = CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum.INFO;
                            }};) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "saepe";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quos";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "assumenda";
                xAmznClientToken = "tempore";
            }};            

            CreateSoftwareUpdateJobResponse res = sdk.sdk.createSoftwareUpdateJob(req);

            if (res.createSoftwareUpdateJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscriptionDefinition

Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionRequestBody;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionRequestBodyInitialVersion;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriptionDefinitionRequest req = new CreateSubscriptionDefinitionRequest(                new CreateSubscriptionDefinitionRequestBody() {{
                                initialVersion = new CreateSubscriptionDefinitionRequestBodyInitialVersion() {{
                                    subscriptions = new org.openapis.openapi.models.shared.Subscription[]{{
                                        add(new Subscription("nisi", "voluptatibus", "quaerat", "blanditiis") {{
                                            id = "0fcb33ea-055b-4197-8d44-e2f52d82d351";
                                            source = "velit";
                                            subject = "facilis";
                                            target = "tempore";
                                        }}),
                                    }};
                                }};;
                                name = "Charlie Harvey";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("facere", "facilis");
                                    put("ipsum", "ad");
                                    put("voluptatibus", "voluptatibus");
                                    put("consequuntur", "debitis");
                                }};
                            }};) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "eos";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "iusto";
                xAmznClientToken = "est";
            }};            

            CreateSubscriptionDefinitionResponse res = sdk.sdk.createSubscriptionDefinition(req);

            if (res.createSubscriptionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscriptionDefinitionVersion

Creates a version of a subscription definition which has already been defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionVersionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionVersionRequestBody;
import org.openapis.openapi.models.operations.CreateSubscriptionDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Subscription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriptionDefinitionVersionRequest req = new CreateSubscriptionDefinitionVersionRequest(                new CreateSubscriptionDefinitionVersionRequestBody() {{
                                subscriptions = new org.openapis.openapi.models.shared.Subscription[]{{
                                    add(new Subscription("sequi", "nihil", "deleniti", "illo") {{
                                        id = "d9e7319c-177d-4525-b77b-114eeb52ff78";
                                        source = "nemo";
                                        subject = "repellat";
                                        target = "quisquam";
                                    }}),
                                    add(new Subscription("cum", "amet", "quasi", "dicta") {{
                                        id = "4d4c98e0-c2bb-489e-b75d-ad636c600503";
                                        source = "illum";
                                        subject = "praesentium";
                                        target = "quidem";
                                    }}),
                                    add(new Subscription("esse", "voluptatem", "perferendis", "rerum") {{
                                        id = "80f739ae-9e05-47eb-809e-2810331f3981";
                                        source = "at";
                                        subject = "labore";
                                        target = "minus";
                                    }}),
                                    add(new Subscription("hic", "deserunt", "delectus", "non") {{
                                        id = "607f3c93-c73b-49da-bf2c-eda7e23f2257";
                                        source = "non";
                                        subject = "ab";
                                        target = "illo";
                                    }}),
                                }};
                            }};, "distinctio") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "labore";
                xAmzDate = "numquam";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "in";
                xAmznClientToken = "explicabo";
            }};            

            CreateSubscriptionDefinitionVersionResponse res = sdk.sdk.createSubscriptionDefinitionVersion(req);

            if (res.createSubscriptionDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectorDefinition

Deletes a connector definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteConnectorDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectorDefinitionRequest req = new DeleteConnectorDefinitionRequest("rem") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "odit";
                xAmzCredential = "deleniti";
                xAmzDate = "enim";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "minima";
            }};            

            DeleteConnectorDefinitionResponse res = sdk.sdk.deleteConnectorDefinition(req);

            if (res.deleteConnectorDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCoreDefinition

Deletes a core definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCoreDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteCoreDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCoreDefinitionRequest req = new DeleteCoreDefinitionRequest("magnam") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "modi";
                xAmzCredential = "eum";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "fugiat";
            }};            

            DeleteCoreDefinitionResponse res = sdk.sdk.deleteCoreDefinition(req);

            if (res.deleteCoreDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDeviceDefinition

Deletes a device definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteDeviceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDeviceDefinitionRequest req = new DeleteDeviceDefinitionRequest("molestiae") {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "ab";
                xAmzDate = "modi";
                xAmzSecurityToken = "aut";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "eveniet";
            }};            

            DeleteDeviceDefinitionResponse res = sdk.sdk.deleteDeviceDefinition(req);

            if (res.deleteDeviceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFunctionDefinition

Deletes a Lambda function definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFunctionDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteFunctionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFunctionDefinitionRequest req = new DeleteFunctionDefinitionRequest("commodi") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "possimus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "quaerat";
            }};            

            DeleteFunctionDefinitionResponse res = sdk.sdk.deleteFunctionDefinition(req);

            if (res.deleteFunctionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

Deletes a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest("minus") {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "iusto";
                xAmzDate = "quas";
                xAmzSecurityToken = "et";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteGroupResponse res = sdk.sdk.deleteGroup(req);

            if (res.deleteGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLoggerDefinition

Deletes a logger definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLoggerDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteLoggerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLoggerDefinitionRequest req = new DeleteLoggerDefinitionRequest("fuga") {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "rem";
                xAmzCredential = "aut";
                xAmzDate = "quos";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteLoggerDefinitionResponse res = sdk.sdk.deleteLoggerDefinition(req);

            if (res.deleteLoggerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceDefinition

Deletes a resource definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteResourceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceDefinitionRequest req = new DeleteResourceDefinitionRequest("eaque") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "mollitia";
                xAmzDate = "nulla";
                xAmzSecurityToken = "officia";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DeleteResourceDefinitionResponse res = sdk.sdk.deleteResourceDefinition(req);

            if (res.deleteResourceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSubscriptionDefinition

Deletes a subscription definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionDefinitionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriptionDefinitionRequest req = new DeleteSubscriptionDefinitionRequest("eveniet") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "qui";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "harum";
            }};            

            DeleteSubscriptionDefinitionResponse res = sdk.sdk.deleteSubscriptionDefinition(req);

            if (res.deleteSubscriptionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateRoleFromGroup

Disassociates the role from a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateRoleFromGroupRequest;
import org.openapis.openapi.models.operations.DisassociateRoleFromGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateRoleFromGroupRequest req = new DisassociateRoleFromGroupRequest("beatae") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "modi";
                xAmzCredential = "optio";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "libero";
            }};            

            DisassociateRoleFromGroupResponse res = sdk.sdk.disassociateRoleFromGroup(req);

            if (res.disassociateRoleFromGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateServiceRoleFromAccount

Disassociates the service role from your account. Without a service role, deployments will not work.

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateServiceRoleFromAccountRequest req = new DisassociateServiceRoleFromAccountRequest() {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "velit";
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

## getAssociatedRole

Retrieves the role associated with a particular group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociatedRoleRequest;
import org.openapis.openapi.models.operations.GetAssociatedRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssociatedRoleRequest req = new GetAssociatedRoleRequest("repellat") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "natus";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "rerum";
            }};            

            GetAssociatedRoleResponse res = sdk.sdk.getAssociatedRole(req);

            if (res.getAssociatedRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBulkDeploymentStatus

Returns the status of a bulk deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBulkDeploymentStatusRequest;
import org.openapis.openapi.models.operations.GetBulkDeploymentStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBulkDeploymentStatusRequest req = new GetBulkDeploymentStatusRequest("voluptates") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "rem";
                xAmzCredential = "quia";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetBulkDeploymentStatusResponse res = sdk.sdk.getBulkDeploymentStatus(req);

            if (res.getBulkDeploymentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectivityInfo

Retrieves the connectivity information for a core.

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
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectivityInfoRequest req = new GetConnectivityInfoRequest("quae") {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "enim";
                xAmzSecurityToken = "optio";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "perferendis";
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

## getConnectorDefinition

Retrieves information about a connector definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorDefinitionRequest;
import org.openapis.openapi.models.operations.GetConnectorDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectorDefinitionRequest req = new GetConnectorDefinitionRequest("reiciendis") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dicta";
                xAmzDate = "quos";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "modi";
            }};            

            GetConnectorDefinitionResponse res = sdk.sdk.getConnectorDefinition(req);

            if (res.getConnectorDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectorDefinitionVersion

Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectorDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetConnectorDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectorDefinitionVersionRequest req = new GetConnectorDefinitionVersionRequest("maxime", "modi") {{
                nextToken = "consequuntur";
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "vero";
                xAmzCredential = "doloribus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "totam";
            }};            

            GetConnectorDefinitionVersionResponse res = sdk.sdk.getConnectorDefinitionVersion(req);

            if (res.getConnectorDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoreDefinition

Retrieves information about a core definition version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoreDefinitionRequest;
import org.openapis.openapi.models.operations.GetCoreDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoreDefinitionRequest req = new GetCoreDefinitionRequest("ab") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "esse";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "debitis";
            }};            

            GetCoreDefinitionResponse res = sdk.sdk.getCoreDefinition(req);

            if (res.getCoreDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCoreDefinitionVersion

Retrieves information about a core definition version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoreDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetCoreDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCoreDefinitionVersionRequest req = new GetCoreDefinitionVersionRequest("neque", "corporis") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "officia";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetCoreDefinitionVersionResponse res = sdk.sdk.getCoreDefinitionVersion(req);

            if (res.getCoreDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeploymentStatus

Returns the status of a deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeploymentStatusRequest;
import org.openapis.openapi.models.operations.GetDeploymentStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeploymentStatusRequest req = new GetDeploymentStatusRequest("maiores", "accusantium") {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "neque";
                xAmzDate = "facere";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetDeploymentStatusResponse res = sdk.sdk.getDeploymentStatus(req);

            if (res.getDeploymentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceDefinition

Retrieves information about a device definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceDefinitionRequest;
import org.openapis.openapi.models.operations.GetDeviceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceDefinitionRequest req = new GetDeviceDefinitionRequest("est") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "vitae";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "similique";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "repellat";
            }};            

            GetDeviceDefinitionResponse res = sdk.sdk.getDeviceDefinition(req);

            if (res.getDeviceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceDefinitionVersion

Retrieves information about a device definition version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetDeviceDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceDefinitionVersionRequest req = new GetDeviceDefinitionVersionRequest("doloribus", "possimus") {{
                nextToken = "unde";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "ipsam";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "optio";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "quidem";
            }};            

            GetDeviceDefinitionVersionResponse res = sdk.sdk.getDeviceDefinitionVersion(req);

            if (res.getDeviceDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionDefinition

Retrieves information about a Lambda function definition, including its creation time and latest version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionDefinitionRequest;
import org.openapis.openapi.models.operations.GetFunctionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionDefinitionRequest req = new GetFunctionDefinitionRequest("commodi") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "veniam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "officia";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "ut";
            }};            

            GetFunctionDefinitionResponse res = sdk.sdk.getFunctionDefinition(req);

            if (res.getFunctionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFunctionDefinitionVersion

Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFunctionDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetFunctionDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFunctionDefinitionVersionRequest req = new GetFunctionDefinitionVersionRequest("tenetur", "adipisci") {{
                nextToken = "libero";
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "minima";
                xAmzCredential = "ex";
                xAmzDate = "minus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "hic";
            }};            

            GetFunctionDefinitionVersionResponse res = sdk.sdk.getFunctionDefinitionVersion(req);

            if (res.getFunctionDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroup

Retrieves information about a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupRequest req = new GetGroupRequest("quisquam") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "fuga";
                xAmzDate = "minima";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            GetGroupResponse res = sdk.sdk.getGroup(req);

            if (res.getGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupCertificateAuthority

Retreives the CA associated with a group. Returns the public key of the CA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupCertificateAuthorityRequest;
import org.openapis.openapi.models.operations.GetGroupCertificateAuthorityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupCertificateAuthorityRequest req = new GetGroupCertificateAuthorityRequest("incidunt", "adipisci") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "exercitationem";
                xAmzDate = "expedita";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "sit";
            }};            

            GetGroupCertificateAuthorityResponse res = sdk.sdk.getGroupCertificateAuthority(req);

            if (res.getGroupCertificateAuthorityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupCertificateConfiguration

Retrieves the current configuration for the CA used by the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupCertificateConfigurationRequest;
import org.openapis.openapi.models.operations.GetGroupCertificateConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupCertificateConfigurationRequest req = new GetGroupCertificateConfigurationRequest("culpa") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "modi";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "itaque";
            }};            

            GetGroupCertificateConfigurationResponse res = sdk.sdk.getGroupCertificateConfiguration(req);

            if (res.getGroupCertificateConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupVersion

Retrieves information about a group version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupVersionRequest;
import org.openapis.openapi.models.operations.GetGroupVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupVersionRequest req = new GetGroupVersionRequest("quisquam", "enim") {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "officiis";
                xAmzDate = "architecto";
                xAmzSecurityToken = "alias";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "ipsa";
            }};            

            GetGroupVersionResponse res = sdk.sdk.getGroupVersion(req);

            if (res.getGroupVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoggerDefinition

Retrieves information about a logger definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoggerDefinitionRequest;
import org.openapis.openapi.models.operations.GetLoggerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoggerDefinitionRequest req = new GetLoggerDefinitionRequest("necessitatibus") {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "vel";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "architecto";
            }};            

            GetLoggerDefinitionResponse res = sdk.sdk.getLoggerDefinition(req);

            if (res.getLoggerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLoggerDefinitionVersion

Retrieves information about a logger definition version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoggerDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetLoggerDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLoggerDefinitionVersionRequest req = new GetLoggerDefinitionVersionRequest("perferendis", "veritatis") {{
                nextToken = "provident";
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "iure";
                xAmzCredential = "quibusdam";
                xAmzDate = "quod";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "velit";
            }};            

            GetLoggerDefinitionVersionResponse res = sdk.sdk.getLoggerDefinitionVersion(req);

            if (res.getLoggerDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceDefinition

Retrieves information about a resource definition, including its creation time and latest version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceDefinitionRequest;
import org.openapis.openapi.models.operations.GetResourceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceDefinitionRequest req = new GetResourceDefinitionRequest("dignissimos") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "odio";
                xAmzDate = "natus";
                xAmzSecurityToken = "provident";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetResourceDefinitionResponse res = sdk.sdk.getResourceDefinition(req);

            if (res.getResourceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceDefinitionVersion

Retrieves information about a resource definition version, including which resources are included in the version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetResourceDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceDefinitionVersionRequest req = new GetResourceDefinitionVersionRequest("quidem", "itaque") {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "modi";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetResourceDefinitionVersionResponse res = sdk.sdk.getResourceDefinitionVersion(req);

            if (res.getResourceDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceRoleForAccount

Retrieves the service role that is attached to your account.

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
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServiceRoleForAccountRequest req = new GetServiceRoleForAccountRequest() {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "recusandae";
                xAmzDate = "quod";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "autem";
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

## getSubscriptionDefinition

Retrieves information about a subscription definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionDefinitionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionDefinitionRequest req = new GetSubscriptionDefinitionRequest("nesciunt") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "illum";
                xAmzDate = "facilis";
                xAmzSecurityToken = "non";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "assumenda";
            }};            

            GetSubscriptionDefinitionResponse res = sdk.sdk.getSubscriptionDefinition(req);

            if (res.getSubscriptionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionDefinitionVersion

Retrieves information about a subscription definition version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionDefinitionVersionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionDefinitionVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionDefinitionVersionRequest req = new GetSubscriptionDefinitionVersionRequest("distinctio", "pariatur") {{
                nextToken = "ad";
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "eveniet";
                xAmzDate = "laborum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ipsam";
            }};            

            GetSubscriptionDefinitionVersionResponse res = sdk.sdk.getSubscriptionDefinitionVersion(req);

            if (res.getSubscriptionDefinitionVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThingRuntimeConfiguration

Get the runtime configuration of a thing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThingRuntimeConfigurationRequest;
import org.openapis.openapi.models.operations.GetThingRuntimeConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetThingRuntimeConfigurationRequest req = new GetThingRuntimeConfigurationRequest("suscipit") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "laborum";
                xAmzDate = "est";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "quo";
            }};            

            GetThingRuntimeConfigurationResponse res = sdk.sdk.getThingRuntimeConfiguration(req);

            if (res.getThingRuntimeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBulkDeploymentDetailedReports

Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBulkDeploymentDetailedReportsRequest;
import org.openapis.openapi.models.operations.ListBulkDeploymentDetailedReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBulkDeploymentDetailedReportsRequest req = new ListBulkDeploymentDetailedReportsRequest("fugit") {{
                maxResults = "aliquid";
                nextToken = "magnam";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "hic";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "nulla";
            }};            

            ListBulkDeploymentDetailedReportsResponse res = sdk.sdk.listBulkDeploymentDetailedReports(req);

            if (res.listBulkDeploymentDetailedReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBulkDeployments

Returns a list of bulk deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBulkDeploymentsRequest;
import org.openapis.openapi.models.operations.ListBulkDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBulkDeploymentsRequest req = new ListBulkDeploymentsRequest() {{
                maxResults = "mollitia";
                nextToken = "magnam";
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "corrupti";
                xAmzDate = "fuga";
                xAmzSecurityToken = "facere";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "quasi";
            }};            

            ListBulkDeploymentsResponse res = sdk.sdk.listBulkDeployments(req);

            if (res.listBulkDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectorDefinitionVersions

Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListConnectorDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorDefinitionVersionsRequest req = new ListConnectorDefinitionVersionsRequest("quod") {{
                maxResults = "laboriosam";
                nextToken = "doloremque";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "facere";
                xAmzCredential = "necessitatibus";
                xAmzDate = "maxime";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "architecto";
            }};            

            ListConnectorDefinitionVersionsResponse res = sdk.sdk.listConnectorDefinitionVersions(req);

            if (res.listConnectorDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectorDefinitions

Retrieves a list of connector definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorDefinitionsRequest;
import org.openapis.openapi.models.operations.ListConnectorDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorDefinitionsRequest req = new ListConnectorDefinitionsRequest() {{
                maxResults = "porro";
                nextToken = "blanditiis";
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "magni";
                xAmzCredential = "officiis";
                xAmzDate = "sed";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListConnectorDefinitionsResponse res = sdk.sdk.listConnectorDefinitions(req);

            if (res.listConnectorDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCoreDefinitionVersions

Lists the versions of a core definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCoreDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListCoreDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCoreDefinitionVersionsRequest req = new ListCoreDefinitionVersionsRequest("a") {{
                maxResults = "maiores";
                nextToken = "laudantium";
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "alias";
                xAmzCredential = "asperiores";
                xAmzDate = "rem";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "earum";
            }};            

            ListCoreDefinitionVersionsResponse res = sdk.sdk.listCoreDefinitionVersions(req);

            if (res.listCoreDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCoreDefinitions

Retrieves a list of core definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCoreDefinitionsRequest;
import org.openapis.openapi.models.operations.ListCoreDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCoreDefinitionsRequest req = new ListCoreDefinitionsRequest() {{
                maxResults = "velit";
                nextToken = "eius";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "in";
                xAmzCredential = "eligendi";
                xAmzDate = "quasi";
                xAmzSecurityToken = "neque";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListCoreDefinitionsResponse res = sdk.sdk.listCoreDefinitions(req);

            if (res.listCoreDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeployments

Returns a history of deployments for the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeploymentsRequest;
import org.openapis.openapi.models.operations.ListDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeploymentsRequest req = new ListDeploymentsRequest("qui") {{
                maxResults = "impedit";
                nextToken = "beatae";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "odit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "error";
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

## listDeviceDefinitionVersions

Lists the versions of a device definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListDeviceDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceDefinitionVersionsRequest req = new ListDeviceDefinitionVersionsRequest("accusantium") {{
                maxResults = "id";
                nextToken = "laboriosam";
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "quas";
                xAmzCredential = "veritatis";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quae";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "incidunt";
            }};            

            ListDeviceDefinitionVersionsResponse res = sdk.sdk.listDeviceDefinitionVersions(req);

            if (res.listDeviceDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceDefinitions

Retrieves a list of device definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceDefinitionsRequest;
import org.openapis.openapi.models.operations.ListDeviceDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceDefinitionsRequest req = new ListDeviceDefinitionsRequest() {{
                maxResults = "magni";
                nextToken = "deserunt";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "sed";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ListDeviceDefinitionsResponse res = sdk.sdk.listDeviceDefinitions(req);

            if (res.listDeviceDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionDefinitionVersions

Lists the versions of a Lambda function definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListFunctionDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionDefinitionVersionsRequest req = new ListFunctionDefinitionVersionsRequest("excepturi") {{
                maxResults = "maiores";
                nextToken = "laudantium";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "nemo";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListFunctionDefinitionVersionsResponse res = sdk.sdk.listFunctionDefinitionVersions(req);

            if (res.listFunctionDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFunctionDefinitions

Retrieves a list of Lambda function definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFunctionDefinitionsRequest;
import org.openapis.openapi.models.operations.ListFunctionDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFunctionDefinitionsRequest req = new ListFunctionDefinitionsRequest() {{
                maxResults = "molestiae";
                nextToken = "aliquid";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "a";
                xAmzCredential = "nobis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "minus";
            }};            

            ListFunctionDefinitionsResponse res = sdk.sdk.listFunctionDefinitions(req);

            if (res.listFunctionDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupCertificateAuthorities

Retrieves the current CAs for a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupCertificateAuthoritiesRequest;
import org.openapis.openapi.models.operations.ListGroupCertificateAuthoritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupCertificateAuthoritiesRequest req = new ListGroupCertificateAuthoritiesRequest("eveniet") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "quidem";
                xAmzDate = "modi";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "eius";
            }};            

            ListGroupCertificateAuthoritiesResponse res = sdk.sdk.listGroupCertificateAuthorities(req);

            if (res.listGroupCertificateAuthoritiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupVersions

Lists the versions of a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupVersionsRequest;
import org.openapis.openapi.models.operations.ListGroupVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupVersionsRequest req = new ListGroupVersionsRequest("eligendi") {{
                maxResults = "asperiores";
                nextToken = "esse";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "sint";
                xAmzCredential = "repellat";
                xAmzDate = "a";
                xAmzSecurityToken = "animi";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "itaque";
            }};            

            ListGroupVersionsResponse res = sdk.sdk.listGroupVersions(req);

            if (res.listGroupVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroups

Retrieves a list of groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsRequest;
import org.openapis.openapi.models.operations.ListGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupsRequest req = new ListGroupsRequest() {{
                maxResults = "deserunt";
                nextToken = "corporis";
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "enim";
                xAmzDate = "officia";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ListGroupsResponse res = sdk.sdk.listGroups(req);

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLoggerDefinitionVersions

Lists the versions of a logger definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLoggerDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListLoggerDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLoggerDefinitionVersionsRequest req = new ListLoggerDefinitionVersionsRequest("officia") {{
                maxResults = "impedit";
                nextToken = "quasi";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "quisquam";
                xAmzDate = "eos";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minus";
            }};            

            ListLoggerDefinitionVersionsResponse res = sdk.sdk.listLoggerDefinitionVersions(req);

            if (res.listLoggerDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLoggerDefinitions

Retrieves a list of logger definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLoggerDefinitionsRequest;
import org.openapis.openapi.models.operations.ListLoggerDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLoggerDefinitionsRequest req = new ListLoggerDefinitionsRequest() {{
                maxResults = "magnam";
                nextToken = "reprehenderit";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "quos";
                xAmzCredential = "corrupti";
                xAmzDate = "amet";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "laborum";
            }};            

            ListLoggerDefinitionsResponse res = sdk.sdk.listLoggerDefinitions(req);

            if (res.listLoggerDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceDefinitionVersions

Lists the versions of a resource definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListResourceDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceDefinitionVersionsRequest req = new ListResourceDefinitionVersionsRequest("perferendis") {{
                maxResults = "necessitatibus";
                nextToken = "architecto";
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "sunt";
                xAmzDate = "maiores";
                xAmzSecurityToken = "neque";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "earum";
            }};            

            ListResourceDefinitionVersionsResponse res = sdk.sdk.listResourceDefinitionVersions(req);

            if (res.listResourceDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceDefinitions

Retrieves a list of resource definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceDefinitionsRequest;
import org.openapis.openapi.models.operations.ListResourceDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceDefinitionsRequest req = new ListResourceDefinitionsRequest() {{
                maxResults = "ipsam";
                nextToken = "eaque";
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "nihil";
                xAmzDate = "ad";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quis";
            }};            

            ListResourceDefinitionsResponse res = sdk.sdk.listResourceDefinitions(req);

            if (res.listResourceDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscriptionDefinitionVersions

Lists the versions of a subscription definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscriptionDefinitionVersionsRequest;
import org.openapis.openapi.models.operations.ListSubscriptionDefinitionVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSubscriptionDefinitionVersionsRequest req = new ListSubscriptionDefinitionVersionsRequest("nemo") {{
                maxResults = "suscipit";
                nextToken = "pariatur";
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "repellendus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "id";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "sed";
            }};            

            ListSubscriptionDefinitionVersionsResponse res = sdk.sdk.listSubscriptionDefinitionVersions(req);

            if (res.listSubscriptionDefinitionVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSubscriptionDefinitions

Retrieves a list of subscription definitions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSubscriptionDefinitionsRequest;
import org.openapis.openapi.models.operations.ListSubscriptionDefinitionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSubscriptionDefinitionsRequest req = new ListSubscriptionDefinitionsRequest() {{
                maxResults = "repellat";
                nextToken = "repudiandae";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "pariatur";
                xAmzDate = "harum";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "iure";
            }};            

            ListSubscriptionDefinitionsResponse res = sdk.sdk.listSubscriptionDefinitions(req);

            if (res.listSubscriptionDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves a list of resource tags for a resource arn.

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
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("minus") {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "velit";
                xAmzDate = "earum";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "error";
                xAmzSignedHeaders = "non";
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

## resetDeployments

Resets a group's deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetDeploymentsRequest;
import org.openapis.openapi.models.operations.ResetDeploymentsRequestBody;
import org.openapis.openapi.models.operations.ResetDeploymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetDeploymentsRequest req = new ResetDeploymentsRequest("mollitia",                 new ResetDeploymentsRequestBody() {{
                                force = false;
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "harum";
                xAmzCredential = "cumque";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "eaque";
                xAmznClientToken = "deserunt";
            }};            

            ResetDeploymentsResponse res = sdk.sdk.resetDeployments(req);

            if (res.resetDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startBulkDeployment

Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartBulkDeploymentRequest;
import org.openapis.openapi.models.operations.StartBulkDeploymentRequestBody;
import org.openapis.openapi.models.operations.StartBulkDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartBulkDeploymentRequest req = new StartBulkDeploymentRequest(                new StartBulkDeploymentRequestBody("excepturi", "magni") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("possimus", "dolor");
                                    put("rerum", "sed");
                                }};
                            }};) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "optio";
                xAmzCredential = "delectus";
                xAmzDate = "minus";
                xAmzSecurityToken = "quo";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "asperiores";
                xAmznClientToken = "voluptatum";
            }};            

            StartBulkDeploymentResponse res = sdk.sdk.startBulkDeployment(req);

            if (res.startBulkDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopBulkDeployment

Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopBulkDeploymentRequest;
import org.openapis.openapi.models.operations.StopBulkDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopBulkDeploymentRequest req = new StopBulkDeploymentRequest("corporis") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "illo";
                xAmzCredential = "aut";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "at";
                xAmzSignedHeaders = "possimus";
            }};            

            StopBulkDeploymentResponse res = sdk.sdk.stopBulkDeployment(req);

            if (res.stopBulkDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.

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
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody() {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("vel", "sapiente");
                                    put("mollitia", "quae");
                                    put("quos", "aperiam");
                                    put("non", "voluptates");
                                }};
                            }};, "ad") {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "quas";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "aliquid";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Remove resource tags from a Greengrass Resource.

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
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("est",                 new String[]{{
                                add("aliquid"),
                            }}) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "rem";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "recusandae";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectivityInfo

Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.

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
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectivityInfoRequest req = new UpdateConnectivityInfoRequest(                new UpdateConnectivityInfoRequestBody() {{
                                connectivityInfo = new org.openapis.openapi.models.shared.ConnectivityInfo[]{{
                                    add(new ConnectivityInfo() {{
                                        hostAddress = "numquam";
                                        id = "380b1f6b-8ca2-475a-a0a0-4c495cc69917";
                                        metadata = "inventore";
                                        portNumber = 725316L;
                                    }}),
                                    add(new ConnectivityInfo() {{
                                        hostAddress = "ipsam";
                                        id = "1c1bdb1c-f4b8-488e-bdfc-4ccca99bc7fc";
                                        metadata = "accusantium";
                                        portNumber = 743531L;
                                    }}),
                                    add(new ConnectivityInfo() {{
                                        hostAddress = "fugit";
                                        id = "dce10873-e42b-4006-9678-878ba8581a58";
                                        metadata = "magni";
                                        portNumber = 62130L;
                                    }}),
                                }};
                            }};, "quas") {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "enim";
                xAmzCredential = "labore";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "officia";
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

## updateConnectorDefinition

Updates a connector definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectorDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateConnectorDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateConnectorDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectorDefinitionRequest req = new UpdateConnectorDefinitionRequest("cumque",                 new UpdateConnectorDefinitionRequestBody() {{
                                name = "Jon Yost";
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "quis";
                xAmzDate = "enim";
                xAmzSecurityToken = "eum";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "illum";
            }};            

            UpdateConnectorDefinitionResponse res = sdk.sdk.updateConnectorDefinition(req);

            if (res.updateConnectorDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCoreDefinition

Updates a core definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCoreDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateCoreDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateCoreDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCoreDefinitionRequest req = new UpdateCoreDefinitionRequest("sit",                 new UpdateCoreDefinitionRequestBody() {{
                                name = "Bethany Zboncak";
                            }};) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "fugit";
                xAmzDate = "sit";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "sed";
            }};            

            UpdateCoreDefinitionResponse res = sdk.sdk.updateCoreDefinition(req);

            if (res.updateCoreDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceDefinition

Updates a device definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateDeviceDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceDefinitionRequest req = new UpdateDeviceDefinitionRequest("sunt",                 new UpdateDeviceDefinitionRequestBody() {{
                                name = "Lucia Pacocha";
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "impedit";
                xAmzDate = "eius";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "at";
            }};            

            UpdateDeviceDefinitionResponse res = sdk.sdk.updateDeviceDefinition(req);

            if (res.updateDeviceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFunctionDefinition

Updates a Lambda function definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFunctionDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateFunctionDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateFunctionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFunctionDefinitionRequest req = new UpdateFunctionDefinitionRequest("repellat",                 new UpdateFunctionDefinitionRequestBody() {{
                                name = "Stephanie Dickinson";
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "dolorem";
                xAmzDate = "architecto";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateFunctionDefinitionResponse res = sdk.sdk.updateFunctionDefinition(req);

            if (res.updateFunctionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGroup

Updates a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupRequest;
import org.openapis.openapi.models.operations.UpdateGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGroupRequest req = new UpdateGroupRequest("illo",                 new UpdateGroupRequestBody() {{
                                name = "Dixie Funk";
                            }};) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quae";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            UpdateGroupResponse res = sdk.sdk.updateGroup(req);

            if (res.updateGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGroupCertificateConfiguration

Updates the Certificate expiry time for a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupCertificateConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateGroupCertificateConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateGroupCertificateConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGroupCertificateConfigurationRequest req = new UpdateGroupCertificateConfigurationRequest("sed",                 new UpdateGroupCertificateConfigurationRequestBody() {{
                                certificateExpiryInMilliseconds = "beatae";
                            }};) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "ea";
                xAmzCredential = "animi";
                xAmzDate = "dolore";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "esse";
            }};            

            UpdateGroupCertificateConfigurationResponse res = sdk.sdk.updateGroupCertificateConfiguration(req);

            if (res.updateGroupCertificateConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLoggerDefinition

Updates a logger definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLoggerDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateLoggerDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateLoggerDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLoggerDefinitionRequest req = new UpdateLoggerDefinitionRequest("laudantium",                 new UpdateLoggerDefinitionRequestBody() {{
                                name = "Laverne Weber";
                            }};) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "itaque";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateLoggerDefinitionResponse res = sdk.sdk.updateLoggerDefinition(req);

            if (res.updateLoggerDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceDefinition

Updates a resource definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateResourceDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceDefinitionRequest req = new UpdateResourceDefinitionRequest(                new UpdateResourceDefinitionRequestBody() {{
                                name = "Flora Erdman";
                            }};, "architecto") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "dolor";
                xAmzDate = "expedita";
                xAmzSecurityToken = "libero";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "illo";
            }};            

            UpdateResourceDefinitionResponse res = sdk.sdk.updateResourceDefinition(req);

            if (res.updateResourceDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionDefinition

Updates a subscription definition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionDefinitionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionDefinitionRequestBody;
import org.openapis.openapi.models.operations.UpdateSubscriptionDefinitionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionDefinitionRequest req = new UpdateSubscriptionDefinitionRequest(                new UpdateSubscriptionDefinitionRequestBody() {{
                                name = "Gustavo Mayer";
                            }};, "accusamus") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "laudantium";
                xAmzDate = "tempora";
                xAmzSecurityToken = "quae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "illum";
            }};            

            UpdateSubscriptionDefinitionResponse res = sdk.sdk.updateSubscriptionDefinition(req);

            if (res.updateSubscriptionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateThingRuntimeConfiguration

Updates the runtime configuration of a thing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateThingRuntimeConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateThingRuntimeConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
import org.openapis.openapi.models.operations.UpdateThingRuntimeConfigurationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TelemetryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateThingRuntimeConfigurationRequest req = new UpdateThingRuntimeConfigurationRequest(                new UpdateThingRuntimeConfigurationRequestBody() {{
                                telemetryConfiguration = new UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration() {{
                                    telemetry = TelemetryEnum.OFF;
                                }};;
                            }};, "deleniti") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "earum";
                xAmzCredential = "architecto";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "sequi";
            }};            

            UpdateThingRuntimeConfigurationResponse res = sdk.sdk.updateThingRuntimeConfiguration(req);

            if (res.updateThingRuntimeConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
