# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequest;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerRequestBody;
import org.openapis.openapi.models.operations.CreateExtendedSourceServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExtendedSourceServerRequest req = new CreateExtendedSourceServerRequest(                new CreateExtendedSourceServerRequestBody("provident") {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }};
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateExtendedSourceServerResponse res = sdk.createExtendedSourceServer(req);

            if (res.createExtendedSourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createExtendedSourceServer](docs/sdk/README.md#createextendedsourceserver) - Create an extended source server in the target Account based on the source server in staging account.
* [createLaunchConfigurationTemplate](docs/sdk/README.md#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](docs/sdk/README.md#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [deleteJob](docs/sdk/README.md#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](docs/sdk/README.md#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteRecoveryInstance](docs/sdk/README.md#deleterecoveryinstance) - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* [deleteReplicationConfigurationTemplate](docs/sdk/README.md#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](docs/sdk/README.md#deletesourceserver) - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* [describeJobLogItems](docs/sdk/README.md#describejoblogitems) - Retrieves a detailed Job log with pagination.
* [describeJobs](docs/sdk/README.md#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](docs/sdk/README.md#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeRecoveryInstances](docs/sdk/README.md#describerecoveryinstances) - Lists all Recovery Instances or multiple Recovery Instances by ID.
* [describeRecoverySnapshots](docs/sdk/README.md#describerecoverysnapshots) - Lists all Recovery Snapshots for a single Source Server.
* [describeReplicationConfigurationTemplates](docs/sdk/README.md#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](docs/sdk/README.md#describesourceservers) - Lists all Source Servers or multiple Source Servers filtered by ID.
* [disconnectRecoveryInstance](docs/sdk/README.md#disconnectrecoveryinstance) - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [disconnectSourceServer](docs/sdk/README.md#disconnectsourceserver) - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getFailbackReplicationConfiguration](docs/sdk/README.md#getfailbackreplicationconfiguration) - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* [getLaunchConfiguration](docs/sdk/README.md#getlaunchconfiguration) - Gets a LaunchConfiguration, filtered by Source Server IDs.
* [getReplicationConfiguration](docs/sdk/README.md#getreplicationconfiguration) - Gets a ReplicationConfiguration, filtered by Source Server ID.
* [initializeService](docs/sdk/README.md#initializeservice) - Initialize Elastic Disaster Recovery.
* [listExtensibleSourceServers](docs/sdk/README.md#listextensiblesourceservers) - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* [listStagingAccounts](docs/sdk/README.md#liststagingaccounts) - Returns an array of staging accounts for existing extended source servers.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List all tags for your Elastic Disaster Recovery resources.
* [~~retryDataReplication~~](docs/sdk/README.md#retrydatareplication) - WARNING: RetryDataReplication is deprecated. Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.  :warning: **Deprecated**
* [reverseReplication](docs/sdk/README.md#reversereplication) - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* [startFailbackLaunch](docs/sdk/README.md#startfailbacklaunch) - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* [startRecovery](docs/sdk/README.md#startrecovery) - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* [startReplication](docs/sdk/README.md#startreplication) - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* [stopFailback](docs/sdk/README.md#stopfailback) - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* [stopReplication](docs/sdk/README.md#stopreplication) - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateRecoveryInstances](docs/sdk/README.md#terminaterecoveryinstances) - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* [updateFailbackReplicationConfiguration](docs/sdk/README.md#updatefailbackreplicationconfiguration) - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* [updateLaunchConfiguration](docs/sdk/README.md#updatelaunchconfiguration) - Updates a LaunchConfiguration by Source Server ID.
* [updateLaunchConfigurationTemplate](docs/sdk/README.md#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](docs/sdk/README.md#updatereplicationconfiguration) - Allows you to update a ReplicationConfiguration by Source Server ID.
* [updateReplicationConfigurationTemplate](docs/sdk/README.md#updatereplicationconfigurationtemplate) - Updates a ReplicationConfigurationTemplate by ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
