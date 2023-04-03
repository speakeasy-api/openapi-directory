# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExtendedSourceServer` - Create an extended source server in the target Account based on the source server in staging account.
* `createReplicationConfigurationTemplate` - Creates a new ReplicationConfigurationTemplate.
* `deleteJob` - Deletes a single Job by ID.
* `deleteRecoveryInstance` - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* `deleteReplicationConfigurationTemplate` - Deletes a single Replication Configuration Template by ID
* `deleteSourceServer` - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* `describeJobLogItems` - Retrieves a detailed Job log with pagination.
* `describeJobs` - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `describeRecoveryInstances` - Lists all Recovery Instances or multiple Recovery Instances by ID.
* `describeRecoverySnapshots` - Lists all Recovery Snapshots for a single Source Server.
* `describeReplicationConfigurationTemplates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `describeSourceServers` - Lists all Source Servers or multiple Source Servers filtered by ID.
* `disconnectRecoveryInstance` - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `disconnectSourceServer` - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `getFailbackReplicationConfiguration` - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* `getLaunchConfiguration` - Gets a LaunchConfiguration, filtered by Source Server IDs.
* `getReplicationConfiguration` - Gets a ReplicationConfiguration, filtered by Source Server ID.
* `initializeService` - Initialize Elastic Disaster Recovery.
* `listExtensibleSourceServers` - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* `listStagingAccounts` - Returns an array of staging accounts for existing extended source servers.
* `listTagsForResource` - List all tags for your Elastic Disaster Recovery resources.
* `retryDataReplication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
* `reverseReplication` - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* `startFailbackLaunch` - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* `startRecovery` - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* `startReplication` - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* `stopFailback` - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* `stopReplication` - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* `tagResource` - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `terminateRecoveryInstances` - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* `untagResource` - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* `updateFailbackReplicationConfiguration` - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* `updateLaunchConfiguration` - Updates a LaunchConfiguration by Source Server ID.
* `updateReplicationConfiguration` - Allows you to update a ReplicationConfiguration by Source Server ID.
* `updateReplicationConfigurationTemplate` - Updates a ReplicationConfigurationTemplate by ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
