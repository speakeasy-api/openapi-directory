# SDK

## Overview

AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.

Amazon Web Services documentation
<https://docs.aws.amazon.com/greengrass/>
### Available Operations

* [AssociateRoleToGroup](#associateroletogroup) - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* [AssociateServiceRoleToAccount](#associateserviceroletoaccount) - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* [CreateConnectorDefinition](#createconnectordefinition) - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* [CreateConnectorDefinitionVersion](#createconnectordefinitionversion) - Creates a version of a connector definition which has already been defined.
* [CreateCoreDefinition](#createcoredefinition) - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* [CreateCoreDefinitionVersion](#createcoredefinitionversion) - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* [CreateDeployment](#createdeployment) - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* [CreateDeviceDefinition](#createdevicedefinition) - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* [CreateDeviceDefinitionVersion](#createdevicedefinitionversion) - Creates a version of a device definition that has already been defined.
* [CreateFunctionDefinition](#createfunctiondefinition) - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* [CreateFunctionDefinitionVersion](#createfunctiondefinitionversion) - Creates a version of a Lambda function definition that has already been defined.
* [CreateGroup](#creategroup) - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* [CreateGroupCertificateAuthority](#creategroupcertificateauthority) - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* [CreateGroupVersion](#creategroupversion) - Creates a version of a group which has already been defined.
* [CreateLoggerDefinition](#createloggerdefinition) - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* [CreateLoggerDefinitionVersion](#createloggerdefinitionversion) - Creates a version of a logger definition that has already been defined.
* [CreateResourceDefinition](#createresourcedefinition) - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* [CreateResourceDefinitionVersion](#createresourcedefinitionversion) - Creates a version of a resource definition that has already been defined.
* [CreateSoftwareUpdateJob](#createsoftwareupdatejob) - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* [CreateSubscriptionDefinition](#createsubscriptiondefinition) - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* [CreateSubscriptionDefinitionVersion](#createsubscriptiondefinitionversion) - Creates a version of a subscription definition which has already been defined.
* [DeleteConnectorDefinition](#deleteconnectordefinition) - Deletes a connector definition.
* [DeleteCoreDefinition](#deletecoredefinition) - Deletes a core definition.
* [DeleteDeviceDefinition](#deletedevicedefinition) - Deletes a device definition.
* [DeleteFunctionDefinition](#deletefunctiondefinition) - Deletes a Lambda function definition.
* [DeleteGroup](#deletegroup) - Deletes a group.
* [DeleteLoggerDefinition](#deleteloggerdefinition) - Deletes a logger definition.
* [DeleteResourceDefinition](#deleteresourcedefinition) - Deletes a resource definition.
* [DeleteSubscriptionDefinition](#deletesubscriptiondefinition) - Deletes a subscription definition.
* [DisassociateRoleFromGroup](#disassociaterolefromgroup) - Disassociates the role from a group.
* [DisassociateServiceRoleFromAccount](#disassociateservicerolefromaccount) - Disassociates the service role from your account. Without a service role, deployments will not work.
* [GetAssociatedRole](#getassociatedrole) - Retrieves the role associated with a particular group.
* [GetBulkDeploymentStatus](#getbulkdeploymentstatus) - Returns the status of a bulk deployment.
* [GetConnectivityInfo](#getconnectivityinfo) - Retrieves the connectivity information for a core.
* [GetConnectorDefinition](#getconnectordefinition) - Retrieves information about a connector definition.
* [GetConnectorDefinitionVersion](#getconnectordefinitionversion) - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* [GetCoreDefinition](#getcoredefinition) - Retrieves information about a core definition version.
* [GetCoreDefinitionVersion](#getcoredefinitionversion) - Retrieves information about a core definition version.
* [GetDeploymentStatus](#getdeploymentstatus) - Returns the status of a deployment.
* [GetDeviceDefinition](#getdevicedefinition) - Retrieves information about a device definition.
* [GetDeviceDefinitionVersion](#getdevicedefinitionversion) - Retrieves information about a device definition version.
* [GetFunctionDefinition](#getfunctiondefinition) - Retrieves information about a Lambda function definition, including its creation time and latest version.
* [GetFunctionDefinitionVersion](#getfunctiondefinitionversion) - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* [GetGroup](#getgroup) - Retrieves information about a group.
* [GetGroupCertificateAuthority](#getgroupcertificateauthority) - Retreives the CA associated with a group. Returns the public key of the CA.
* [GetGroupCertificateConfiguration](#getgroupcertificateconfiguration) - Retrieves the current configuration for the CA used by the group.
* [GetGroupVersion](#getgroupversion) - Retrieves information about a group version.
* [GetLoggerDefinition](#getloggerdefinition) - Retrieves information about a logger definition.
* [GetLoggerDefinitionVersion](#getloggerdefinitionversion) - Retrieves information about a logger definition version.
* [GetResourceDefinition](#getresourcedefinition) - Retrieves information about a resource definition, including its creation time and latest version.
* [GetResourceDefinitionVersion](#getresourcedefinitionversion) - Retrieves information about a resource definition version, including which resources are included in the version.
* [GetServiceRoleForAccount](#getserviceroleforaccount) - Retrieves the service role that is attached to your account.
* [GetSubscriptionDefinition](#getsubscriptiondefinition) - Retrieves information about a subscription definition.
* [GetSubscriptionDefinitionVersion](#getsubscriptiondefinitionversion) - Retrieves information about a subscription definition version.
* [GetThingRuntimeConfiguration](#getthingruntimeconfiguration) - Get the runtime configuration of a thing.
* [ListBulkDeploymentDetailedReports](#listbulkdeploymentdetailedreports) - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* [ListBulkDeployments](#listbulkdeployments) - Returns a list of bulk deployments.
* [ListConnectorDefinitionVersions](#listconnectordefinitionversions) - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* [ListConnectorDefinitions](#listconnectordefinitions) - Retrieves a list of connector definitions.
* [ListCoreDefinitionVersions](#listcoredefinitionversions) - Lists the versions of a core definition.
* [ListCoreDefinitions](#listcoredefinitions) - Retrieves a list of core definitions.
* [ListDeployments](#listdeployments) - Returns a history of deployments for the group.
* [ListDeviceDefinitionVersions](#listdevicedefinitionversions) - Lists the versions of a device definition.
* [ListDeviceDefinitions](#listdevicedefinitions) - Retrieves a list of device definitions.
* [ListFunctionDefinitionVersions](#listfunctiondefinitionversions) - Lists the versions of a Lambda function definition.
* [ListFunctionDefinitions](#listfunctiondefinitions) - Retrieves a list of Lambda function definitions.
* [ListGroupCertificateAuthorities](#listgroupcertificateauthorities) - Retrieves the current CAs for a group.
* [ListGroupVersions](#listgroupversions) - Lists the versions of a group.
* [ListGroups](#listgroups) - Retrieves a list of groups.
* [ListLoggerDefinitionVersions](#listloggerdefinitionversions) - Lists the versions of a logger definition.
* [ListLoggerDefinitions](#listloggerdefinitions) - Retrieves a list of logger definitions.
* [ListResourceDefinitionVersions](#listresourcedefinitionversions) - Lists the versions of a resource definition.
* [ListResourceDefinitions](#listresourcedefinitions) - Retrieves a list of resource definitions.
* [ListSubscriptionDefinitionVersions](#listsubscriptiondefinitionversions) - Lists the versions of a subscription definition.
* [ListSubscriptionDefinitions](#listsubscriptiondefinitions) - Retrieves a list of subscription definitions.
* [ListTagsForResource](#listtagsforresource) - Retrieves a list of resource tags for a resource arn.
* [ResetDeployments](#resetdeployments) - Resets a group's deployments.
* [StartBulkDeployment](#startbulkdeployment) - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* [StopBulkDeployment](#stopbulkdeployment) - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* [TagResource](#tagresource) - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* [UntagResource](#untagresource) - Remove resource tags from a Greengrass Resource.
* [UpdateConnectivityInfo](#updateconnectivityinfo) - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* [UpdateConnectorDefinition](#updateconnectordefinition) - Updates a connector definition.
* [UpdateCoreDefinition](#updatecoredefinition) - Updates a core definition.
* [UpdateDeviceDefinition](#updatedevicedefinition) - Updates a device definition.
* [UpdateFunctionDefinition](#updatefunctiondefinition) - Updates a Lambda function definition.
* [UpdateGroup](#updategroup) - Updates a group.
* [UpdateGroupCertificateConfiguration](#updategroupcertificateconfiguration) - Updates the Certificate expiry time for a group.
* [UpdateLoggerDefinition](#updateloggerdefinition) - Updates a logger definition.
* [UpdateResourceDefinition](#updateresourcedefinition) - Updates a resource definition.
* [UpdateSubscriptionDefinition](#updatesubscriptiondefinition) - Updates a subscription definition.
* [UpdateThingRuntimeConfiguration](#updatethingruntimeconfiguration) - Updates the runtime configuration of a thing.

## AssociateRoleToGroup

Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.

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
    res, err := s.SDK.AssociateRoleToGroup(ctx, operations.AssociateRoleToGroupRequest{
        GroupID: "error",
        RequestBody: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRoleToGroupResponse != nil {
        // handle response
    }
}
```

## AssociateServiceRoleToAccount

Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.

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
            RoleArn: "suscipit",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateServiceRoleToAccountResponse != nil {
        // handle response
    }
}
```

## CreateConnectorDefinition

Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.

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
    res, err := s.SDK.CreateConnectorDefinition(ctx, operations.CreateConnectorDefinitionRequest{
        RequestBody: operations.CreateConnectorDefinitionRequestBody{
            InitialVersion: &operations.CreateConnectorDefinitionRequestBodyInitialVersion{
                Connectors: []shared.Connector{
                    shared.Connector{
                        ConnectorArn: "temporibus",
                        ID: "151a05df-c2dd-4f7c-878c-a1ba928fc816",
                        Parameters: map[string]string{
                            "modi": "qui",
                            "impedit": "cum",
                        },
                    },
                    shared.Connector{
                        ConnectorArn: "esse",
                        ID: "39205929-396f-4ea7-996e-b10faaa2352c",
                        Parameters: map[string]string{
                            "omnis": "nemo",
                            "minima": "excepturi",
                        },
                    },
                    shared.Connector{
                        ConnectorArn: "accusantium",
                        ID: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
                        Parameters: map[string]string{
                            "quasi": "error",
                        },
                    },
                    shared.Connector{
                        ConnectorArn: "temporibus",
                        ID: "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
                        Parameters: map[string]string{
                            "pariatur": "modi",
                            "praesentium": "rem",
                            "voluptates": "quasi",
                        },
                    },
                },
            },
            Name: sdk.String("Kirk Boehm"),
            Tags: map[string]string{
                "consequatur": "est",
                "quibusdam": "explicabo",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmznClientToken: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateConnectorDefinitionVersion

Creates a version of a connector definition which has already been defined.

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
    res, err := s.SDK.CreateConnectorDefinitionVersion(ctx, operations.CreateConnectorDefinitionVersionRequest{
        ConnectorDefinitionID: "quos",
        RequestBody: operations.CreateConnectorDefinitionVersionRequestBody{
            Connectors: []shared.Connector{
                shared.Connector{
                    ConnectorArn: "magni",
                    ID: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
                    Parameters: map[string]string{
                        "facere": "ea",
                        "aliquid": "laborum",
                        "accusamus": "non",
                        "occaecati": "enim",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmznClientToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateCoreDefinition

Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.

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
    res, err := s.SDK.CreateCoreDefinition(ctx, operations.CreateCoreDefinitionRequest{
        RequestBody: operations.CreateCoreDefinitionRequestBody{
            InitialVersion: &operations.CreateCoreDefinitionRequestBodyInitialVersion{
                Cores: []shared.Core{
                    shared.Core{
                        CertificateArn: "amet",
                        ID: "a6699707-4ba4-4469-b6e2-141959890afa",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "ad",
                    },
                    shared.Core{
                        CertificateArn: "eum",
                        ID: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "illum",
                    },
                    shared.Core{
                        CertificateArn: "pariatur",
                        ID: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "quis",
                    },
                    shared.Core{
                        CertificateArn: "nesciunt",
                        ID: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "libero",
                    },
                },
            },
            Name: sdk.String("Alex Luettgen"),
            Tags: map[string]string{
                "dolor": "qui",
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmznClientToken: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCoreDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateCoreDefinitionVersion

Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.

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
    res, err := s.SDK.CreateCoreDefinitionVersion(ctx, operations.CreateCoreDefinitionVersionRequest{
        CoreDefinitionID: "dolorum",
        RequestBody: operations.CreateCoreDefinitionVersionRequestBody{
            Cores: []shared.Core{
                shared.Core{
                    CertificateArn: "veritatis",
                    ID: "00674ebf-6928-40d1-ba77-a89ebf737ae4",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "aspernatur",
                },
                shared.Core{
                    CertificateArn: "perferendis",
                    ID: "3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "numquam",
                },
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmznClientToken: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCoreDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateDeployment

Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.

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
    res, err := s.SDK.CreateDeployment(ctx, operations.CreateDeploymentRequest{
        GroupID: "sed",
        RequestBody: operations.CreateDeploymentRequestBody{
            DeploymentID: sdk.String("vel"),
            DeploymentType: operations.CreateDeploymentRequestBodyDeploymentTypeEnumResetDeployment,
            GroupVersionID: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmznClientToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeploymentResponse != nil {
        // handle response
    }
}
```

## CreateDeviceDefinition

Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.

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
    res, err := s.SDK.CreateDeviceDefinition(ctx, operations.CreateDeviceDefinitionRequest{
        RequestBody: operations.CreateDeviceDefinitionRequestBody{
            InitialVersion: &operations.CreateDeviceDefinitionRequestBodyInitialVersion{
                Devices: []shared.Device{
                    shared.Device{
                        CertificateArn: "dicta",
                        ID: "a8422bb6-79d2-4322-b15b-f0cbb1e31b8b",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "cupiditate",
                    },
                    shared.Device{
                        CertificateArn: "aperiam",
                        ID: "f3443a11-08e0-4adc-b4b9-21879fce953f",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "voluptate",
                    },
                    shared.Device{
                        CertificateArn: "consectetur",
                        ID: "ef7fbc7a-bd74-4dd3-9c0f-5d2cff7c70a4",
                        SyncShadow: sdk.Bool(false),
                        ThingArn: "ipsam",
                    },
                },
            },
            Name: sdk.String("Judy Keebler"),
            Tags: map[string]string{
                "ex": "laudantium",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmznClientToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateDeviceDefinitionVersion

Creates a version of a device definition that has already been defined.

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
    res, err := s.SDK.CreateDeviceDefinitionVersion(ctx, operations.CreateDeviceDefinitionVersionRequest{
        DeviceDefinitionID: "nostrum",
        RequestBody: operations.CreateDeviceDefinitionVersionRequestBody{
            Devices: []shared.Device{
                shared.Device{
                    CertificateArn: "quisquam",
                    ID: "e6c55614-6c3e-4250-bb00-8c42e141aac3",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "eum",
                },
                shared.Device{
                    CertificateArn: "autem",
                    ID: "c8dd6b14-4290-4747-8778-a7bd466d28c1",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "ipsa",
                },
                shared.Device{
                    CertificateArn: "id",
                    ID: "b3cdca42-5190-44e5-a3c7-e0bc7178e479",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "commodi",
                },
                shared.Device{
                    CertificateArn: "sapiente",
                    ID: "2a70c688-282a-4a48-a562-f222e9817ee1",
                    SyncShadow: sdk.Bool(false),
                    ThingArn: "esse",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmznClientToken: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateFunctionDefinition

Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.

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
    res, err := s.SDK.CreateFunctionDefinition(ctx, operations.CreateFunctionDefinitionRequest{
        RequestBody: operations.CreateFunctionDefinitionRequestBody{
            InitialVersion: &operations.CreateFunctionDefinitionRequestBodyInitialVersion{
                DefaultConfig: &shared.FunctionDefaultConfig{
                    Execution: &shared.FunctionDefaultExecutionConfig{
                        IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                        RunAs: &shared.FunctionRunAsConfig{
                            Gid: sdk.Int64(699622),
                            UID: sdk.Int64(580197),
                        },
                    },
                },
                Functions: []shared.Function{
                    shared.Function{
                        FunctionArn: sdk.String("distinctio"),
                        FunctionConfiguration: &shared.FunctionConfiguration{
                            EncodingType: shared.EncodingTypeEnumJSON.ToPointer(),
                            Environment: &shared.FunctionConfigurationEnvironment{
                                AccessSysfs: sdk.Bool(false),
                                Execution: &shared.FunctionExecutionConfig{
                                    IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                                    RunAs: &shared.FunctionRunAsConfig{
                                        Gid: sdk.Int64(636061),
                                        UID: sdk.Int64(731398),
                                    },
                                },
                                ResourceAccessPolicies: []shared.ResourceAccessPolicy{
                                    shared.ResourceAccessPolicy{
                                        Permission: shared.PermissionEnumRw.ToPointer(),
                                        ResourceID: "consequuntur",
                                    },
                                },
                                Variables: map[string]string{
                                    "minus": "quaerat",
                                },
                            },
                            ExecArgs: sdk.String("sapiente"),
                            Executable: sdk.String("consectetur"),
                            FunctionRuntimeOverride: sdk.String("esse"),
                            MemorySize: sdk.Int64(503427),
                            Pinned: sdk.Bool(false),
                            Timeout: sdk.Int64(590984),
                        },
                        ID: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
                    },
                    shared.Function{
                        FunctionArn: sdk.String("sapiente"),
                        FunctionConfiguration: &shared.FunctionConfiguration{
                            EncodingType: shared.EncodingTypeEnumBinary.ToPointer(),
                            Environment: &shared.FunctionConfigurationEnvironment{
                                AccessSysfs: sdk.Bool(false),
                                Execution: &shared.FunctionExecutionConfig{
                                    IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                                    RunAs: &shared.FunctionRunAsConfig{
                                        Gid: sdk.Int64(443879),
                                        UID: sdk.Int64(356707),
                                    },
                                },
                                ResourceAccessPolicies: []shared.ResourceAccessPolicy{
                                    shared.ResourceAccessPolicy{
                                        Permission: shared.PermissionEnumRo.ToPointer(),
                                        ResourceID: "voluptatum",
                                    },
                                    shared.ResourceAccessPolicy{
                                        Permission: shared.PermissionEnumRo.ToPointer(),
                                        ResourceID: "quibusdam",
                                    },
                                },
                                Variables: map[string]string{
                                    "deleniti": "itaque",
                                    "dolorum": "architecto",
                                },
                            },
                            ExecArgs: sdk.String("omnis"),
                            Executable: sdk.String("tenetur"),
                            FunctionRuntimeOverride: sdk.String("quasi"),
                            MemorySize: sdk.Int64(869489),
                            Pinned: sdk.Bool(false),
                            Timeout: sdk.Int64(92027),
                        },
                        ID: "7051339d-0808-46a1-8403-94c26071f93f",
                    },
                },
            },
            Name: sdk.String("Tabitha Bayer"),
            Tags: map[string]string{
                "repellendus": "officia",
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmznClientToken: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFunctionDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateFunctionDefinitionVersion

Creates a version of a Lambda function definition that has already been defined.

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
    res, err := s.SDK.CreateFunctionDefinitionVersion(ctx, operations.CreateFunctionDefinitionVersionRequest{
        FunctionDefinitionID: "quod",
        RequestBody: operations.CreateFunctionDefinitionVersionRequestBody{
            DefaultConfig: &operations.CreateFunctionDefinitionVersionRequestBodyDefaultConfig{
                Execution: &shared.FunctionDefaultExecutionConfig{
                    IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                    RunAs: &shared.FunctionRunAsConfig{
                        Gid: sdk.Int64(70447),
                        UID: sdk.Int64(241418),
                    },
                },
            },
            Functions: []shared.Function{
                shared.Function{
                    FunctionArn: sdk.String("id"),
                    FunctionConfiguration: &shared.FunctionConfiguration{
                        EncodingType: shared.EncodingTypeEnumBinary.ToPointer(),
                        Environment: &shared.FunctionConfigurationEnvironment{
                            AccessSysfs: sdk.Bool(false),
                            Execution: &shared.FunctionExecutionConfig{
                                IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                                RunAs: &shared.FunctionRunAsConfig{
                                    Gid: sdk.Int64(633931),
                                    UID: sdk.Int64(665859),
                                },
                            },
                            ResourceAccessPolicies: []shared.ResourceAccessPolicy{
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRw.ToPointer(),
                                    ResourceID: "fugiat",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRo.ToPointer(),
                                    ResourceID: "ducimus",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRw.ToPointer(),
                                    ResourceID: "vel",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRo.ToPointer(),
                                    ResourceID: "possimus",
                                },
                            },
                            Variables: map[string]string{
                                "cum": "commodi",
                                "in": "corporis",
                                "reiciendis": "assumenda",
                            },
                        },
                        ExecArgs: sdk.String("nemo"),
                        Executable: sdk.String("recusandae"),
                        FunctionRuntimeOverride: sdk.String("aliquid"),
                        MemorySize: sdk.Int64(46007),
                        Pinned: sdk.Bool(false),
                        Timeout: sdk.Int64(738683),
                    },
                    ID: "375ed4f6-fbee-441f-b331-7fe35b60eb1e",
                },
                shared.Function{
                    FunctionArn: sdk.String("similique"),
                    FunctionConfiguration: &shared.FunctionConfiguration{
                        EncodingType: shared.EncodingTypeEnumBinary.ToPointer(),
                        Environment: &shared.FunctionConfigurationEnvironment{
                            AccessSysfs: sdk.Bool(false),
                            Execution: &shared.FunctionExecutionConfig{
                                IsolationMode: shared.FunctionIsolationModeEnumGreengrassContainer.ToPointer(),
                                RunAs: &shared.FunctionRunAsConfig{
                                    Gid: sdk.Int64(379057),
                                    UID: sdk.Int64(374244),
                                },
                            },
                            ResourceAccessPolicies: []shared.ResourceAccessPolicy{
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRo.ToPointer(),
                                    ResourceID: "nobis",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRw.ToPointer(),
                                    ResourceID: "adipisci",
                                },
                            },
                            Variables: map[string]string{
                                "dolores": "blanditiis",
                                "in": "dolore",
                                "aliquam": "officiis",
                                "temporibus": "ullam",
                            },
                        },
                        ExecArgs: sdk.String("adipisci"),
                        Executable: sdk.String("cum"),
                        FunctionRuntimeOverride: sdk.String("blanditiis"),
                        MemorySize: sdk.Int64(555361),
                        Pinned: sdk.Bool(false),
                        Timeout: sdk.Int64(942584),
                    },
                    ID: "3a8d8f5c-0b2f-42fb-bb19-4a276b26916f",
                },
                shared.Function{
                    FunctionArn: sdk.String("debitis"),
                    FunctionConfiguration: &shared.FunctionConfiguration{
                        EncodingType: shared.EncodingTypeEnumBinary.ToPointer(),
                        Environment: &shared.FunctionConfigurationEnvironment{
                            AccessSysfs: sdk.Bool(false),
                            Execution: &shared.FunctionExecutionConfig{
                                IsolationMode: shared.FunctionIsolationModeEnumNoContainer.ToPointer(),
                                RunAs: &shared.FunctionRunAsConfig{
                                    Gid: sdk.Int64(19300),
                                    UID: sdk.Int64(546885),
                                },
                            },
                            ResourceAccessPolicies: []shared.ResourceAccessPolicy{
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRo.ToPointer(),
                                    ResourceID: "sed",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRw.ToPointer(),
                                    ResourceID: "eius",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRw.ToPointer(),
                                    ResourceID: "ipsum",
                                },
                                shared.ResourceAccessPolicy{
                                    Permission: shared.PermissionEnumRo.ToPointer(),
                                    ResourceID: "occaecati",
                                },
                            },
                            Variables: map[string]string{
                                "voluptatibus": "tempora",
                                "tempora": "voluptate",
                                "reiciendis": "ex",
                            },
                        },
                        ExecArgs: sdk.String("sit"),
                        Executable: sdk.String("non"),
                        FunctionRuntimeOverride: sdk.String("officiis"),
                        MemorySize: sdk.Int64(505866),
                        Pinned: sdk.Bool(false),
                        Timeout: sdk.Int64(708609),
                    },
                    ID: "445e80ca-55ef-4d20-a457-e1858b6a89fb",
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmznClientToken: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFunctionDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateGroup

Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.

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
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        RequestBody: operations.CreateGroupRequestBody{
            InitialVersion: &operations.CreateGroupRequestBodyInitialVersion{
                ConnectorDefinitionVersionArn: sdk.String("tempora"),
                CoreDefinitionVersionArn: sdk.String("atque"),
                DeviceDefinitionVersionArn: sdk.String("fugit"),
                FunctionDefinitionVersionArn: sdk.String("ut"),
                LoggerDefinitionVersionArn: sdk.String("fugiat"),
                ResourceDefinitionVersionArn: sdk.String("voluptatem"),
                SubscriptionDefinitionVersionArn: sdk.String("culpa"),
            },
            Name: "Miguel Adams",
            Tags: map[string]string{
                "voluptatum": "quas",
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmznClientToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## CreateGroupCertificateAuthority

Creates a CA for the group. If a CA already exists, it will rotate the existing CA.

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
    res, err := s.SDK.CreateGroupCertificateAuthority(ctx, operations.CreateGroupCertificateAuthorityRequest{
        GroupID: "nostrum",
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmznClientToken: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## CreateGroupVersion

Creates a version of a group which has already been defined.

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
    res, err := s.SDK.CreateGroupVersion(ctx, operations.CreateGroupVersionRequest{
        GroupID: "architecto",
        RequestBody: operations.CreateGroupVersionRequestBody{
            ConnectorDefinitionVersionArn: sdk.String("occaecati"),
            CoreDefinitionVersionArn: sdk.String("labore"),
            DeviceDefinitionVersionArn: sdk.String("quidem"),
            FunctionDefinitionVersionArn: sdk.String("atque"),
            LoggerDefinitionVersionArn: sdk.String("laborum"),
            ResourceDefinitionVersionArn: sdk.String("nam"),
            SubscriptionDefinitionVersionArn: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmznClientToken: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupVersionResponse != nil {
        // handle response
    }
}
```

## CreateLoggerDefinition

Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.

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
    res, err := s.SDK.CreateLoggerDefinition(ctx, operations.CreateLoggerDefinitionRequest{
        RequestBody: operations.CreateLoggerDefinitionRequestBody{
            InitialVersion: &operations.CreateLoggerDefinitionRequestBodyInitialVersion{
                Loggers: []shared.Logger{
                    shared.Logger{
                        Component: shared.LoggerComponentEnumLambda,
                        ID: "e0ab7da8-a50c-4e18-bf86-bc173d689eee",
                        Level: shared.LoggerLevelEnumError,
                        Space: sdk.Int64(328303),
                        Type: shared.LoggerTypeEnumFileSystem,
                    },
                    shared.Logger{
                        Component: shared.LoggerComponentEnumGreengrassSystem,
                        ID: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
                        Level: shared.LoggerLevelEnumWarn,
                        Space: sdk.Int64(446394),
                        Type: shared.LoggerTypeEnumFileSystem,
                    },
                    shared.Logger{
                        Component: shared.LoggerComponentEnumLambda,
                        ID: "922a57a1-5be3-4e06-8807-e2b6e3ab8845",
                        Level: shared.LoggerLevelEnumFatal,
                        Space: sdk.Int64(3099),
                        Type: shared.LoggerTypeEnumFileSystem,
                    },
                    shared.Logger{
                        Component: shared.LoggerComponentEnumLambda,
                        ID: "7a60ff2a-54a3-41e9-8764-a3e865e7956f",
                        Level: shared.LoggerLevelEnumWarn,
                        Space: sdk.Int64(133439),
                        Type: shared.LoggerTypeEnumFileSystem,
                    },
                },
            },
            Name: sdk.String("Lynda Heathcote"),
            Tags: map[string]string{
                "animi": "ex",
                "aliquid": "accusantium",
                "repellat": "doloribus",
                "ullam": "in",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmznClientToken: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoggerDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateLoggerDefinitionVersion

Creates a version of a logger definition that has already been defined.

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
    res, err := s.SDK.CreateLoggerDefinitionVersion(ctx, operations.CreateLoggerDefinitionVersionRequest{
        LoggerDefinitionID: "officiis",
        RequestBody: operations.CreateLoggerDefinitionVersionRequestBody{
            Loggers: []shared.Logger{
                shared.Logger{
                    Component: shared.LoggerComponentEnumLambda,
                    ID: "1b4512c1-0326-448d-82f6-15199ebfd0e9",
                    Level: shared.LoggerLevelEnumFatal,
                    Space: sdk.Int64(891801),
                    Type: shared.LoggerTypeEnumFileSystem,
                },
                shared.Logger{
                    Component: shared.LoggerComponentEnumLambda,
                    ID: "632ca3ae-d011-4799-a312-fde04771778f",
                    Level: shared.LoggerLevelEnumFatal,
                    Space: sdk.Int64(423706),
                    Type: shared.LoggerTypeEnumFileSystem,
                },
                shared.Logger{
                    Component: shared.LoggerComponentEnumLambda,
                    ID: "01747636-0a15-4db6-a660-659a1adeaab5",
                    Level: shared.LoggerLevelEnumWarn,
                    Space: sdk.Int64(316220),
                    Type: shared.LoggerTypeEnumFileSystem,
                },
                shared.Logger{
                    Component: shared.LoggerComponentEnumLambda,
                    ID: "6c645b08-b618-491b-aa0f-e1ade008e6f8",
                    Level: shared.LoggerLevelEnumError,
                    Space: sdk.Int64(365100),
                    Type: shared.LoggerTypeEnumAwsCloudWatch,
                },
            },
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmznClientToken: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLoggerDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateResourceDefinition

Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.

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
    res, err := s.SDK.CreateResourceDefinition(ctx, operations.CreateResourceDefinitionRequest{
        RequestBody: operations.CreateResourceDefinitionRequestBody{
            InitialVersion: &operations.CreateResourceDefinitionRequestBodyInitialVersion{
                Resources: []shared.Resource{
                    shared.Resource{
                        ID: "a3418143-0104-4218-93d5-208ece7e253b",
                        Name: "Kristin Legros",
                        ResourceDataContainer: shared.ResourceDataContainer{
                            LocalDeviceResourceData: &shared.LocalDeviceResourceData{
                                GroupOwnerSetting: &shared.GroupOwnerSetting{
                                    AutoAddGroupOwner: sdk.Bool(false),
                                    GroupOwner: sdk.String("ab"),
                                },
                                SourcePath: sdk.String("porro"),
                            },
                            LocalVolumeResourceData: &shared.LocalVolumeResourceData{
                                DestinationPath: sdk.String("autem"),
                                GroupOwnerSetting: &shared.GroupOwnerSetting{
                                    AutoAddGroupOwner: sdk.Bool(false),
                                    GroupOwner: sdk.String("nobis"),
                                },
                                SourcePath: sdk.String("laboriosam"),
                            },
                            S3MachineLearningModelResourceData: &shared.S3MachineLearningModelResourceData{
                                DestinationPath: sdk.String("recusandae"),
                                OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                    GroupOwner: "consequuntur",
                                    GroupPermission: shared.PermissionEnumRo,
                                },
                                S3URI: sdk.String("exercitationem"),
                            },
                            SageMakerMachineLearningModelResourceData: &shared.SageMakerMachineLearningModelResourceData{
                                DestinationPath: sdk.String("necessitatibus"),
                                OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                    GroupOwner: "quasi",
                                    GroupPermission: shared.PermissionEnumRo,
                                },
                                SageMakerJobArn: sdk.String("at"),
                            },
                            SecretsManagerSecretResourceData: &shared.SecretsManagerSecretResourceData{
                                Arn: sdk.String("vero"),
                                AdditionalStagingLabelsToDownload: []string{
                                    "harum",
                                    "sequi",
                                    "doloribus",
                                },
                            },
                        },
                    },
                    shared.Resource{
                        ID: "ec9578a6-4584-4273-a841-8d162309fb09",
                        Name: "Kristina Moore MD",
                        ResourceDataContainer: shared.ResourceDataContainer{
                            LocalDeviceResourceData: &shared.LocalDeviceResourceData{
                                GroupOwnerSetting: &shared.GroupOwnerSetting{
                                    AutoAddGroupOwner: sdk.Bool(false),
                                    GroupOwner: sdk.String("accusamus"),
                                },
                                SourcePath: sdk.String("voluptatibus"),
                            },
                            LocalVolumeResourceData: &shared.LocalVolumeResourceData{
                                DestinationPath: sdk.String("distinctio"),
                                GroupOwnerSetting: &shared.GroupOwnerSetting{
                                    AutoAddGroupOwner: sdk.Bool(false),
                                    GroupOwner: sdk.String("omnis"),
                                },
                                SourcePath: sdk.String("delectus"),
                            },
                            S3MachineLearningModelResourceData: &shared.S3MachineLearningModelResourceData{
                                DestinationPath: sdk.String("minima"),
                                OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                    GroupOwner: "praesentium",
                                    GroupPermission: shared.PermissionEnumRw,
                                },
                                S3URI: sdk.String("magnam"),
                            },
                            SageMakerMachineLearningModelResourceData: &shared.SageMakerMachineLearningModelResourceData{
                                DestinationPath: sdk.String("temporibus"),
                                OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                    GroupOwner: "quos",
                                    GroupPermission: shared.PermissionEnumRo,
                                },
                                SageMakerJobArn: sdk.String("itaque"),
                            },
                            SecretsManagerSecretResourceData: &shared.SecretsManagerSecretResourceData{
                                Arn: sdk.String("commodi"),
                                AdditionalStagingLabelsToDownload: []string{
                                    "earum",
                                    "modi",
                                    "nam",
                                },
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Kenneth Hilpert Sr."),
            Tags: map[string]string{
                "maiores": "enim",
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmznClientToken: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateResourceDefinitionVersion

Creates a version of a resource definition that has already been defined.

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
    res, err := s.SDK.CreateResourceDefinitionVersion(ctx, operations.CreateResourceDefinitionVersionRequest{
        RequestBody: operations.CreateResourceDefinitionVersionRequestBody{
            Resources: []shared.Resource{
                shared.Resource{
                    ID: "ecfef66e-f1ca-4a33-83c2-beb477373c8d",
                    Name: "Christina Wolf",
                    ResourceDataContainer: shared.ResourceDataContainer{
                        LocalDeviceResourceData: &shared.LocalDeviceResourceData{
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("quibusdam"),
                            },
                            SourcePath: sdk.String("inventore"),
                        },
                        LocalVolumeResourceData: &shared.LocalVolumeResourceData{
                            DestinationPath: sdk.String("facere"),
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("libero"),
                            },
                            SourcePath: sdk.String("architecto"),
                        },
                        S3MachineLearningModelResourceData: &shared.S3MachineLearningModelResourceData{
                            DestinationPath: sdk.String("voluptatibus"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "quia",
                                GroupPermission: shared.PermissionEnumRw,
                            },
                            S3URI: sdk.String("aliquam"),
                        },
                        SageMakerMachineLearningModelResourceData: &shared.SageMakerMachineLearningModelResourceData{
                            DestinationPath: sdk.String("velit"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "illo",
                                GroupPermission: shared.PermissionEnumRo,
                            },
                            SageMakerJobArn: sdk.String("vel"),
                        },
                        SecretsManagerSecretResourceData: &shared.SecretsManagerSecretResourceData{
                            Arn: sdk.String("ea"),
                            AdditionalStagingLabelsToDownload: []string{
                                "vero",
                            },
                        },
                    },
                },
                shared.Resource{
                    ID: "96349e1c-f9e0-46e3-a437-000ae6b6bc9b",
                    Name: "Tommie Klocko",
                    ResourceDataContainer: shared.ResourceDataContainer{
                        LocalDeviceResourceData: &shared.LocalDeviceResourceData{
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("necessitatibus"),
                            },
                            SourcePath: sdk.String("animi"),
                        },
                        LocalVolumeResourceData: &shared.LocalVolumeResourceData{
                            DestinationPath: sdk.String("impedit"),
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("ipsam"),
                            },
                            SourcePath: sdk.String("corporis"),
                        },
                        S3MachineLearningModelResourceData: &shared.S3MachineLearningModelResourceData{
                            DestinationPath: sdk.String("est"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "error",
                                GroupPermission: shared.PermissionEnumRo,
                            },
                            S3URI: sdk.String("labore"),
                        },
                        SageMakerMachineLearningModelResourceData: &shared.SageMakerMachineLearningModelResourceData{
                            DestinationPath: sdk.String("veritatis"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "vero",
                                GroupPermission: shared.PermissionEnumRo,
                            },
                            SageMakerJobArn: sdk.String("vitae"),
                        },
                        SecretsManagerSecretResourceData: &shared.SecretsManagerSecretResourceData{
                            Arn: sdk.String("inventore"),
                            AdditionalStagingLabelsToDownload: []string{
                                "ad",
                            },
                        },
                    },
                },
                shared.Resource{
                    ID: "2965bb8a-7202-4611-835e-139dbc2259b1",
                    Name: "Wm Steuber",
                    ResourceDataContainer: shared.ResourceDataContainer{
                        LocalDeviceResourceData: &shared.LocalDeviceResourceData{
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("placeat"),
                            },
                            SourcePath: sdk.String("sit"),
                        },
                        LocalVolumeResourceData: &shared.LocalVolumeResourceData{
                            DestinationPath: sdk.String("iusto"),
                            GroupOwnerSetting: &shared.GroupOwnerSetting{
                                AutoAddGroupOwner: sdk.Bool(false),
                                GroupOwner: sdk.String("ipsa"),
                            },
                            SourcePath: sdk.String("voluptates"),
                        },
                        S3MachineLearningModelResourceData: &shared.S3MachineLearningModelResourceData{
                            DestinationPath: sdk.String("inventore"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "aperiam",
                                GroupPermission: shared.PermissionEnumRw,
                            },
                            S3URI: sdk.String("dolore"),
                        },
                        SageMakerMachineLearningModelResourceData: &shared.SageMakerMachineLearningModelResourceData{
                            DestinationPath: sdk.String("eligendi"),
                            OwnerSetting: &shared.ResourceDownloadOwnerSetting{
                                GroupOwner: "distinctio",
                                GroupPermission: shared.PermissionEnumRo,
                            },
                            SageMakerJobArn: sdk.String("autem"),
                        },
                        SecretsManagerSecretResourceData: &shared.SecretsManagerSecretResourceData{
                            Arn: sdk.String("esse"),
                            AdditionalStagingLabelsToDownload: []string{
                                "assumenda",
                            },
                        },
                    },
                },
            },
        },
        ResourceDefinitionID: "beatae",
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmznClientToken: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## CreateSoftwareUpdateJob

Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.

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
    res, err := s.SDK.CreateSoftwareUpdateJob(ctx, operations.CreateSoftwareUpdateJobRequest{
        RequestBody: operations.CreateSoftwareUpdateJobRequestBody{
            S3URLSignerRole: "sint",
            SoftwareToUpdate: operations.CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnumCore,
            UpdateAgentLogLevel: operations.CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnumVerbose.ToPointer(),
            UpdateTargets: []string{
                "rerum",
                "laudantium",
            },
            UpdateTargetsArchitecture: operations.CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnumArmv7l,
            UpdateTargetsOperatingSystem: operations.CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnumOpenwrt,
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmznClientToken: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSoftwareUpdateJobResponse != nil {
        // handle response
    }
}
```

## CreateSubscriptionDefinition

Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.

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
    res, err := s.SDK.CreateSubscriptionDefinition(ctx, operations.CreateSubscriptionDefinitionRequest{
        RequestBody: operations.CreateSubscriptionDefinitionRequestBody{
            InitialVersion: &operations.CreateSubscriptionDefinitionRequestBodyInitialVersion{
                Subscriptions: []shared.Subscription{
                    shared.Subscription{
                        ID: "be2d7822-59e3-4ea4-b519-7f92443da7ce",
                        Source: "corporis",
                        Subject: "qui",
                        Target: "expedita",
                    },
                },
            },
            Name: sdk.String("Terrance Hansen"),
            Tags: map[string]string{
                "in": "minus",
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmznClientToken: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriptionDefinitionResponse != nil {
        // handle response
    }
}
```

## CreateSubscriptionDefinitionVersion

Creates a version of a subscription definition which has already been defined.

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
    res, err := s.SDK.CreateSubscriptionDefinitionVersion(ctx, operations.CreateSubscriptionDefinitionVersionRequest{
        RequestBody: operations.CreateSubscriptionDefinitionVersionRequestBody{
            Subscriptions: []shared.Subscription{
                shared.Subscription{
                    ID: "34896c3c-a5ac-4fbe-afd5-707577929177",
                    Source: "pariatur",
                    Subject: "itaque",
                    Target: "similique",
                },
                shared.Subscription{
                    ID: "c646ecb5-7340-49e3-ab1e-5a2b12eb07f1",
                    Source: "quasi",
                    Subject: "laboriosam",
                    Target: "pariatur",
                },
                shared.Subscription{
                    ID: "b99545fc-95fa-4889-b0e1-89dbb30fcb33",
                    Source: "saepe",
                    Subject: "deserunt",
                    Target: "doloremque",
                },
            },
        },
        SubscriptionDefinitionID: "quis",
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmznClientToken: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriptionDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## DeleteConnectorDefinition

Deletes a connector definition.

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
    res, err := s.SDK.DeleteConnectorDefinition(ctx, operations.DeleteConnectorDefinitionRequest{
        ConnectorDefinitionID: "magnam",
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("facere"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectorDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteCoreDefinition

Deletes a core definition.

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
    res, err := s.SDK.DeleteCoreDefinition(ctx, operations.DeleteCoreDefinitionRequest{
        CoreDefinitionID: "odit",
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCoreDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteDeviceDefinition

Deletes a device definition.

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
    res, err := s.SDK.DeleteDeviceDefinition(ctx, operations.DeleteDeviceDefinitionRequest{
        DeviceDefinitionID: "nisi",
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDeviceDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteFunctionDefinition

Deletes a Lambda function definition.

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
    res, err := s.SDK.DeleteFunctionDefinition(ctx, operations.DeleteFunctionDefinitionRequest{
        FunctionDefinitionID: "libero",
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFunctionDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteGroup

Deletes a group.

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
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        GroupID: "consequuntur",
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupResponse != nil {
        // handle response
    }
}
```

## DeleteLoggerDefinition

Deletes a logger definition.

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
    res, err := s.SDK.DeleteLoggerDefinition(ctx, operations.DeleteLoggerDefinitionRequest{
        LoggerDefinitionID: "iusto",
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLoggerDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteResourceDefinition

Deletes a resource definition.

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
    res, err := s.SDK.DeleteResourceDefinition(ctx, operations.DeleteResourceDefinitionRequest{
        ResourceDefinitionID: "dolor",
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourceDefinitionResponse != nil {
        // handle response
    }
}
```

## DeleteSubscriptionDefinition

Deletes a subscription definition.

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
    res, err := s.SDK.DeleteSubscriptionDefinition(ctx, operations.DeleteSubscriptionDefinitionRequest{
        SubscriptionDefinitionID: "ad",
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubscriptionDefinitionResponse != nil {
        // handle response
    }
}
```

## DisassociateRoleFromGroup

Disassociates the role from a group.

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
    res, err := s.SDK.DisassociateRoleFromGroup(ctx, operations.DisassociateRoleFromGroupRequest{
        GroupID: "ab",
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateRoleFromGroupResponse != nil {
        // handle response
    }
}
```

## DisassociateServiceRoleFromAccount

Disassociates the service role from your account. Without a service role, deployments will not work.

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
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateServiceRoleFromAccountResponse != nil {
        // handle response
    }
}
```

## GetAssociatedRole

Retrieves the role associated with a particular group.

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
    res, err := s.SDK.GetAssociatedRole(ctx, operations.GetAssociatedRoleRequest{
        GroupID: "nihil",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssociatedRoleResponse != nil {
        // handle response
    }
}
```

## GetBulkDeploymentStatus

Returns the status of a bulk deployment.

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
    res, err := s.SDK.GetBulkDeploymentStatus(ctx, operations.GetBulkDeploymentStatusRequest{
        BulkDeploymentID: "laudantium",
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBulkDeploymentStatusResponse != nil {
        // handle response
    }
}
```

## GetConnectivityInfo

Retrieves the connectivity information for a core.

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
        ThingName: "provident",
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectivityInfoResponse != nil {
        // handle response
    }
}
```

## GetConnectorDefinition

Retrieves information about a connector definition.

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
    res, err := s.SDK.GetConnectorDefinition(ctx, operations.GetConnectorDefinitionRequest{
        ConnectorDefinitionID: "iure",
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorDefinitionResponse != nil {
        // handle response
    }
}
```

## GetConnectorDefinitionVersion

Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.

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
    res, err := s.SDK.GetConnectorDefinitionVersion(ctx, operations.GetConnectorDefinitionVersionRequest{
        ConnectorDefinitionID: "quae",
        ConnectorDefinitionVersionID: "amet",
        NextToken: sdk.String("illum"),
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetCoreDefinition

Retrieves information about a core definition version.

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
    res, err := s.SDK.GetCoreDefinition(ctx, operations.GetCoreDefinitionRequest{
        CoreDefinitionID: "doloremque",
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCoreDefinitionResponse != nil {
        // handle response
    }
}
```

## GetCoreDefinitionVersion

Retrieves information about a core definition version.

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
    res, err := s.SDK.GetCoreDefinitionVersion(ctx, operations.GetCoreDefinitionVersionRequest{
        CoreDefinitionID: "repudiandae",
        CoreDefinitionVersionID: "consequatur",
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCoreDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetDeploymentStatus

Returns the status of a deployment.

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
    res, err := s.SDK.GetDeploymentStatus(ctx, operations.GetDeploymentStatusRequest{
        DeploymentID: "accusamus",
        GroupID: "eos",
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentStatusResponse != nil {
        // handle response
    }
}
```

## GetDeviceDefinition

Retrieves information about a device definition.

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
    res, err := s.SDK.GetDeviceDefinition(ctx, operations.GetDeviceDefinitionRequest{
        DeviceDefinitionID: "dolor",
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceDefinitionResponse != nil {
        // handle response
    }
}
```

## GetDeviceDefinitionVersion

Retrieves information about a device definition version.

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
    res, err := s.SDK.GetDeviceDefinitionVersion(ctx, operations.GetDeviceDefinitionVersionRequest{
        DeviceDefinitionID: "voluptatem",
        DeviceDefinitionVersionID: "perferendis",
        NextToken: sdk.String("rerum"),
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetFunctionDefinition

Retrieves information about a Lambda function definition, including its creation time and latest version.

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
    res, err := s.SDK.GetFunctionDefinition(ctx, operations.GetFunctionDefinitionRequest{
        FunctionDefinitionID: "consectetur",
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionDefinitionResponse != nil {
        // handle response
    }
}
```

## GetFunctionDefinitionVersion

Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.

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
    res, err := s.SDK.GetFunctionDefinitionVersion(ctx, operations.GetFunctionDefinitionVersionRequest{
        FunctionDefinitionID: "amet",
        FunctionDefinitionVersionID: "tenetur",
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFunctionDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetGroup

Retrieves information about a group.

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
    res, err := s.SDK.GetGroup(ctx, operations.GetGroupRequest{
        GroupID: "consectetur",
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupResponse != nil {
        // handle response
    }
}
```

## GetGroupCertificateAuthority

Retreives the CA associated with a group. Returns the public key of the CA.

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
    res, err := s.SDK.GetGroupCertificateAuthority(ctx, operations.GetGroupCertificateAuthorityRequest{
        CertificateAuthorityID: "illo",
        GroupID: "hic",
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupCertificateAuthorityResponse != nil {
        // handle response
    }
}
```

## GetGroupCertificateConfiguration

Retrieves the current configuration for the CA used by the group.

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
    res, err := s.SDK.GetGroupCertificateConfiguration(ctx, operations.GetGroupCertificateConfigurationRequest{
        GroupID: "numquam",
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupCertificateConfigurationResponse != nil {
        // handle response
    }
}
```

## GetGroupVersion

Retrieves information about a group version.

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
    res, err := s.SDK.GetGroupVersion(ctx, operations.GetGroupVersionRequest{
        GroupID: "odit",
        GroupVersionID: "deleniti",
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupVersionResponse != nil {
        // handle response
    }
}
```

## GetLoggerDefinition

Retrieves information about a logger definition.

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
    res, err := s.SDK.GetLoggerDefinition(ctx, operations.GetLoggerDefinitionRequest{
        LoggerDefinitionID: "modi",
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoggerDefinitionResponse != nil {
        // handle response
    }
}
```

## GetLoggerDefinitionVersion

Retrieves information about a logger definition version.

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
    res, err := s.SDK.GetLoggerDefinitionVersion(ctx, operations.GetLoggerDefinitionVersionRequest{
        LoggerDefinitionID: "veniam",
        LoggerDefinitionVersionID: "reiciendis",
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLoggerDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetResourceDefinition

Retrieves information about a resource definition, including its creation time and latest version.

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
    res, err := s.SDK.GetResourceDefinition(ctx, operations.GetResourceDefinitionRequest{
        ResourceDefinitionID: "dolorum",
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceDefinitionResponse != nil {
        // handle response
    }
}
```

## GetResourceDefinitionVersion

Retrieves information about a resource definition version, including which resources are included in the version.

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
    res, err := s.SDK.GetResourceDefinitionVersion(ctx, operations.GetResourceDefinitionVersionRequest{
        ResourceDefinitionID: "sunt",
        ResourceDefinitionVersionID: "distinctio",
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetServiceRoleForAccount

Retrieves the service role that is attached to your account.

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
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceRoleForAccountResponse != nil {
        // handle response
    }
}
```

## GetSubscriptionDefinition

Retrieves information about a subscription definition.

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
    res, err := s.SDK.GetSubscriptionDefinition(ctx, operations.GetSubscriptionDefinitionRequest{
        SubscriptionDefinitionID: "quae",
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriptionDefinitionResponse != nil {
        // handle response
    }
}
```

## GetSubscriptionDefinitionVersion

Retrieves information about a subscription definition version.

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
    res, err := s.SDK.GetSubscriptionDefinitionVersion(ctx, operations.GetSubscriptionDefinitionVersionRequest{
        NextToken: sdk.String("voluptatem"),
        SubscriptionDefinitionID: "alias",
        SubscriptionDefinitionVersionID: "eveniet",
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriptionDefinitionVersionResponse != nil {
        // handle response
    }
}
```

## GetThingRuntimeConfiguration

Get the runtime configuration of a thing.

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
    res, err := s.SDK.GetThingRuntimeConfiguration(ctx, operations.GetThingRuntimeConfigurationRequest{
        ThingName: "explicabo",
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetThingRuntimeConfigurationResponse != nil {
        // handle response
    }
}
```

## ListBulkDeploymentDetailedReports

Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.

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
    res, err := s.SDK.ListBulkDeploymentDetailedReports(ctx, operations.ListBulkDeploymentDetailedReportsRequest{
        BulkDeploymentID: "libero",
        MaxResults: sdk.String("totam"),
        NextToken: sdk.String("sequi"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBulkDeploymentDetailedReportsResponse != nil {
        // handle response
    }
}
```

## ListBulkDeployments

Returns a list of bulk deployments.

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
    res, err := s.SDK.ListBulkDeployments(ctx, operations.ListBulkDeploymentsRequest{
        MaxResults: sdk.String("repellat"),
        NextToken: sdk.String("nulla"),
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBulkDeploymentsResponse != nil {
        // handle response
    }
}
```

## ListConnectorDefinitionVersions

Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.

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
    res, err := s.SDK.ListConnectorDefinitionVersions(ctx, operations.ListConnectorDefinitionVersionsRequest{
        ConnectorDefinitionID: "voluptates",
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("rem"),
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListConnectorDefinitions

Retrieves a list of connector definitions.

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
    res, err := s.SDK.ListConnectorDefinitions(ctx, operations.ListConnectorDefinitionsRequest{
        MaxResults: sdk.String("officiis"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListCoreDefinitionVersions

Lists the versions of a core definition.

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
    res, err := s.SDK.ListCoreDefinitionVersions(ctx, operations.ListCoreDefinitionVersionsRequest{
        CoreDefinitionID: "a",
        MaxResults: sdk.String("iste"),
        NextToken: sdk.String("dicta"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoreDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListCoreDefinitions

Retrieves a list of core definitions.

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
    res, err := s.SDK.ListCoreDefinitions(ctx, operations.ListCoreDefinitionsRequest{
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("assumenda"),
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCoreDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListDeployments

Returns a history of deployments for the group.

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
        GroupID: "ab",
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("neque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeploymentsResponse != nil {
        // handle response
    }
}
```

## ListDeviceDefinitionVersions

Lists the versions of a device definition.

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
    res, err := s.SDK.ListDeviceDefinitionVersions(ctx, operations.ListDeviceDefinitionVersionsRequest{
        DeviceDefinitionID: "corporis",
        MaxResults: sdk.String("voluptas"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListDeviceDefinitions

Retrieves a list of device definitions.

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
    res, err := s.SDK.ListDeviceDefinitions(ctx, operations.ListDeviceDefinitionsRequest{
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("veniam"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListFunctionDefinitionVersions

Lists the versions of a Lambda function definition.

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
    res, err := s.SDK.ListFunctionDefinitionVersions(ctx, operations.ListFunctionDefinitionVersionsRequest{
        FunctionDefinitionID: "est",
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("velit"),
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListFunctionDefinitions

Retrieves a list of Lambda function definitions.

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
    res, err := s.SDK.ListFunctionDefinitions(ctx, operations.ListFunctionDefinitionsRequest{
        MaxResults: sdk.String("possimus"),
        NextToken: sdk.String("unde"),
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFunctionDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListGroupCertificateAuthorities

Retrieves the current CAs for a group.

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
    res, err := s.SDK.ListGroupCertificateAuthorities(ctx, operations.ListGroupCertificateAuthoritiesRequest{
        GroupID: "nesciunt",
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupCertificateAuthoritiesResponse != nil {
        // handle response
    }
}
```

## ListGroupVersions

Lists the versions of a group.

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
    res, err := s.SDK.ListGroupVersions(ctx, operations.ListGroupVersionsRequest{
        GroupID: "ut",
        MaxResults: sdk.String("numquam"),
        NextToken: sdk.String("tenetur"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupVersionsResponse != nil {
        // handle response
    }
}
```

## ListGroups

Retrieves a list of groups.

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
    res, err := s.SDK.ListGroups(ctx, operations.ListGroupsRequest{
        MaxResults: sdk.String("beatae"),
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## ListLoggerDefinitionVersions

Lists the versions of a logger definition.

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
    res, err := s.SDK.ListLoggerDefinitionVersions(ctx, operations.ListLoggerDefinitionVersionsRequest{
        LoggerDefinitionID: "qui",
        MaxResults: sdk.String("aliquid"),
        NextToken: sdk.String("magni"),
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLoggerDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListLoggerDefinitions

Retrieves a list of logger definitions.

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
    res, err := s.SDK.ListLoggerDefinitions(ctx, operations.ListLoggerDefinitionsRequest{
        MaxResults: sdk.String("impedit"),
        NextToken: sdk.String("sit"),
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLoggerDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListResourceDefinitionVersions

Lists the versions of a resource definition.

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
    res, err := s.SDK.ListResourceDefinitionVersions(ctx, operations.ListResourceDefinitionVersionsRequest{
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("itaque"),
        ResourceDefinitionID: "a",
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListResourceDefinitions

Retrieves a list of resource definitions.

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
    res, err := s.SDK.ListResourceDefinitions(ctx, operations.ListResourceDefinitionsRequest{
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("ipsa"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListSubscriptionDefinitionVersions

Lists the versions of a subscription definition.

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
    res, err := s.SDK.ListSubscriptionDefinitionVersions(ctx, operations.ListSubscriptionDefinitionVersionsRequest{
        MaxResults: sdk.String("ullam"),
        NextToken: sdk.String("architecto"),
        SubscriptionDefinitionID: "accusantium",
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionDefinitionVersionsResponse != nil {
        // handle response
    }
}
```

## ListSubscriptionDefinitions

Retrieves a list of subscription definitions.

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
    res, err := s.SDK.ListSubscriptionDefinitions(ctx, operations.ListSubscriptionDefinitionsRequest{
        MaxResults: sdk.String("nemo"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionDefinitionsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves a list of resource tags for a resource arn.

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
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        ResourceArn: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ResetDeployments

Resets a group's deployments.

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
    res, err := s.SDK.ResetDeployments(ctx, operations.ResetDeploymentsRequest{
        GroupID: "modi",
        RequestBody: operations.ResetDeploymentsRequestBody{
            Force: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmznClientToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetDeploymentsResponse != nil {
        // handle response
    }
}
```

## StartBulkDeployment

Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.

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
    res, err := s.SDK.StartBulkDeployment(ctx, operations.StartBulkDeploymentRequest{
        RequestBody: operations.StartBulkDeploymentRequestBody{
            ExecutionRoleArn: "quod",
            InputFileURI: "id",
            Tags: map[string]string{
                "autem": "quo",
                "nesciunt": "illum",
                "nemo": "illum",
                "facilis": "non",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("facere"),
        XAmznClientToken: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBulkDeploymentResponse != nil {
        // handle response
    }
}
```

## StopBulkDeployment

Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.

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
    res, err := s.SDK.StopBulkDeployment(ctx, operations.StopBulkDeploymentRequest{
        BulkDeploymentID: "eveniet",
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopBulkDeploymentResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.

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
                "laborum": "est",
                "occaecati": "labore",
                "quo": "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        ResourceArn: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Remove resource tags from a Greengrass Resource.

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
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("esse"),
        ResourceArn: "corrupti",
        TagKeys: []string{
            "facere",
            "impedit",
            "quasi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateConnectivityInfo

Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.

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
                    HostAddress: sdk.String("quod"),
                    ID: sdk.String("600dec00-1ac8-402e-aec0-9ff8f0f816ff"),
                    Metadata: sdk.String("velit"),
                    PortNumber: sdk.Int64(260588),
                },
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("esse"),
                    ID: sdk.String("7c13e902-c141-425b-8960-a668151a472a"),
                    Metadata: sdk.String("delectus"),
                    PortNumber: sdk.Int64(609537),
                },
                shared.ConnectivityInfo{
                    HostAddress: sdk.String("sed"),
                    ID: sdk.String("3c5949f8-3f35-40cf-876f-fb901c6ecbb4"),
                    Metadata: sdk.String("voluptates"),
                    PortNumber: sdk.Int64(145435),
                },
            },
        },
        ThingName: "eius",
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectivityInfoResponse != nil {
        // handle response
    }
}
```

## UpdateConnectorDefinition

Updates a connector definition.

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
    res, err := s.SDK.UpdateConnectorDefinition(ctx, operations.UpdateConnectorDefinitionRequest{
        ConnectorDefinitionID: "a",
        RequestBody: operations.UpdateConnectorDefinitionRequestBody{
            Name: sdk.String("Emilio Waters"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectorDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateCoreDefinition

Updates a core definition.

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
    res, err := s.SDK.UpdateCoreDefinition(ctx, operations.UpdateCoreDefinitionRequest{
        CoreDefinitionID: "repudiandae",
        RequestBody: operations.UpdateCoreDefinitionRequestBody{
            Name: sdk.String("Ms. Kristi Russel"),
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCoreDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateDeviceDefinition

Updates a device definition.

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
    res, err := s.SDK.UpdateDeviceDefinition(ctx, operations.UpdateDeviceDefinitionRequest{
        DeviceDefinitionID: "reprehenderit",
        RequestBody: operations.UpdateDeviceDefinitionRequestBody{
            Name: sdk.String("Isaac Lowe"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("molestias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateFunctionDefinition

Updates a Lambda function definition.

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
    res, err := s.SDK.UpdateFunctionDefinition(ctx, operations.UpdateFunctionDefinitionRequest{
        FunctionDefinitionID: "dolore",
        RequestBody: operations.UpdateFunctionDefinitionRequestBody{
            Name: sdk.String("Ebony Doyle"),
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFunctionDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateGroup

Updates a group.

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
    res, err := s.SDK.UpdateGroup(ctx, operations.UpdateGroupRequest{
        GroupID: "nisi",
        RequestBody: operations.UpdateGroupRequestBody{
            Name: sdk.String("Tim Sporer"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroupResponse != nil {
        // handle response
    }
}
```

## UpdateGroupCertificateConfiguration

Updates the Certificate expiry time for a group.

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
    res, err := s.SDK.UpdateGroupCertificateConfiguration(ctx, operations.UpdateGroupCertificateConfigurationRequest{
        GroupID: "sed",
        RequestBody: operations.UpdateGroupCertificateConfigurationRequestBody{
            CertificateExpiryInMilliseconds: sdk.String("possimus"),
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroupCertificateConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateLoggerDefinition

Updates a logger definition.

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
    res, err := s.SDK.UpdateLoggerDefinition(ctx, operations.UpdateLoggerDefinitionRequest{
        LoggerDefinitionID: "voluptatibus",
        RequestBody: operations.UpdateLoggerDefinitionRequestBody{
            Name: sdk.String("Judith Schinner"),
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLoggerDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateResourceDefinition

Updates a resource definition.

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
    res, err := s.SDK.UpdateResourceDefinition(ctx, operations.UpdateResourceDefinitionRequest{
        RequestBody: operations.UpdateResourceDefinitionRequestBody{
            Name: sdk.String("Miss Horace Runte"),
        },
        ResourceDefinitionID: "eaque",
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateSubscriptionDefinition

Updates a subscription definition.

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
    res, err := s.SDK.UpdateSubscriptionDefinition(ctx, operations.UpdateSubscriptionDefinitionRequest{
        RequestBody: operations.UpdateSubscriptionDefinitionRequestBody{
            Name: sdk.String("Aaron Tillman"),
        },
        SubscriptionDefinitionID: "minus",
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriptionDefinitionResponse != nil {
        // handle response
    }
}
```

## UpdateThingRuntimeConfiguration

Updates the runtime configuration of a thing.

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
    res, err := s.SDK.UpdateThingRuntimeConfiguration(ctx, operations.UpdateThingRuntimeConfigurationRequest{
        RequestBody: operations.UpdateThingRuntimeConfigurationRequestBody{
            TelemetryConfiguration: &operations.UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration{
                Telemetry: shared.TelemetryEnumOn.ToPointer(),
            },
        },
        ThingName: "aut",
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateThingRuntimeConfigurationResponse != nil {
        // handle response
    }
}
```
