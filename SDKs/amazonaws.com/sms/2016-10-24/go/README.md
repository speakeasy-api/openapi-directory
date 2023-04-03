# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/sms/2016-10-24/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            ClientToken: "corrupti",
            Description: "provident",
            Name: "distinctio",
            RoleName: "quibusdam",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "nulla",
                    ServerGroupID: "corrupti",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "vel",
                            ReplicationJobTerminated: false,
                            ServerID: "error",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "deserunt",
                                VMManagerType: "SCVMM",
                                VMName: "iure",
                                VMPath: "magnam",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "debitis",
                                    VMManagerID: "ipsa",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "delectus",
                            ReplicationJobTerminated: false,
                            ServerID: "tempora",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "suscipit",
                                VMManagerType: "SCVMM",
                                VMName: "minus",
                                VMPath: "placeat",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptatum",
                                    VMManagerID: "iusto",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "excepturi",
                            ReplicationJobTerminated: false,
                            ServerID: "nisi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "recusandae",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "ab",
                                VMPath: "quis",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "veritatis",
                                    VMManagerID: "deserunt",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "perferendis",
                            ReplicationJobTerminated: false,
                            ServerID: "ipsam",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "repellendus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "quo",
                                VMPath: "odit",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "at",
                                    VMManagerID: "at",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "maiores",
                    ServerGroupID: "molestiae",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "quod",
                            ReplicationJobTerminated: false,
                            ServerID: "esse",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "totam",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "dolorum",
                                VMPath: "dicta",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "nam",
                                    VMManagerID: "officia",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "occaecati",
                            ReplicationJobTerminated: false,
                            ServerID: "fugit",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "deleniti",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "optio",
                                VMPath: "totam",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "beatae",
                                    VMManagerID: "commodi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "molestiae",
                            ReplicationJobTerminated: false,
                            ServerID: "modi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "qui",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "cum",
                                VMPath: "esse",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "ipsum",
                                    VMManagerID: "excepturi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "aspernatur",
                            ReplicationJobTerminated: false,
                            ServerID: "perferendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "ad",
                                VMManagerType: "SCVMM",
                                VMName: "sed",
                                VMPath: "iste",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolor",
                                    VMManagerID: "natus",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "laboriosam",
                    ServerGroupID: "hic",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "fuga",
                            ReplicationJobTerminated: false,
                            ServerID: "in",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "corporis",
                                VMManagerType: "SCVMM",
                                VMName: "iure",
                                VMPath: "saepe",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quidem",
                                    VMManagerID: "architecto",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "ipsa",
                            ReplicationJobTerminated: false,
                            ServerID: "reiciendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "est",
                                VMManagerType: "SCVMM",
                                VMName: "laborum",
                                VMPath: "dolores",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolorem",
                                    VMManagerID: "corporis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "explicabo",
                            ReplicationJobTerminated: false,
                            ServerID: "nobis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "enim",
                                VMManagerType: "SCVMM",
                                VMName: "nemo",
                                VMPath: "minima",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "excepturi",
                                    VMManagerID: "accusantium",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "iure",
                            ReplicationJobTerminated: false,
                            ServerID: "culpa",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "doloribus",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "architecto",
                                VMPath: "mollitia",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "dolorem",
                                    VMManagerID: "culpa",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "repellat",
                    Value: "mollitia",
                },
            },
        },
        XAmzAlgorithm: "occaecati",
        XAmzContentSha256: "numquam",
        XAmzCredential: "commodi",
        XAmzDate: "quam",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "velit",
        XAmzSignedHeaders: "error",
        XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
    }

    ctx := context.Background()
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `CreateReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* `DeleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* `DeleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `DeleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `DeleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `DeleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* `DeleteServerCatalog` - Deletes all servers from your server catalog.
* `DisassociateConnector` - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `GenerateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `GenerateTemplate` - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `GetApp` - Retrieve information about the specified application.
* `GetAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `GetAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `GetAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `GetAppValidationOutput` - Retrieves output from validating an application.
* `GetConnectors` - Describes the connectors registered with the Server Migration Service.
* `GetReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `GetReplicationRuns` - Describes the replication runs for the specified replication job.
* `GetServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `ImportAppCatalog` - Allows application import from Migration Hub.
* `ImportServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `LaunchApp` - Launches the specified application as a stack in CloudFormation.
* `ListApps` - Retrieves summaries for all applications.
* `NotifyAppValidationOutput` - Provides information to Server Migration Service about whether application validation is successful.
* `PutAppLaunchConfiguration` - Creates or updates the launch configuration for the specified application.
* `PutAppReplicationConfiguration` - Creates or updates the replication configuration for the specified application.
* `PutAppValidationConfiguration` - Creates or updates a validation configuration for the specified application.
* `StartAppReplication` - Starts replicating the specified application by creating replication jobs for each server in the application.
* `StartOnDemandAppReplication` - Starts an on-demand replication run for the specified application.
* `StartOnDemandReplicationRun` - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* `StopAppReplication` - Stops replicating the specified application by deleting the replication job for each server in the application.
* `TerminateApp` - Terminates the stack for the specified application.
* `UpdateApp` - Updates the specified application.
* `UpdateReplicationJob` - Updates the specified settings for the specified replication job.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
