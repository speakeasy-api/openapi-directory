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
import org.openapis.openapi.models.operations.ArchiveApplicationRequest;
import org.openapis.openapi.models.operations.ArchiveApplicationRequestBody;
import org.openapis.openapi.models.operations.ArchiveApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ArchiveApplicationRequest req = new ArchiveApplicationRequest(                new ArchiveApplicationRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            ArchiveApplicationResponse res = sdk.archiveApplication(req);

            if (res.application != null) {
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

* [archiveApplication](docs/sdk/README.md#archiveapplication) - Archive application.
* [archiveWave](docs/sdk/README.md#archivewave) - Archive wave.
* [associateApplications](docs/sdk/README.md#associateapplications) - Associate applications to wave.
* [associateSourceServers](docs/sdk/README.md#associatesourceservers) - Associate source servers to application.
* [changeServerLifeCycleState](docs/sdk/README.md#changeserverlifecyclestate) - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* [createApplication](docs/sdk/README.md#createapplication) - Create application.
* [createLaunchConfigurationTemplate](docs/sdk/README.md#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [createReplicationConfigurationTemplate](docs/sdk/README.md#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [createWave](docs/sdk/README.md#createwave) - Create wave.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Delete application.
* [deleteJob](docs/sdk/README.md#deletejob) - Deletes a single Job by ID.
* [deleteLaunchConfigurationTemplate](docs/sdk/README.md#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [deleteReplicationConfigurationTemplate](docs/sdk/README.md#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [deleteSourceServer](docs/sdk/README.md#deletesourceserver) - Deletes a single source server by ID.
* [deleteVcenterClient](docs/sdk/README.md#deletevcenterclient) - Deletes a given vCenter client by ID.
* [deleteWave](docs/sdk/README.md#deletewave) - Delete wave.
* [describeJobLogItems](docs/sdk/README.md#describejoblogitems) - Retrieves detailed job log items with paging.
* [describeJobs](docs/sdk/README.md#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [describeLaunchConfigurationTemplates](docs/sdk/README.md#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [describeReplicationConfigurationTemplates](docs/sdk/README.md#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [describeSourceServers](docs/sdk/README.md#describesourceservers) - Retrieves all SourceServers or multiple SourceServers by ID.
* [describeVcenterClients](docs/sdk/README.md#describevcenterclients) - Returns a list of the installed vCenter clients.
* [disassociateApplications](docs/sdk/README.md#disassociateapplications) - Disassociate applications from wave.
* [disassociateSourceServers](docs/sdk/README.md#disassociatesourceservers) - Disassociate source servers from application.
* [disconnectFromService](docs/sdk/README.md#disconnectfromservice) - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [finalizeCutover](docs/sdk/README.md#finalizecutover) - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [getLaunchConfiguration](docs/sdk/README.md#getlaunchconfiguration) - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* [getReplicationConfiguration](docs/sdk/README.md#getreplicationconfiguration) - Lists all ReplicationConfigurations, filtered by Source Server ID.
* [initializeService](docs/sdk/README.md#initializeservice) - Initialize Application Migration Service.
* [listApplications](docs/sdk/README.md#listapplications) - Retrieves all applications or multiple applications by ID.
* [listExportErrors](docs/sdk/README.md#listexporterrors) - List export errors.
* [listExports](docs/sdk/README.md#listexports) - List exports.
* [listImportErrors](docs/sdk/README.md#listimporterrors) - List import errors.
* [listImports](docs/sdk/README.md#listimports) - List imports.
* [listSourceServerActions](docs/sdk/README.md#listsourceserveractions) - List source server post migration custom actions.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List all tags for your Application Migration Service resources.
* [listTemplateActions](docs/sdk/README.md#listtemplateactions) - List template post migration custom actions.
* [listWaves](docs/sdk/README.md#listwaves) - Retrieves all waves or multiple waves by ID.
* [markAsArchived](docs/sdk/README.md#markasarchived) - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* [putSourceServerAction](docs/sdk/README.md#putsourceserveraction) - Put source server post migration custom action.
* [putTemplateAction](docs/sdk/README.md#puttemplateaction) - Put template post migration custom action.
* [removeSourceServerAction](docs/sdk/README.md#removesourceserveraction) - Remove source server post migration custom action.
* [removeTemplateAction](docs/sdk/README.md#removetemplateaction) - Remove template post migration custom action.
* [retryDataReplication](docs/sdk/README.md#retrydatareplication) - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* [startCutover](docs/sdk/README.md#startcutover) - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* [startExport](docs/sdk/README.md#startexport) - Start export.
* [startImport](docs/sdk/README.md#startimport) - Start import.
* [startReplication](docs/sdk/README.md#startreplication) - Starts replication for SNAPSHOT_SHIPPING agents.
* [startTest](docs/sdk/README.md#starttest) - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [terminateTargetInstances](docs/sdk/README.md#terminatetargetinstances) - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* [unarchiveApplication](docs/sdk/README.md#unarchiveapplication) - Unarchive application.
* [unarchiveWave](docs/sdk/README.md#unarchivewave) - Unarchive wave.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* [updateApplication](docs/sdk/README.md#updateapplication) - Update application.
* [updateLaunchConfiguration](docs/sdk/README.md#updatelaunchconfiguration) - Updates multiple LaunchConfigurations by Source Server ID.
* [updateLaunchConfigurationTemplate](docs/sdk/README.md#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [updateReplicationConfiguration](docs/sdk/README.md#updatereplicationconfiguration) - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* [updateReplicationConfigurationTemplate](docs/sdk/README.md#updatereplicationconfigurationtemplate) - Updates multiple ReplicationConfigurationTemplates by ID.
* [updateSourceServerReplicationType](docs/sdk/README.md#updatesourceserverreplicationtype) - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* [updateWave](docs/sdk/README.md#updatewave) - Update wave.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
