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
    res, err := s.CreateApp(ctx, operations.CreateAppRequest{
        CreateAppRequest: shared.CreateAppRequest{
            ClientToken: sdk.String("corrupti"),
            Description: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            RoleName: sdk.String("illum"),
            ServerGroups: []shared.ServerGroup{
                shared.ServerGroup{
                    Name: sdk.String("Doug Hoppe"),
                    ServerGroupID: sdk.String("debitis"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("delectus"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("tempora"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("suscipit"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("minus"),
                                VMPath: sdk.String("placeat"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("voluptatum"),
                                    VMManagerID: sdk.String("iusto"),
                                },
                            },
                        },
                    },
                },
                shared.ServerGroup{
                    Name: sdk.String("Charlie Walsh II"),
                    ServerGroupID: sdk.String("veritatis"),
                    ServerList: []shared.Server{
                        shared.Server{
                            ReplicationJobID: sdk.String("perferendis"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("ipsam"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("repellendus"),
                                VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                VMName: sdk.String("quo"),
                                VMPath: sdk.String("odit"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("at"),
                                    VMManagerID: sdk.String("at"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("maiores"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("molestiae"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("quod"),
                                VMManagerType: shared.VMManagerTypeEnumHypervManager.ToPointer(),
                                VMName: sdk.String("esse"),
                                VMPath: sdk.String("totam"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("porro"),
                                    VMManagerID: sdk.String("dolorum"),
                                },
                            },
                        },
                        shared.Server{
                            ReplicationJobID: sdk.String("dicta"),
                            ReplicationJobTerminated: sdk.Bool(false),
                            ServerID: sdk.String("nam"),
                            ServerType: shared.ServerTypeEnumVirtualMachine.ToPointer(),
                            VMServer: &shared.VMServer{
                                VMManagerName: sdk.String("officia"),
                                VMManagerType: shared.VMManagerTypeEnumScvmm.ToPointer(),
                                VMName: sdk.String("fugit"),
                                VMPath: sdk.String("deleniti"),
                                VMServerAddress: &shared.VMServerAddress{
                                    VMID: sdk.String("hic"),
                                    VMManagerID: sdk.String("optio"),
                                },
                            },
                        },
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("beatae"),
                    Value: sdk.String("commodi"),
                },
                shared.Tag{
                    Key: sdk.String("molestiae"),
                    Value: sdk.String("modi"),
                },
                shared.Tag{
                    Key: sdk.String("qui"),
                    Value: sdk.String("impedit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateApp](docs/sdk/README.md#createapp) - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* [CreateReplicationJob](docs/sdk/README.md#createreplicationjob) - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image (AMI).
* [DeleteApp](docs/sdk/README.md#deleteapp) - Deletes the specified application. Optionally deletes the launched stack associated with the application and all Server Migration Service replication jobs for servers in the application.
* [DeleteAppLaunchConfiguration](docs/sdk/README.md#deleteapplaunchconfiguration) - Deletes the launch configuration for the specified application.
* [DeleteAppReplicationConfiguration](docs/sdk/README.md#deleteappreplicationconfiguration) - Deletes the replication configuration for the specified application.
* [DeleteAppValidationConfiguration](docs/sdk/README.md#deleteappvalidationconfiguration) - Deletes the validation configuration for the specified application.
* [DeleteReplicationJob](docs/sdk/README.md#deletereplicationjob) - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. Amazon Web Services deletes the contents of the Amazon S3 bucket used to store Server Migration Service artifacts. The AMIs created by the replication runs are not deleted.</p>
* [DeleteServerCatalog](docs/sdk/README.md#deleteservercatalog) - Deletes all servers from your server catalog.
* [DisassociateConnector](docs/sdk/README.md#disassociateconnector) - <p>Disassociates the specified connector from Server Migration Service.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* [GenerateChangeSet](docs/sdk/README.md#generatechangeset) - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [GenerateTemplate](docs/sdk/README.md#generatetemplate) - Generates an CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* [GetApp](docs/sdk/README.md#getapp) - Retrieve information about the specified application.
* [GetAppLaunchConfiguration](docs/sdk/README.md#getapplaunchconfiguration) - Retrieves the application launch configuration associated with the specified application.
* [GetAppReplicationConfiguration](docs/sdk/README.md#getappreplicationconfiguration) - Retrieves the application replication configuration associated with the specified application.
* [GetAppValidationConfiguration](docs/sdk/README.md#getappvalidationconfiguration) - Retrieves information about a configuration for validating an application.
* [GetAppValidationOutput](docs/sdk/README.md#getappvalidationoutput) - Retrieves output from validating an application.
* [GetConnectors](docs/sdk/README.md#getconnectors) - Describes the connectors registered with the Server Migration Service.
* [GetReplicationJobs](docs/sdk/README.md#getreplicationjobs) - Describes the specified replication job or all of your replication jobs.
* [GetReplicationRuns](docs/sdk/README.md#getreplicationruns) - Describes the replication runs for the specified replication job.
* [GetServers](docs/sdk/README.md#getservers) - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* [ImportAppCatalog](docs/sdk/README.md#importappcatalog) - Allows application import from Migration Hub.
* [ImportServerCatalog](docs/sdk/README.md#importservercatalog) - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* [LaunchApp](docs/sdk/README.md#launchapp) - Launches the specified application as a stack in CloudFormation.
* [ListApps](docs/sdk/README.md#listapps) - Retrieves summaries for all applications.
* [NotifyAppValidationOutput](docs/sdk/README.md#notifyappvalidationoutput) - Provides information to Server Migration Service about whether application validation is successful.
* [PutAppLaunchConfiguration](docs/sdk/README.md#putapplaunchconfiguration) - Creates or updates the launch configuration for the specified application.
* [PutAppReplicationConfiguration](docs/sdk/README.md#putappreplicationconfiguration) - Creates or updates the replication configuration for the specified application.
* [PutAppValidationConfiguration](docs/sdk/README.md#putappvalidationconfiguration) - Creates or updates a validation configuration for the specified application.
* [StartAppReplication](docs/sdk/README.md#startappreplication) - Starts replicating the specified application by creating replication jobs for each server in the application.
* [StartOnDemandAppReplication](docs/sdk/README.md#startondemandappreplication) - Starts an on-demand replication run for the specified application.
* [StartOnDemandReplicationRun](docs/sdk/README.md#startondemandreplicationrun) - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* [StopAppReplication](docs/sdk/README.md#stopappreplication) - Stops replicating the specified application by deleting the replication job for each server in the application.
* [TerminateApp](docs/sdk/README.md#terminateapp) - Terminates the stack for the specified application.
* [UpdateApp](docs/sdk/README.md#updateapp) - Updates the specified application.
* [UpdateReplicationJob](docs/sdk/README.md#updatereplicationjob) - Updates the specified settings for the specified replication job.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
