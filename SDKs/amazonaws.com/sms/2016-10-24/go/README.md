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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "nihil",
            Description: "fuga",
            Name: "facilis",
            RoleName: "eum",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "ullam",
                    ServerGroupID: "saepe",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "sapiente",
                            ReplicationJobTerminated: false,
                            ServerID: "enim",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptatum",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "vel",
                                VMPath: "non",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "deleniti",
                                    VMManagerID: "similique",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "reprehenderit",
                    ServerGroupID: "molestiae",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "quasi",
                            ReplicationJobTerminated: false,
                            ServerID: "laboriosam",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "est",
                                VMManagerType: "VSPHERE",
                                VMName: "consequatur",
                                VMPath: "fugiat",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "a",
                                    VMManagerID: "omnis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "eos",
                            ReplicationJobTerminated: false,
                            ServerID: "accusamus",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "reiciendis",
                                VMManagerType: "SCVMM",
                                VMName: "quibusdam",
                                VMPath: "et",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "praesentium",
                                    VMManagerID: "occaecati",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "dolor",
                            ReplicationJobTerminated: false,
                            ServerID: "soluta",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "quisquam",
                                VMManagerType: "SCVMM",
                                VMName: "culpa",
                                VMPath: "qui",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "sed",
                                    VMManagerID: "rerum",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "possimus",
                            ReplicationJobTerminated: false,
                            ServerID: "occaecati",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "esse",
                                VMManagerType: "SCVMM",
                                VMName: "voluptatem",
                                VMPath: "amet",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "est",
                                    VMManagerID: "id",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "numquam",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "dolores",
                    Value: "sit",
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
