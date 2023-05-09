# SDK

## Overview

<important> <p> <b>Product update</b> </p> <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March 2023.</p> </important> <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service product page</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a> </p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sms/>
### Available Operations

* [CreateApp](#createapp) - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* [CreateReplicationJob](#createreplicationjob) - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* [DeleteApp](#deleteapp) - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* [DeleteAppLaunchConfiguration](#deleteapplaunchconfiguration) - Deletes the launch configuration for the specified application.
* [DeleteAppReplicationConfiguration](#deleteappreplicationconfiguration) - Deletes the replication configuration for the specified application.
* [DeleteAppValidationConfiguration](#deleteappvalidationconfiguration) - Deletes the validation configuration for the specified application.
* [DeleteReplicationJob](#deletereplicationjob) - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* [DeleteServerCatalog](#deleteservercatalog) - Deletes all servers from your server catalog.
* [DisassociateConnector](#disassociateconnector) - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* [GenerateChangeSet](#generatechangeset) - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [GenerateTemplate](#generatetemplate) - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [GetApp](#getapp) - Retrieve information about the specified application.
* [GetAppLaunchConfiguration](#getapplaunchconfiguration) - Retrieves the application launch configuration associated with the specified application.
* [GetAppReplicationConfiguration](#getappreplicationconfiguration) - Retrieves the application replication configuration associated with the specified application.
* [GetAppValidationConfiguration](#getappvalidationconfiguration) - Retrieves information about a configuration for validating an application.
* [GetAppValidationOutput](#getappvalidationoutput) - Retrieves output from validating an application.
* [GetConnectors](#getconnectors) - Describes the connectors registered with the Server Migration Service.
* [GetReplicationJobs](#getreplicationjobs) - Describes the specified replication job or all of your replication jobs.
* [GetReplicationRuns](#getreplicationruns) - Describes the replication runs for the specified replication job.
* [GetServers](#getservers) - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* [ImportAppCatalog](#importappcatalog) - Allows application import from Migration Hub.
* [ImportServerCatalog](#importservercatalog) - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* [LaunchApp](#launchapp) - Launches the specified application as a stack in CloudFormation.
* [ListApps](#listapps) - Retrieves summaries for all applications.
* [NotifyAppValidationOutput](#notifyappvalidationoutput) - Provides information to Server Migration Service about whether application validation is successful.
* [PutAppLaunchConfiguration](#putapplaunchconfiguration) - Creates or updates the launch configuration for the specified application.
* [PutAppReplicationConfiguration](#putappreplicationconfiguration) - Creates or updates the replication configuration for the specified application.
* [PutAppValidationConfiguration](#putappvalidationconfiguration) - Creates or updates a validation configuration for the specified application.
* [StartAppReplication](#startappreplication) - Starts replicating the specified application by creating replication jobs for each server in the application.
* [StartOnDemandAppReplication](#startondemandappreplication) - Starts an on-demand replication run for the specified application.
* [StartOnDemandReplicationRun](#startondemandreplicationrun) - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* [StopAppReplication](#stopappreplication) - Stops replicating the specified application by deleting the replication job for each server in the application.
* [TerminateApp](#terminateapp) - Terminates the stack for the specified application.
* [UpdateApp](#updateapp) - Updates the specified application.
* [UpdateReplicationJob](#updatereplicationjob) - Updates the specified settings for the specified replication job.

## CreateApp

Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.

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
    res, err := s.SDK.CreateApp(ctx, operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            ClientToken: sdk.String("natus"),
            Description: sdk.String("sed"),
            Name: sdk.String("Curtis Morissette"),
            RoleName: sdk.String("saepe"),
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: sdk.String("Stacy Moore"),
                    ServerGroupID: sdk.String("quidem"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("ipsa"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("reiciendis"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("est"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("laborum"),
                                VMPath: sdk.String("dolores"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("dolorem"),
                                    VMManagerID: sdk.String("corporis"),
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: sdk.String("Della Halvorson"),
                    ServerGroupID: sdk.String("minima"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("accusantium"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("iure"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("culpa"),
                                VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                VMName: sdk.String("sapiente"),
                                VMPath: sdk.String("architecto"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("mollitia"),
                                    VMManagerID: sdk.String("dolorem"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("culpa"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("consequuntur"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("repellat"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("occaecati"),
                                VMPath: sdk.String("numquam"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("commodi"),
                                    VMManagerID: sdk.String("quam"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("molestiae"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("velit"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("error"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("quis"),
                                VMPath: sdk.String("vitae"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("laborum"),
                                    VMManagerID: sdk.String("animi"),
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: sdk.String("Christina Satterfield"),
                    ServerGroupID: sdk.String("ipsam"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("possimus"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("aut"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("quasi"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("temporibus"),
                                VMPath: sdk.String("laborum"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("quasi"),
                                    VMManagerID: sdk.String("reiciendis"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("voluptatibus"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("vero"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("nihil"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("voluptatibus"),
                                VMPath: sdk.String("ipsa"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("omnis"),
                                    VMManagerID: sdk.String("voluptate"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("cum"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("perferendis"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("doloremque"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("ut"),
                                VMPath: sdk.String("maiores"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("dicta"),
                                    VMManagerID: sdk.String("corporis"),
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("iusto"),
                    Value: sdk.String("dicta"),
                },
                shared.Tag{
                    Key: sdk.String("harum"),
                    Value: sdk.String("enim"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.CreateAppXAmzTargetEnumAwsServerMigrationServiceV20161024CreateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```

## CreateReplicationJob

Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateReplicationJob(ctx, operations.CreateReplicationJobRequest{
        CreateReplicationJobRequest: shared.CreateReplicationJobRequest{
            Description: sdk.String("excepturi"),
            Encrypted: sdk.Bool(false),
            Frequency: sdk.Int64(865103),
            KmsKeyID: sdk.String("modi"),
            LicenseType: shared.LicenseTypeEnumByol.ToPointer(),
            NumberOfRecentAmisToKeep: sdk.Int64(523248),
            RoleName: sdk.String("voluptates"),
            RunOnce: sdk.Bool(false),
            SeedReplicationTime: types.MustTimeFromString("2022-01-29T18:39:33.469Z"),
            ServerID: "sint",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.CreateReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024CreateReplicationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationJobResponse != nil {
        // handle response
    }
}
```

## DeleteApp

Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.

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
    res, err := s.SDK.DeleteApp(ctx, operations.DeleteAppRequest{
        DeleteAppRequest: shared.DeleteAppRequest{
            AppID: sdk.String("explicabo"),
            ForceStopAppReplication: sdk.Bool(false),
            ForceTerminateApp: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteAppXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppResponse != nil {
        // handle response
    }
}
```

## DeleteAppLaunchConfiguration

Deletes the launch configuration for the specified application.

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
    res, err := s.SDK.DeleteAppLaunchConfiguration(ctx, operations.DeleteAppLaunchConfigurationRequest{
        DeleteAppLaunchConfigurationRequest: shared.DeleteAppLaunchConfigurationRequest{
            AppID: sdk.String("cupiditate"),
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DeleteAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppLaunchConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppLaunchConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteAppReplicationConfiguration

Deletes the replication configuration for the specified application.

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
    res, err := s.SDK.DeleteAppReplicationConfiguration(ctx, operations.DeleteAppReplicationConfigurationRequest{
        DeleteAppReplicationConfigurationRequest: shared.DeleteAppReplicationConfigurationRequest{
            AppID: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DeleteAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppReplicationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppReplicationConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteAppValidationConfiguration

Deletes the validation configuration for the specified application.

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
    res, err := s.SDK.DeleteAppValidationConfiguration(ctx, operations.DeleteAppValidationConfigurationRequest{
        DeleteAppValidationConfigurationRequest: shared.DeleteAppValidationConfigurationRequest{
            AppID: "non",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.DeleteAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteAppValidationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAppValidationConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteReplicationJob

<p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>

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
    res, err := s.SDK.DeleteReplicationJob(ctx, operations.DeleteReplicationJobRequest{
        DeleteReplicationJobRequest: shared.DeleteReplicationJobRequest{
            ReplicationJobID: "dolor",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteReplicationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationJobResponse != nil {
        // handle response
    }
}
```

## DeleteServerCatalog

Deletes all servers from your server catalog.

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
    res, err := s.SDK.DeleteServerCatalog(ctx, operations.DeleteServerCatalogRequest{
        RequestBody: map[string]interface{}{
            "dicta": "magnam",
            "cumque": "facere",
            "ea": "aliquid",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DeleteServerCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteServerCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteServerCatalogResponse != nil {
        // handle response
    }
}
```

## DisassociateConnector

<p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>

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
    res, err := s.SDK.DisassociateConnector(ctx, operations.DisassociateConnectorRequest{
        DisassociateConnectorRequest: shared.DisassociateConnectorRequest{
            ConnectorID: "quidem",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DisassociateConnectorXAmzTargetEnumAwsServerMigrationServiceV20161024DisassociateConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateConnectorResponse != nil {
        // handle response
    }
}
```

## GenerateChangeSet

Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

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
    res, err := s.SDK.GenerateChangeSet(ctx, operations.GenerateChangeSetRequest{
        GenerateChangeSetRequest: shared.GenerateChangeSetRequest{
            AppID: sdk.String("deserunt"),
            ChangesetFormat: shared.OutputFormatEnumJSON.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.GenerateChangeSetXAmzTargetEnumAwsServerMigrationServiceV20161024GenerateChangeSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateChangeSetResponse != nil {
        // handle response
    }
}
```

## GenerateTemplate

Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.

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
    res, err := s.SDK.GenerateTemplate(ctx, operations.GenerateTemplateRequest{
        GenerateTemplateRequest: shared.GenerateTemplateRequest{
            AppID: sdk.String("distinctio"),
            TemplateFormat: shared.OutputFormatEnumYaml.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.GenerateTemplateXAmzTargetEnumAwsServerMigrationServiceV20161024GenerateTemplate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateTemplateResponse != nil {
        // handle response
    }
}
```

## GetApp

Retrieve information about the specified application.

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
    res, err := s.SDK.GetApp(ctx, operations.GetAppRequest{
        GetAppRequest: shared.GetAppRequest{
            AppID: sdk.String("aspernatur"),
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.GetAppXAmzTargetEnumAwsServerMigrationServiceV20161024GetApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppResponse != nil {
        // handle response
    }
}
```

## GetAppLaunchConfiguration

Retrieves the application launch configuration associated with the specified application.

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
    res, err := s.SDK.GetAppLaunchConfiguration(ctx, operations.GetAppLaunchConfigurationRequest{
        GetAppLaunchConfigurationRequest: shared.GetAppLaunchConfigurationRequest{
            AppID: sdk.String("sint"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.GetAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppLaunchConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppLaunchConfigurationResponse != nil {
        // handle response
    }
}
```

## GetAppReplicationConfiguration

Retrieves the application replication configuration associated with the specified application.

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
    res, err := s.SDK.GetAppReplicationConfiguration(ctx, operations.GetAppReplicationConfigurationRequest{
        GetAppReplicationConfigurationRequest: shared.GetAppReplicationConfigurationRequest{
            AppID: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.GetAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppReplicationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppReplicationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetAppValidationConfiguration

Retrieves information about a configuration for validating an application.

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
    res, err := s.SDK.GetAppValidationConfiguration(ctx, operations.GetAppValidationConfigurationRequest{
        GetAppValidationConfigurationRequest: shared.GetAppValidationConfigurationRequest{
            AppID: "maxime",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.GetAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppValidationConfigurationResponse != nil {
        // handle response
    }
}
```

## GetAppValidationOutput

Retrieves output from validating an application.

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
    res, err := s.SDK.GetAppValidationOutput(ctx, operations.GetAppValidationOutputRequest{
        GetAppValidationOutputRequest: shared.GetAppValidationOutputRequest{
            AppID: "expedita",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.GetAppValidationOutputXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationOutput,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppValidationOutputResponse != nil {
        // handle response
    }
}
```

## GetConnectors

Describes the connectors registered with the Server Migration Service.

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
    res, err := s.SDK.GetConnectors(ctx, operations.GetConnectorsRequest{
        GetConnectorsRequest: shared.GetConnectorsRequest{
            MaxResults: sdk.Int64(162493),
            NextToken: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.GetConnectorsXAmzTargetEnumAwsServerMigrationServiceV20161024GetConnectors,
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectorsResponse != nil {
        // handle response
    }
}
```

## GetReplicationJobs

Describes the specified replication job or all of your replication jobs.

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
    res, err := s.SDK.GetReplicationJobs(ctx, operations.GetReplicationJobsRequest{
        GetReplicationJobsRequest: shared.GetReplicationJobsRequest{
            MaxResults: sdk.Int64(139972),
            NextToken: sdk.String("ea"),
            ReplicationJobID: sdk.String("accusantium"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.GetReplicationJobsXAmzTargetEnumAwsServerMigrationServiceV20161024GetReplicationJobs,
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReplicationJobsResponse != nil {
        // handle response
    }
}
```

## GetReplicationRuns

Describes the replication runs for the specified replication job.

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
    res, err := s.SDK.GetReplicationRuns(ctx, operations.GetReplicationRunsRequest{
        GetReplicationRunsRequest: shared.GetReplicationRunsRequest{
            MaxResults: sdk.Int64(365496),
            NextToken: sdk.String("voluptatibus"),
            ReplicationJobID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("fugiat"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.GetReplicationRunsXAmzTargetEnumAwsServerMigrationServiceV20161024GetReplicationRuns,
        MaxResults: sdk.String("nobis"),
        NextToken: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReplicationRunsResponse != nil {
        // handle response
    }
}
```

## GetServers

<p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>

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
    res, err := s.SDK.GetServers(ctx, operations.GetServersRequest{
        GetServersRequest: shared.GetServersRequest{
            MaxResults: sdk.Int64(339404),
            NextToken: sdk.String("totam"),
            VMServerAddressList: []shared.VMServerAddress{
                shared.VMServerAddress{
                    VMID: sdk.String("eaque"),
                    VMManagerID: sdk.String("quis"),
                },
                shared.VMServerAddress{
                    VMID: sdk.String("nesciunt"),
                    VMManagerID: sdk.String("eos"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.GetServersXAmzTargetEnumAwsServerMigrationServiceV20161024GetServers,
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServersResponse != nil {
        // handle response
    }
}
```

## ImportAppCatalog

Allows application import from Migration Hub.

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
    res, err := s.SDK.ImportAppCatalog(ctx, operations.ImportAppCatalogRequest{
        ImportAppCatalogRequest: shared.ImportAppCatalogRequest{
            RoleName: sdk.String("omnis"),
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.ImportAppCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024ImportAppCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportAppCatalogResponse != nil {
        // handle response
    }
}
```

## ImportServerCatalog

<p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>

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
    res, err := s.SDK.ImportServerCatalog(ctx, operations.ImportServerCatalogRequest{
        RequestBody: map[string]interface{}{
            "occaecati": "rerum",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ImportServerCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024ImportServerCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportServerCatalogResponse != nil {
        // handle response
    }
}
```

## LaunchApp

Launches the specified application as a stack in CloudFormation.

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
    res, err := s.SDK.LaunchApp(ctx, operations.LaunchAppRequest{
        LaunchAppRequest: shared.LaunchAppRequest{
            AppID: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.LaunchAppXAmzTargetEnumAwsServerMigrationServiceV20161024LaunchApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LaunchAppResponse != nil {
        // handle response
    }
}
```

## ListApps

Retrieves summaries for all applications.

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
    res, err := s.SDK.ListApps(ctx, operations.ListAppsRequest{
        ListAppsRequest: shared.ListAppsRequest{
            AppIds: []string{
                "dolorem",
            },
            MaxResults: sdk.Int64(222443),
            NextToken: sdk.String("qui"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.ListAppsXAmzTargetEnumAwsServerMigrationServiceV20161024ListApps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsResponse != nil {
        // handle response
    }
}
```

## NotifyAppValidationOutput

Provides information to Server Migration Service about whether application validation is successful.

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
    res, err := s.SDK.NotifyAppValidationOutput(ctx, operations.NotifyAppValidationOutputRequest{
        NotifyAppValidationOutputRequest: shared.NotifyAppValidationOutputRequest{
            AppID: "amet",
            NotificationContext: &shared.NotificationContext{
                Status: shared.ValidationStatusEnumSucceeded.ToPointer(),
                StatusMessage: sdk.String("numquam"),
                ValidationID: sdk.String("veritatis"),
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.NotifyAppValidationOutputXAmzTargetEnumAwsServerMigrationServiceV20161024NotifyAppValidationOutput,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyAppValidationOutputResponse != nil {
        // handle response
    }
}
```

## PutAppLaunchConfiguration

Creates or updates the launch configuration for the specified application.

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
    res, err := s.SDK.PutAppLaunchConfiguration(ctx, operations.PutAppLaunchConfigurationRequest{
        PutAppLaunchConfigurationRequest: shared.PutAppLaunchConfigurationRequest{
            AppID: sdk.String("voluptatibus"),
            AutoLaunch: sdk.Bool(false),
            RoleName: sdk.String("voluptas"),
            ServerGroupLaunchConfigurations: []shared.ServerGroupLaunchConfiguration{
                shared.ServerGroupLaunchConfiguration{
                    LaunchOrder: sdk.Int64(179603),
                    ServerGroupID: sdk.String("atque"),
                    ServerLaunchConfigurations: []shared.ServerLaunchConfiguration{
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("fugiat"),
                                Key: sdk.String("ab"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumPowershellScript.ToPointer(),
                            Ec2KeyName: sdk.String("dolorum"),
                            IamInstanceProfileName: sdk.String("iusto"),
                            InstanceType: sdk.String("voluptate"),
                            LogicalID: sdk.String("dolorum"),
                            SecurityGroup: sdk.String("deleniti"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("omnis"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("necessitatibus"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("distinctio"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("nihil"),
                                    VMPath: sdk.String("ipsum"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("voluptate"),
                                        VMManagerID: sdk.String("id"),
                                    },
                                },
                            },
                            Subnet: sdk.String("saepe"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("eius"),
                                    Key: sdk.String("aspernatur"),
                                },
                            },
                            Vpc: sdk.String("perferendis"),
                        },
                    },
                },
                shared.ServerGroupLaunchConfiguration{
                    LaunchOrder: sdk.Int64(229219),
                    ServerGroupID: sdk.String("optio"),
                    ServerLaunchConfigurations: []shared.ServerLaunchConfiguration{
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("ad"),
                                Key: sdk.String("saepe"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                            Ec2KeyName: sdk.String("deserunt"),
                            IamInstanceProfileName: sdk.String("provident"),
                            InstanceType: sdk.String("minima"),
                            LogicalID: sdk.String("repellendus"),
                            SecurityGroup: sdk.String("totam"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("similique"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("alias"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("at"),
                                    VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                    VMName: sdk.String("tempora"),
                                    VMPath: sdk.String("vel"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("quod"),
                                        VMManagerID: sdk.String("officiis"),
                                    },
                                },
                            },
                            Subnet: sdk.String("qui"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("dolorum"),
                                    Key: sdk.String("a"),
                                },
                            },
                            Vpc: sdk.String("esse"),
                        },
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("harum"),
                                Key: sdk.String("iusto"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                            Ec2KeyName: sdk.String("quisquam"),
                            IamInstanceProfileName: sdk.String("tenetur"),
                            InstanceType: sdk.String("amet"),
                            LogicalID: sdk.String("tempore"),
                            SecurityGroup: sdk.String("accusamus"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("numquam"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("enim"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("dolorem"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("totam"),
                                    VMPath: sdk.String("nihil"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("sit"),
                                        VMManagerID: sdk.String("expedita"),
                                    },
                                },
                            },
                            Subnet: sdk.String("neque"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("sed"),
                                    Key: sdk.String("vel"),
                                },
                            },
                            Vpc: sdk.String("libero"),
                        },
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("voluptas"),
                                Key: sdk.String("deserunt"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                            Ec2KeyName: sdk.String("ipsum"),
                            IamInstanceProfileName: sdk.String("incidunt"),
                            InstanceType: sdk.String("qui"),
                            LogicalID: sdk.String("cupiditate"),
                            SecurityGroup: sdk.String("maxime"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("pariatur"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("soluta"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("dicta"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("totam"),
                                    VMPath: sdk.String("incidunt"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("aspernatur"),
                                        VMManagerID: sdk.String("dolores"),
                                    },
                                },
                            },
                            Subnet: sdk.String("distinctio"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("facilis"),
                                    Key: sdk.String("aliquid"),
                                },
                            },
                            Vpc: sdk.String("quam"),
                        },
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("molestias"),
                                Key: sdk.String("temporibus"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                            Ec2KeyName: sdk.String("neque"),
                            IamInstanceProfileName: sdk.String("fugit"),
                            InstanceType: sdk.String("magni"),
                            LogicalID: sdk.String("odio"),
                            SecurityGroup: sdk.String("sunt"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("ullam"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("nam"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("hic"),
                                    VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                    VMName: sdk.String("cumque"),
                                    VMPath: sdk.String("soluta"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("nobis"),
                                        VMManagerID: sdk.String("et"),
                                    },
                                },
                            },
                            Subnet: sdk.String("saepe"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("ipsum"),
                                    Key: sdk.String("veritatis"),
                                },
                            },
                            Vpc: sdk.String("nobis"),
                        },
                    },
                },
                shared.ServerGroupLaunchConfiguration{
                    LaunchOrder: sdk.Int64(552193),
                    ServerGroupID: sdk.String("tempore"),
                    ServerLaunchConfigurations: []shared.ServerLaunchConfiguration{
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("aperiam"),
                                Key: sdk.String("delectus"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                            Ec2KeyName: sdk.String("dolore"),
                            IamInstanceProfileName: sdk.String("labore"),
                            InstanceType: sdk.String("adipisci"),
                            LogicalID: sdk.String("dolorum"),
                            SecurityGroup: sdk.String("architecto"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("quae"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("aut"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("quas"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("consequatur"),
                                    VMPath: sdk.String("est"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("repellendus"),
                                        VMManagerID: sdk.String("porro"),
                                    },
                                },
                            },
                            Subnet: sdk.String("doloribus"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("ut"),
                                    Key: sdk.String("facilis"),
                                },
                            },
                            Vpc: sdk.String("cupiditate"),
                        },
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("qui"),
                                Key: sdk.String("quae"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumPowershellScript.ToPointer(),
                            Ec2KeyName: sdk.String("odio"),
                            IamInstanceProfileName: sdk.String("occaecati"),
                            InstanceType: sdk.String("voluptatibus"),
                            LogicalID: sdk.String("quisquam"),
                            SecurityGroup: sdk.String("vero"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("omnis"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("quis"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("ipsum"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("voluptate"),
                                    VMPath: sdk.String("consectetur"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("vero"),
                                        VMManagerID: sdk.String("tenetur"),
                                    },
                                },
                            },
                            Subnet: sdk.String("dignissimos"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("hic"),
                                    Key: sdk.String("distinctio"),
                                },
                            },
                            Vpc: sdk.String("quod"),
                        },
                        shared.ServerLaunchConfiguration{
                            AssociatePublicIPAddress: sdk.Bool(false),
                            ConfigureScript: &shared.S3Location{
                                Bucket: sdk.String("odio"),
                                Key: sdk.String("similique"),
                            },
                            ConfigureScriptType: shared.ScriptTypeEnumPowershellScript.ToPointer(),
                            Ec2KeyName: sdk.String("vero"),
                            IamInstanceProfileName: sdk.String("ducimus"),
                            InstanceType: sdk.String("dolore"),
                            LogicalID: sdk.String("quibusdam"),
                            SecurityGroup: sdk.String("illum"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("sequi"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("natus"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("impedit"),
                                    VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                    VMName: sdk.String("voluptatibus"),
                                    VMPath: sdk.String("exercitationem"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("nulla"),
                                        VMManagerID: sdk.String("fugit"),
                                    },
                                },
                            },
                            Subnet: sdk.String("porro"),
                            UserData: &shared.UserData{
                                S3Location: &shared.S3Location{
                                    Bucket: sdk.String("maiores"),
                                    Key: sdk.String("doloribus"),
                                },
                            },
                            Vpc: sdk.String("iusto"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.PutAppLaunchConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppLaunchConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAppLaunchConfigurationResponse != nil {
        // handle response
    }
}
```

## PutAppReplicationConfiguration

Creates or updates the replication configuration for the specified application.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutAppReplicationConfiguration(ctx, operations.PutAppReplicationConfigurationRequest{
        PutAppReplicationConfigurationRequest: shared.PutAppReplicationConfigurationRequest{
            AppID: sdk.String("aspernatur"),
            ServerGroupReplicationConfigurations: []shared.ServerGroupReplicationConfiguration{
                shared.ServerGroupReplicationConfiguration{
                    ServerGroupID: sdk.String("possimus"),
                    ServerReplicationConfigurations: []shared.ServerReplicationConfiguration{
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("ratione"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("ex"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("laudantium"),
                                    VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                    VMName: sdk.String("dolor"),
                                    VMPath: sdk.String("maiores"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("quasi"),
                                        VMManagerID: sdk.String("ex"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(862192),
                                KmsKeyID: sdk.String("excepturi"),
                                LicenseType: shared.LicenseTypeEnumByol.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(343605),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2020-08-20T04:25:24.387Z"),
                            },
                        },
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("saepe"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("ea"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("impedit"),
                                    VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                    VMName: sdk.String("veniam"),
                                    VMPath: sdk.String("aliquid"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("inventore"),
                                        VMManagerID: sdk.String("magnam"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(407241),
                                KmsKeyID: sdk.String("quo"),
                                LicenseType: shared.LicenseTypeEnumAws.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(926213),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2022-09-04T06:16:53.415Z"),
                            },
                        },
                    },
                },
                shared.ServerGroupReplicationConfiguration{
                    ServerGroupID: sdk.String("eaque"),
                    ServerReplicationConfigurations: []shared.ServerReplicationConfiguration{
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("libero"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("aut"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("aut"),
                                    VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                    VMName: sdk.String("impedit"),
                                    VMPath: sdk.String("aliquam"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("fugit"),
                                        VMManagerID: sdk.String("accusamus"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(79522),
                                KmsKeyID: sdk.String("non"),
                                LicenseType: shared.LicenseTypeEnumAws.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(677412),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2021-05-19T09:22:11.289Z"),
                            },
                        },
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("velit"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("eum"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("autem"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("quas"),
                                    VMPath: sdk.String("assumenda"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("nulla"),
                                        VMManagerID: sdk.String("voluptas"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(727044),
                                KmsKeyID: sdk.String("quasi"),
                                LicenseType: shared.LicenseTypeEnumAws.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(256139),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2022-05-29T22:38:52.265Z"),
                            },
                        },
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("ipsa"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("molestiae"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("magnam"),
                                    VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                    VMName: sdk.String("eius"),
                                    VMPath: sdk.String("esse"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("esse"),
                                        VMManagerID: sdk.String("rem"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(683282),
                                KmsKeyID: sdk.String("reprehenderit"),
                                LicenseType: shared.LicenseTypeEnumByol.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(852635),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2022-07-26T19:04:27.877Z"),
                            },
                        },
                        shared.ServerReplicationConfiguration{
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("suscipit"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("assumenda"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("eos"),
                                    VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                    VMName: sdk.String("quisquam"),
                                    VMPath: sdk.String("veritatis"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("ipsa"),
                                        VMManagerID: sdk.String("id"),
                                    },
                                },
                            },
                            ServerReplicationParameters: &shared.ServerReplicationParameters{
                                Encrypted: sdk.Bool(false),
                                Frequency: sdk.Int64(696997),
                                KmsKeyID: sdk.String("neque"),
                                LicenseType: shared.LicenseTypeEnumByol.ToPointer(),
                                NumberOfRecentAmisToKeep: sdk.Int64(847276),
                                RunOnce: sdk.Bool(false),
                                SeedTime: types.MustTimeFromString("2020-12-15T21:52:54.784Z"),
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.PutAppReplicationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppReplicationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAppReplicationConfigurationResponse != nil {
        // handle response
    }
}
```

## PutAppValidationConfiguration

Creates or updates a validation configuration for the specified application.

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
    res, err := s.SDK.PutAppValidationConfiguration(ctx, operations.PutAppValidationConfigurationRequest{
        PutAppValidationConfigurationRequest: shared.PutAppValidationConfigurationRequest{
            AppID: "debitis",
            AppValidationConfigurations: []shared.AppValidationConfiguration{
                shared.AppValidationConfiguration{
                    AppValidationStrategy: shared.AppValidationStrategyEnumSsm.ToPointer(),
                    Name: sdk.String("Emily Satterfield"),
                    SsmValidationParameters: &shared.SSMValidationParameters{
                        Command: sdk.String("aperiam"),
                        ExecutionTimeoutSeconds: sdk.Int64(715179),
                        InstanceID: sdk.String("quod"),
                        OutputS3BucketName: sdk.String("dignissimos"),
                        ScriptType: shared.ScriptTypeEnumShellScript.ToPointer(),
                        Source: &shared.Source{
                            S3Location: &shared.S3Location{
                                Bucket: sdk.String("nihil"),
                                Key: sdk.String("totam"),
                            },
                        },
                    },
                    ValidationID: sdk.String("accusamus"),
                },
                shared.AppValidationConfiguration{
                    AppValidationStrategy: shared.AppValidationStrategyEnumSsm.ToPointer(),
                    Name: sdk.String("Courtney Mayert"),
                    SsmValidationParameters: &shared.SSMValidationParameters{
                        Command: sdk.String("dolores"),
                        ExecutionTimeoutSeconds: sdk.Int64(645570),
                        InstanceID: sdk.String("molestiae"),
                        OutputS3BucketName: sdk.String("accusantium"),
                        ScriptType: shared.ScriptTypeEnumPowershellScript.ToPointer(),
                        Source: &shared.Source{
                            S3Location: &shared.S3Location{
                                Bucket: sdk.String("eum"),
                                Key: sdk.String("quas"),
                            },
                        },
                    },
                    ValidationID: sdk.String("praesentium"),
                },
            },
            ServerGroupValidationConfigurations: []shared.ServerGroupValidationConfiguration{
                shared.ServerGroupValidationConfiguration{
                    ServerGroupID: sdk.String("deleniti"),
                    ServerValidationConfigurations: []shared.ServerValidationConfiguration{
                        shared.ServerValidationConfiguration{
                            Name: sdk.String("Hubert Gottlieb"),
                            Server: &shared.Server{
                                ReplicationJobID: sdk.String("minima"),
                                ReplicationJobTerminated: sdk.Bool(false),
                                ServerID: sdk.String("nisi"),
                                ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                                VMServer: &shared.VMServer{
                                    VMManagerName: sdk.String("fugit"),
                                    VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                    VMName: sdk.String("consequuntur"),
                                    VMPath: sdk.String("ratione"),
                                    VMServerAddress: &shared.VMServerAddress{
                                        VMID: sdk.String("explicabo"),
                                        VMManagerID: sdk.String("saepe"),
                                    },
                                },
                            },
                            ServerValidationStrategy: shared.ServerValidationStrategyEnumUserdata.ToPointer(),
                            UserDataValidationParameters: &shared.UserDataValidationParameters{
                                ScriptType: shared.ScriptTypeEnumPowershellScript.ToPointer(),
                                Source: &shared.Source{
                                    S3Location: &shared.S3Location{
                                        Bucket: sdk.String("atque"),
                                        Key: sdk.String("et"),
                                    },
                                },
                            },
                            ValidationID: sdk.String("esse"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.PutAppValidationConfigurationXAmzTargetEnumAwsServerMigrationServiceV20161024PutAppValidationConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAppValidationConfigurationResponse != nil {
        // handle response
    }
}
```

## StartAppReplication

Starts replicating the specified application by creating replication jobs for each server in the application.

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
    res, err := s.SDK.StartAppReplication(ctx, operations.StartAppReplicationRequest{
        StartAppReplicationRequest: shared.StartAppReplicationRequest{
            AppID: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.StartAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StartAppReplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAppReplicationResponse != nil {
        // handle response
    }
}
```

## StartOnDemandAppReplication

Starts an on-demand replication run for the specified application.

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
    res, err := s.SDK.StartOnDemandAppReplication(ctx, operations.StartOnDemandAppReplicationRequest{
        StartOnDemandAppReplicationRequest: shared.StartOnDemandAppReplicationRequest{
            AppID: "minima",
            Description: sdk.String("distinctio"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.StartOnDemandAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StartOnDemandAppReplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartOnDemandAppReplicationResponse != nil {
        // handle response
    }
}
```

## StartOnDemandReplicationRun

<p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>

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
    res, err := s.SDK.StartOnDemandReplicationRun(ctx, operations.StartOnDemandReplicationRunRequest{
        StartOnDemandReplicationRunRequest: shared.StartOnDemandReplicationRunRequest{
            Description: sdk.String("consequatur"),
            ReplicationJobID: "minus",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.StartOnDemandReplicationRunXAmzTargetEnumAwsServerMigrationServiceV20161024StartOnDemandReplicationRun,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartOnDemandReplicationRunResponse != nil {
        // handle response
    }
}
```

## StopAppReplication

Stops replicating the specified application by deleting the replication job for each server in the application.

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
    res, err := s.SDK.StopAppReplication(ctx, operations.StopAppReplicationRequest{
        StopAppReplicationRequest: shared.StopAppReplicationRequest{
            AppID: sdk.String("nulla"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.StopAppReplicationXAmzTargetEnumAwsServerMigrationServiceV20161024StopAppReplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopAppReplicationResponse != nil {
        // handle response
    }
}
```

## TerminateApp

Terminates the stack for the specified application.

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
    res, err := s.SDK.TerminateApp(ctx, operations.TerminateAppRequest{
        TerminateAppRequest: shared.TerminateAppRequest{
            AppID: sdk.String("possimus"),
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.TerminateAppXAmzTargetEnumAwsServerMigrationServiceV20161024TerminateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateAppResponse != nil {
        // handle response
    }
}
```

## UpdateApp

Updates the specified application.

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
    res, err := s.SDK.UpdateApp(ctx, operations.UpdateAppRequest{
        UpdateAppRequest: shared.UpdateAppRequest{
            AppID: sdk.String("similique"),
            Description: sdk.String("culpa"),
            Name: sdk.String("Mandy Berge"),
            RoleName: sdk.String("in"),
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: sdk.String("Mrs. Gilberto Roberts"),
                    ServerGroupID: sdk.String("dicta"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("reprehenderit"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("ullam"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("nisi"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("voluptatum"),
                                VMPath: sdk.String("qui"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("quibusdam"),
                                    VMManagerID: sdk.String("ex"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("deleniti"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("itaque"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("dolorum"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("omnis"),
                                VMPath: sdk.String("tenetur"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("quasi"),
                                    VMManagerID: sdk.String("at"),
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: sdk.String("Allison Bednar I"),
                    ServerGroupID: sdk.String("adipisci"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("temporibus"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("accusantium"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("rem"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("laudantium"),
                                VMPath: sdk.String("eum"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("mollitia"),
                                    VMManagerID: sdk.String("ab"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("corrupti"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("non"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("voluptatem"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("occaecati"),
                                VMPath: sdk.String("numquam"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("impedit"),
                                    VMManagerID: sdk.String("explicabo"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("voluptas"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("aut"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("dignissimos"),
                                VMManagerType: shared.VMManagerTypeEnumVsphere.ToPointer(),
                                VMName: sdk.String("maiores"),
                                VMPath: sdk.String("natus"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("velit"),
                                    VMManagerID: sdk.String("voluptatibus"),
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("asperiores"),
                    Value: sdk.String("aperiam"),
                },
                shared.Tag{
                    Key: sdk.String("ea"),
                    Value: sdk.String("quaerat"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateAppXAmzTargetEnumAwsServerMigrationServiceV20161024UpdateApp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAppResponse != nil {
        // handle response
    }
}
```

## UpdateReplicationJob

Updates the specified settings for the specified replication job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateReplicationJob(ctx, operations.UpdateReplicationJobRequest{
        UpdateReplicationJobRequest: shared.UpdateReplicationJobRequest{
            Description: sdk.String("nemo"),
            Encrypted: sdk.Bool(false),
            Frequency: sdk.Int64(65304),
            KmsKeyID: sdk.String("quaerat"),
            LicenseType: shared.LicenseTypeEnumByol.ToPointer(),
            NextReplicationRunStartTime: types.MustTimeFromString("2022-02-19T04:53:13.708Z"),
            NumberOfRecentAmisToKeep: sdk.Int64(70447),
            ReplicationJobID: "adipisci",
            RoleName: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.UpdateReplicationJobXAmzTargetEnumAwsServerMigrationServiceV20161024UpdateReplicationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateReplicationJobResponse != nil {
        // handle response
    }
}
```
