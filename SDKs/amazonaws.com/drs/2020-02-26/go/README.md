# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/drs/2020-02-26/go
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
    res, err := s.CreateExtendedSourceServer(ctx, operations.CreateExtendedSourceServerRequest{
        RequestBody: operations.CreateExtendedSourceServerRequestBody{
            SourceServerArn: "corrupti",
            Tags: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExtendedSourceServerResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateExtendedSourceServer](docs/sdk/README.md#createextendedsourceserver) - Create an extended source server in the target Account based on the source server in staging account.
* [CreateLaunchConfigurationTemplate](docs/sdk/README.md#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [CreateReplicationConfigurationTemplate](docs/sdk/README.md#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [DeleteJob](docs/sdk/README.md#deletejob) - Deletes a single Job by ID.
* [DeleteLaunchConfigurationTemplate](docs/sdk/README.md#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [DeleteRecoveryInstance](docs/sdk/README.md#deleterecoveryinstance) - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* [DeleteReplicationConfigurationTemplate](docs/sdk/README.md#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [DeleteSourceServer](docs/sdk/README.md#deletesourceserver) - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* [DescribeJobLogItems](docs/sdk/README.md#describejoblogitems) - Retrieves a detailed Job log with pagination.
* [DescribeJobs](docs/sdk/README.md#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [DescribeLaunchConfigurationTemplates](docs/sdk/README.md#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [DescribeRecoveryInstances](docs/sdk/README.md#describerecoveryinstances) - Lists all Recovery Instances or multiple Recovery Instances by ID.
* [DescribeRecoverySnapshots](docs/sdk/README.md#describerecoverysnapshots) - Lists all Recovery Snapshots for a single Source Server.
* [DescribeReplicationConfigurationTemplates](docs/sdk/README.md#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [DescribeSourceServers](docs/sdk/README.md#describesourceservers) - Lists all Source Servers or multiple Source Servers filtered by ID.
* [DisconnectRecoveryInstance](docs/sdk/README.md#disconnectrecoveryinstance) - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [DisconnectSourceServer](docs/sdk/README.md#disconnectsourceserver) - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [GetFailbackReplicationConfiguration](docs/sdk/README.md#getfailbackreplicationconfiguration) - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* [GetLaunchConfiguration](docs/sdk/README.md#getlaunchconfiguration) - Gets a LaunchConfiguration, filtered by Source Server IDs.
* [GetReplicationConfiguration](docs/sdk/README.md#getreplicationconfiguration) - Gets a ReplicationConfiguration, filtered by Source Server ID.
* [InitializeService](docs/sdk/README.md#initializeservice) - Initialize Elastic Disaster Recovery.
* [ListExtensibleSourceServers](docs/sdk/README.md#listextensiblesourceservers) - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* [ListStagingAccounts](docs/sdk/README.md#liststagingaccounts) - Returns an array of staging accounts for existing extended source servers.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List all tags for your Elastic Disaster Recovery resources.
* [~~RetryDataReplication~~](docs/sdk/README.md#retrydatareplication) - WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.  :warning: **Deprecated**
* [ReverseReplication](docs/sdk/README.md#reversereplication) - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* [StartFailbackLaunch](docs/sdk/README.md#startfailbacklaunch) - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* [StartRecovery](docs/sdk/README.md#startrecovery) - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* [StartReplication](docs/sdk/README.md#startreplication) - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* [StopFailback](docs/sdk/README.md#stopfailback) - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* [StopReplication](docs/sdk/README.md#stopreplication) - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [TerminateRecoveryInstances](docs/sdk/README.md#terminaterecoveryinstances) - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* [UpdateFailbackReplicationConfiguration](docs/sdk/README.md#updatefailbackreplicationconfiguration) - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* [UpdateLaunchConfiguration](docs/sdk/README.md#updatelaunchconfiguration) - Updates a LaunchConfiguration by Source Server ID.
* [UpdateLaunchConfigurationTemplate](docs/sdk/README.md#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [UpdateReplicationConfiguration](docs/sdk/README.md#updatereplicationconfiguration) - Allows you to update a ReplicationConfiguration by Source Server ID.
* [UpdateReplicationConfigurationTemplate](docs/sdk/README.md#updatereplicationconfigurationtemplate) - Updates a ReplicationConfigurationTemplate by ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
