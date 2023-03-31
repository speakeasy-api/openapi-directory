# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/drs/2020-02-26/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateExtendedSourceServerRequest(
    request_body=operations.CreateExtendedSourceServerRequestBody(
        source_server_arn="corrupti",
        tags={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
)
    
res = s.create_extended_source_server(req)

if res.create_extended_source_server_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_extended_source_server` - Create an extended source server in the target Account based on the source server in staging account.
* `create_replication_configuration_template` - Creates a new ReplicationConfigurationTemplate.
* `delete_job` - Deletes a single Job by ID.
* `delete_recovery_instance` - Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.
* `delete_replication_configuration_template` - Deletes a single Replication Configuration Template by ID
* `delete_source_server` - Deletes a single Source Server by ID. The Source Server must be disconnected first.
* `describe_job_log_items` - Retrieves a detailed Job log with pagination.
* `describe_jobs` - Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
* `describe_recovery_instances` - Lists all Recovery Instances or multiple Recovery Instances by ID.
* `describe_recovery_snapshots` - Lists all Recovery Snapshots for a single Source Server.
* `describe_replication_configuration_templates` - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
* `describe_source_servers` - Lists all Source Servers or multiple Source Servers filtered by ID.
* `disconnect_recovery_instance` - Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `disconnect_source_server` - Disconnects a specific Source Server from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Source Server will be terminated / deleted within 90 minutes. You cannot disconnect a Source Server if it has a Recovery Instance. If the agent on the Source Server has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.
* `get_failback_replication_configuration` - Lists all Failback ReplicationConfigurations, filtered by Recovery Instance ID.
* `get_launch_configuration` - Gets a LaunchConfiguration, filtered by Source Server IDs.
* `get_replication_configuration` - Gets a ReplicationConfiguration, filtered by Source Server ID.
* `initialize_service` - Initialize Elastic Disaster Recovery.
* `list_extensible_source_servers` - Returns a list of source servers on a staging account that are extensible, which means that: a. The source server is not already extended into this Account. b. The source server on the Account we’re reading from is not an extension of another source server. 
* `list_staging_accounts` - Returns an array of staging accounts for existing extended source servers.
* `list_tags_for_resource` - List all tags for your Elastic Disaster Recovery resources.
* `retry_data_replication` - Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
* `reverse_replication` - Start replication to origin / target region - applies only to protected instances that originated in EC2. For recovery instances on target region - starts replication back to origin region. For failback instances on origin region - starts replication to target region to re-protect them. 
* `start_failback_launch` - Initiates a Job for launching the machine that is being failed back to from the specified Recovery Instance. This will run conversion on the failback client and will reboot your machine, thus completing the failback process.
* `start_recovery` - Launches Recovery Instances for the specified Source Servers. For each Source Server you may choose a point in time snapshot to launch from, or use an on demand snapshot.
* `start_replication` - Starts replication for a stopped Source Server. This action would make the Source Server protected again and restart billing for it.
* `stop_failback` - Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.
* `stop_replication` - Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.
* `tag_resource` - Adds or overwrites only the specified tags for the specified Elastic Disaster Recovery resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
* `terminate_recovery_instances` - Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.
* `untag_resource` - Deletes the specified set of tags from the specified set of Elastic Disaster Recovery resources.
* `update_failback_replication_configuration` - Allows you to update the failback replication configuration of a Recovery Instance by ID.
* `update_launch_configuration` - Updates a LaunchConfiguration by Source Server ID.
* `update_replication_configuration` - Allows you to update a ReplicationConfiguration by Source Server ID.
* `update_replication_configuration_template` - Updates a ReplicationConfigurationTemplate by ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
