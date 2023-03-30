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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "illum",
            Description: "vel",
            Name: "error",
            RoleName: "deserunt",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "iure",
                    ServerGroupID: "magnam",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "ipsa",
                            ReplicationJobTerminated: false,
                            ServerID: "delectus",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "tempora",
                                VMManagerType: "SCVMM",
                                VMName: "molestiae",
                                VMPath: "minus",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "placeat",
                                    VMManagerID: "voluptatum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "iusto",
                            ReplicationJobTerminated: false,
                            ServerID: "excepturi",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "nisi",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "temporibus",
                                VMPath: "ab",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quis",
                                    VMManagerID: "veritatis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "deserunt",
                            ReplicationJobTerminated: false,
                            ServerID: "perferendis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "ipsam",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "sapiente",
                                VMPath: "quo",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "odit",
                                    VMManagerID: "at",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "at",
                            ReplicationJobTerminated: false,
                            ServerID: "maiores",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "molestiae",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "quod",
                                VMPath: "esse",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "porro",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "dolorum",
                    ServerGroupID: "dicta",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "officia",
                            ReplicationJobTerminated: false,
                            ServerID: "occaecati",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "fugit",
                                VMManagerType: "SCVMM",
                                VMName: "hic",
                                VMPath: "optio",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "beatae",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "commodi",
                            ReplicationJobTerminated: false,
                            ServerID: "molestiae",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "modi",
                                VMManagerType: "VSPHERE",
                                VMName: "impedit",
                                VMPath: "cum",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "esse",
                                    VMManagerID: "ipsum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "excepturi",
                            ReplicationJobTerminated: false,
                            ServerID: "aspernatur",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "perferendis",
                                VMManagerType: "VSPHERE",
                                VMName: "natus",
                                VMPath: "sed",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "iste",
                                    VMManagerID: "dolor",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
                shared.Tag{
                    Key: "in",
                    Value: "corporis",
                },
            },
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
