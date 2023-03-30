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

    req := operations.CreateExtendedSourceServerRequest{
        Headers: operations.CreateExtendedSourceServerHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateExtendedSourceServerRequestBody{
            SourceServerArn: "illum",
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateExtendedSourceServer(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CreateExtendedSourceServer` - Create an extended source server in the target Account based on the source server in staging account.
* `CreateReplicationConfigurationTemplate` - Creates a new ReplicationConfigurationTemplate.
* `DeleteJob` - Deletes a single Job by ID.
* `DeleteRecoveryInstance` - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* `DeleteReplicationConfigurationTemplate` - Deletes a single Replication Configuration Template by ID
* `DeleteSourceServer` - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* `DescribeJobLogItems` - Retrieves a detailed Job log with pagination.
* `DescribeJobs` - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `DescribeRecoveryInstances` - Lists all Recovery Instances or multiple Recovery Instances by ID.
* `DescribeRecoverySnapshots` - Lists all Recovery Snapshots for a single Source Server.
* `DescribeReplicationConfigurationTemplates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `DescribeSourceServers` - Lists all Source Servers or multiple Source Servers filtered by ID.
* `DisconnectRecoveryInstance` - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `DisconnectSourceServer` - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `GetFailbackReplicationConfiguration` - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* `GetLaunchConfiguration` - Gets a LaunchConfiguration, filtered by Source Server IDs.
* `GetReplicationConfiguration` - Gets a ReplicationConfiguration, filtered by Source Server ID.
* `InitializeService` - Initialize Elastic Disaster Recovery.
* `ListExtensibleSourceServers` - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* `ListStagingAccounts` - Returns an array of staging accounts for existing extended source servers.
* `ListTagsForResource` - List all tags for your Elastic Disaster Recovery resources.
* `RetryDataReplication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
* `ReverseReplication` - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* `StartFailbackLaunch` - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* `StartRecovery` - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* `StartReplication` - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* `StopFailback` - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* `StopReplication` - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* `TagResource` - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `TerminateRecoveryInstances` - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* `UntagResource` - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* `UpdateFailbackReplicationConfiguration` - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* `UpdateLaunchConfiguration` - Updates a LaunchConfiguration by Source Server ID.
* `UpdateReplicationConfiguration` - Allows you to update a ReplicationConfiguration by Source Server ID.
* `UpdateReplicationConfigurationTemplate` - Updates a ReplicationConfigurationTemplate by ID.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
