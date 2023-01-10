# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "doloremque",
            XAmzContentSha256: "eius",
            XAmzCredential: "ut",
            XAmzDate: "omnis",
            XAmzSecurityToken: "qui",
            XAmzSignature: "voluptate",
            XAmzSignedHeaders: "quia",
            XAmzTarget: "AWSServerMigrationService_V2016_10_24.CreateApp",
        },
        Request: shared.CreateAppRequest{
            ClientToken: "voluptates",
            Description: "voluptatem",
            Name: "iusto",
            RoleName: "laudantium",
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: "ea",
                    ServerGroupID: "qui",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "sapiente",
                            ReplicationJobTerminated: false,
                            ServerID: "consequatur",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "dolores",
                                VMManagerType: "VSPHERE",
                                VMName: "et",
                                VMPath: "harum",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "iusto",
                                    VMManagerID: "corporis",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "deleniti",
                            ReplicationJobTerminated: true,
                            ServerID: "tempore",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "amet",
                                VMManagerType: "VSPHERE",
                                VMName: "quia",
                                VMPath: "nihil",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptas",
                                    VMManagerID: "quidem",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "quia",
                    ServerGroupID: "voluptas",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "earum",
                            ReplicationJobTerminated: true,
                            ServerID: "est",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "soluta",
                                VMManagerType: "SCVMM",
                                VMName: "explicabo",
                                VMPath: "corporis",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "quia",
                                    VMManagerID: "sunt",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "necessitatibus",
                            ReplicationJobTerminated: true,
                            ServerID: "voluptatem",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "quia",
                                VMManagerType: "VSPHERE",
                                VMName: "possimus",
                                VMPath: "in",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "totam",
                                    VMManagerID: "excepturi",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "rerum",
                            ReplicationJobTerminated: false,
                            ServerID: "facilis",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "odio",
                                VMManagerType: "VSPHERE",
                                VMName: "aut",
                                VMPath: "consectetur",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "nihil",
                                    VMManagerID: "similique",
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: "magnam",
                    ServerGroupID: "mollitia",
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: "magnam",
                            ReplicationJobTerminated: false,
                            ServerID: "et",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "nisi",
                                VMManagerType: "SCVMM",
                                VMName: "quis",
                                VMPath: "consequatur",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "qui",
                                    VMManagerID: "aut",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "modi",
                            ReplicationJobTerminated: false,
                            ServerID: "quia",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "eligendi",
                                VMManagerType: "HYPERV-MANAGER",
                                VMName: "perspiciatis",
                                VMPath: "molestiae",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "voluptatem",
                                    VMManagerID: "autem",
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: "sit",
                            ReplicationJobTerminated: false,
                            ServerID: "molestias",
                            ServerType: "VIRTUAL_MACHINE",
                            VMServer: &shared.VMServer{
                                VMManagerName: "voluptates",
                                VMManagerType: "VSPHERE",
                                VMName: "numquam",
                                VMPath: "magni",
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: "veritatis",
                                    VMManagerID: "itaque",
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vitae",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "dolores",
                    Value: "nobis",
                },
            },
        },
    }
    
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateApp` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `CreateReplicationJob` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
* `DeleteApp` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
* `DeleteAppLaunchConfiguration` - Deletes the launch configuration for the specified application.
* `DeleteAppReplicationConfiguration` - Deletes the replication configuration for the specified application.
* `DeleteAppValidationConfiguration` - Deletes the validation configuration for the specified application.
* `DeleteReplicationJob` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
* `DeleteServerCatalog` - Deletes all servers from your server catalog.
* `DisassociateConnector` - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `GenerateChangeSet` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `GenerateTemplate` - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `GetApp` - Retrieve information about the specified application.
* `GetAppLaunchConfiguration` - Retrieves the application launch configuration associated with the specified application.
* `GetAppReplicationConfiguration` - Retrieves the application replication configuration associated with the specified application.
* `GetAppValidationConfiguration` - Retrieves information about a configuration for validating an application.
* `GetAppValidationOutput` - Retrieves output from validating an application.
* `GetConnectors` - Describes the connectors registered with the AWS SMS.
* `GetReplicationJobs` - Describes the specified replication job or all of your replication jobs.
* `GetReplicationRuns` - Describes the replication runs for the specified replication job.
* `GetServers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `ImportAppCatalog` - Allows application import from AWS Migration Hub.
* `ImportServerCatalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `LaunchApp` - Launches the specified application as a stack in AWS CloudFormation.
* `ListApps` - Retrieves summaries for all applications.
* `NotifyAppValidationOutput` - Provides information to AWS SMS about whether application validation is successful.
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
