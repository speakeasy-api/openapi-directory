# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mgn/2020-02-26/go
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
    res, err := s.ArchiveApplication(ctx, operations.ArchiveApplicationRequest{
        RequestBody: operations.ArchiveApplicationRequestBody{
            ApplicationID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ArchiveApplication](docs/sdk/README.md#archiveapplication) - Archive application.
* [ArchiveWave](docs/sdk/README.md#archivewave) - Archive wave.
* [AssociateApplications](docs/sdk/README.md#associateapplications) - Associate applications to wave.
* [AssociateSourceServers](docs/sdk/README.md#associatesourceservers) - Associate source servers to application.
* [ChangeServerLifeCycleState](docs/sdk/README.md#changeserverlifecyclestate) - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* [CreateApplication](docs/sdk/README.md#createapplication) - Create application.
* [CreateLaunchConfigurationTemplate](docs/sdk/README.md#createlaunchconfigurationtemplate) - Creates a new Launch Configuration Template.
* [CreateReplicationConfigurationTemplate](docs/sdk/README.md#createreplicationconfigurationtemplate) - Creates a new ReplicationConfigurationTemplate.
* [CreateWave](docs/sdk/README.md#createwave) - Create wave.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Delete application.
* [DeleteJob](docs/sdk/README.md#deletejob) - Deletes a single Job by ID.
* [DeleteLaunchConfigurationTemplate](docs/sdk/README.md#deletelaunchconfigurationtemplate) - Deletes a single Launch Configuration Template by ID.
* [DeleteReplicationConfigurationTemplate](docs/sdk/README.md#deletereplicationconfigurationtemplate) - Deletes a single Replication Configuration Template by ID
* [DeleteSourceServer](docs/sdk/README.md#deletesourceserver) - Deletes a single source server by ID.
* [DeleteVcenterClient](docs/sdk/README.md#deletevcenterclient) - Deletes a given vCenter client by ID.
* [DeleteWave](docs/sdk/README.md#deletewave) - Delete wave.
* [DescribeJobLogItems](docs/sdk/README.md#describejoblogitems) - Retrieves detailed job log items with paging.
* [DescribeJobs](docs/sdk/README.md#describejobs) - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* [DescribeLaunchConfigurationTemplates](docs/sdk/README.md#describelaunchconfigurationtemplates) - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* [DescribeReplicationConfigurationTemplates](docs/sdk/README.md#describereplicationconfigurationtemplates) - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* [DescribeSourceServers](docs/sdk/README.md#describesourceservers) - Retrieves all SourceServers or multiple SourceServers by ID.
* [DescribeVcenterClients](docs/sdk/README.md#describevcenterclients) - Returns a list of the installed vCenter clients.
* [DisassociateApplications](docs/sdk/README.md#disassociateapplications) - Disassociate applications from wave.
* [DisassociateSourceServers](docs/sdk/README.md#disassociatesourceservers) - Disassociate source servers from application.
* [DisconnectFromService](docs/sdk/README.md#disconnectfromservice) - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [FinalizeCutover](docs/sdk/README.md#finalizecutover) - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* [GetLaunchConfiguration](docs/sdk/README.md#getlaunchconfiguration) - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* [GetReplicationConfiguration](docs/sdk/README.md#getreplicationconfiguration) - Lists all ReplicationConfigurations, filtered by Source Server ID.
* [InitializeService](docs/sdk/README.md#initializeservice) - Initialize Application Migration Service.
* [ListApplications](docs/sdk/README.md#listapplications) - Retrieves all applications or multiple applications by ID.
* [ListExportErrors](docs/sdk/README.md#listexporterrors) - List export errors.
* [ListExports](docs/sdk/README.md#listexports) - List exports.
* [ListImportErrors](docs/sdk/README.md#listimporterrors) - List import errors.
* [ListImports](docs/sdk/README.md#listimports) - List imports.
* [ListSourceServerActions](docs/sdk/README.md#listsourceserveractions) - List source server post migration custom actions.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List all tags for your Application Migration Service resources.
* [ListTemplateActions](docs/sdk/README.md#listtemplateactions) - List template post migration custom actions.
* [ListWaves](docs/sdk/README.md#listwaves) - Retrieves all waves or multiple waves by ID.
* [MarkAsArchived](docs/sdk/README.md#markasarchived) - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* [PutSourceServerAction](docs/sdk/README.md#putsourceserveraction) - Put source server post migration custom action.
* [PutTemplateAction](docs/sdk/README.md#puttemplateaction) - Put template post migration custom action.
* [RemoveSourceServerAction](docs/sdk/README.md#removesourceserveraction) - Remove source server post migration custom action.
* [RemoveTemplateAction](docs/sdk/README.md#removetemplateaction) - Remove template post migration custom action.
* [RetryDataReplication](docs/sdk/README.md#retrydatareplication) - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* [StartCutover](docs/sdk/README.md#startcutover) - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* [StartExport](docs/sdk/README.md#startexport) - Start export.
* [StartImport](docs/sdk/README.md#startimport) - Start import.
* [StartReplication](docs/sdk/README.md#startreplication) - Starts replication for SNAPSHOT_SHIPPING agents.
* [StartTest](docs/sdk/README.md#starttest) - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* [TagResource](docs/sdk/README.md#tagresource) - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* [TerminateTargetInstances](docs/sdk/README.md#terminatetargetinstances) - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* [UnarchiveApplication](docs/sdk/README.md#unarchiveapplication) - Unarchive application.
* [UnarchiveWave](docs/sdk/README.md#unarchivewave) - Unarchive wave.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Update application.
* [UpdateLaunchConfiguration](docs/sdk/README.md#updatelaunchconfiguration) - Updates multiple LaunchConfigurations by Source Server ID.
* [UpdateLaunchConfigurationTemplate](docs/sdk/README.md#updatelaunchconfigurationtemplate) - Updates an existing Launch Configuration Template by ID.
* [UpdateReplicationConfiguration](docs/sdk/README.md#updatereplicationconfiguration) - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* [UpdateReplicationConfigurationTemplate](docs/sdk/README.md#updatereplicationconfigurationtemplate) - Updates multiple ReplicationConfigurationTemplates by ID.
* [UpdateSourceServerReplicationType](docs/sdk/README.md#updatesourceserverreplicationtype) - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* [UpdateWave](docs/sdk/README.md#updatewave) - Update wave.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
