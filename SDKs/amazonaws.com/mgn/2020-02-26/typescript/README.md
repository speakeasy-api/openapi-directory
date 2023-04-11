# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mgn/2020-02-26/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mgn/2020-02-26/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ArchiveApplicationRequest,
  ArchiveApplicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ArchiveApplicationRequest = {
  requestBody: {
    applicationID: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.archiveApplication(req).then((res: ArchiveApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `archiveApplication` - Archive application.
* `archiveWave` - Archive wave.
* `associateApplications` - Associate applications to wave.
* `associateSourceServers` - Associate source servers to application.
* `changeServerLifeCycleState` - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
* `createApplication` - Create application.
* `createLaunchConfigurationTemplate` - Creates a new Launch Configuration Template.
* `createReplicationConfigurationTemplate` - Creates a new ReplicationConfigurationTemplate.
* `createWave` - Create wave.
* `deleteApplication` - Delete application.
* `deleteJob` - Deletes a single Job by ID.
* `deleteLaunchConfigurationTemplate` - Deletes a single Launch Configuration Template by ID.
* `deleteReplicationConfigurationTemplate` - Deletes a single Replication Configuration Template by ID
* `deleteSourceServer` - Deletes a single source server by ID.
* `deleteVcenterClient` - Deletes a given vCenter client by ID.
* `deleteWave` - Delete wave.
* `describeJobLogItems` - Retrieves detailed job log items with paging.
* `describeJobs` - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `describeLaunchConfigurationTemplates` - Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs
* `describeReplicationConfigurationTemplates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `describeSourceServers` - Retrieves all SourceServers or multiple SourceServers by ID.
* `describeVcenterClients` - Returns a list of the installed vCenter clients.
* `disassociateApplications` - Disassociate applications from wave.
* `disassociateSourceServers` - Disassociate source servers from application.
* `disconnectFromService` - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `finalizeCutover` - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `getLaunchConfiguration` - Lists all LaunchConfigurations available, filtered by Source Server IDs.
* `getReplicationConfiguration` - Lists all ReplicationConfigurations, filtered by Source Server ID.
* `initializeService` - Initialize Application Migration Service.
* `listApplications` - Retrieves all applications or multiple applications by ID.
* `listExportErrors` - List export errors.
* `listExports` - List exports.
* `listImportErrors` - List import errors.
* `listImports` - List imports.
* `listSourceServerActions` - List source server post migration custom actions.
* `listTagsForResource` - List all tags for your Application Migration Service resources.
* `listTemplateActions` - List template post migration custom actions.
* `listWaves` - Retrieves all waves or multiple waves by ID.
* `markAsArchived` - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.
* `putSourceServerAction` - Put source server post migration custom action.
* `putTemplateAction` - Put template post migration custom action.
* `removeSourceServerAction` - Remove source server post migration custom action.
* `removeTemplateAction` - Remove template post migration custom action.
* `retryDataReplication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
* `startCutover` - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
* `startExport` - Start export.
* `startImport` - Start import.
* `startReplication` - Starts replication for SNAPSHOT_SHIPPING agents.
* `startTest` - Launches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
* `tagResource` - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `terminateTargetInstances` - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
* `unarchiveApplication` - Unarchive application.
* `unarchiveWave` - Unarchive wave.
* `untagResource` - Deletes the specified set of tags from the specified set of Application Migration Service resources.
* `updateApplication` - Update application.
* `updateLaunchConfiguration` - Updates multiple LaunchConfigurations by Source Server ID.
* `updateLaunchConfigurationTemplate` - Updates an existing Launch Configuration Template by ID.
* `updateReplicationConfiguration` - Allows you to update multiple ReplicationConfigurations by Source Server ID.
* `updateReplicationConfigurationTemplate` - Updates multiple ReplicationConfigurationTemplates by ID.
* `updateSourceServerReplicationType` - Allows you to change between the AGENT_BASED replication type and the SNAPSHOT_SHIPPING replication type.
* `updateWave` - Update wave.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

