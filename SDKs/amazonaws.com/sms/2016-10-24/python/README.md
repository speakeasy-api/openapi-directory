# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAppRequest(
    headers=operations.CreateAppHeaders(
        x_amz_algorithm="doloremque",
        x_amz_content_sha256="eius",
        x_amz_credential="ut",
        x_amz_date="omnis",
        x_amz_security_token="qui",
        x_amz_signature="voluptate",
        x_amz_signed_headers="quia",
        x_amz_target="AWSServerMigrationService_V2016_10_24.CreateApp",
    ),
    request=shared.CreateAppRequest(
        client_token="voluptates",
        description="voluptatem",
        name="iusto",
        role_name="laudantium",
        server_groups=[
            shared.ServerGroup(
                name="ea",
                server_group_id="qui",
                server_list=[
                    shared.Server(
                        replication_job_id="sapiente",
                        replication_job_terminated=False,
                        server_id="consequatur",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="dolores",
                            vm_manager_type="VSPHERE",
                            vm_name="et",
                            vm_path="harum",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="iusto",
                                vm_manager_id="corporis",
                            ),
                        ),
                    ),
                    shared.Server(
                        replication_job_id="deleniti",
                        replication_job_terminated=True,
                        server_id="tempore",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="amet",
                            vm_manager_type="VSPHERE",
                            vm_name="quia",
                            vm_path="nihil",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="voluptas",
                                vm_manager_id="quidem",
                            ),
                        ),
                    ),
                ],
            ),
            shared.ServerGroup(
                name="quia",
                server_group_id="voluptas",
                server_list=[
                    shared.Server(
                        replication_job_id="earum",
                        replication_job_terminated=True,
                        server_id="est",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="soluta",
                            vm_manager_type="SCVMM",
                            vm_name="explicabo",
                            vm_path="corporis",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="quia",
                                vm_manager_id="sunt",
                            ),
                        ),
                    ),
                    shared.Server(
                        replication_job_id="necessitatibus",
                        replication_job_terminated=True,
                        server_id="voluptatem",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="quia",
                            vm_manager_type="VSPHERE",
                            vm_name="possimus",
                            vm_path="in",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="totam",
                                vm_manager_id="excepturi",
                            ),
                        ),
                    ),
                    shared.Server(
                        replication_job_id="rerum",
                        replication_job_terminated=False,
                        server_id="facilis",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="odio",
                            vm_manager_type="VSPHERE",
                            vm_name="aut",
                            vm_path="consectetur",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="nihil",
                                vm_manager_id="similique",
                            ),
                        ),
                    ),
                ],
            ),
            shared.ServerGroup(
                name="magnam",
                server_group_id="mollitia",
                server_list=[
                    shared.Server(
                        replication_job_id="magnam",
                        replication_job_terminated=False,
                        server_id="et",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="nisi",
                            vm_manager_type="SCVMM",
                            vm_name="quis",
                            vm_path="consequatur",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="qui",
                                vm_manager_id="aut",
                            ),
                        ),
                    ),
                    shared.Server(
                        replication_job_id="modi",
                        replication_job_terminated=False,
                        server_id="quia",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="eligendi",
                            vm_manager_type="HYPERV-MANAGER",
                            vm_name="perspiciatis",
                            vm_path="molestiae",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="voluptatem",
                                vm_manager_id="autem",
                            ),
                        ),
                    ),
                    shared.Server(
                        replication_job_id="sit",
                        replication_job_terminated=False,
                        server_id="molestias",
                        server_type="VIRTUAL_MACHINE",
                        vm_server=shared.VMServer(
                            vm_manager_name="voluptates",
                            vm_manager_type="VSPHERE",
                            vm_name="numquam",
                            vm_path="magni",
                            vm_server_address=shared.VMServerAddress(
                                vm_id="veritatis",
                                vm_manager_id="itaque",
                            ),
                        ),
                    ),
                ],
            ),
        ],
        tags=[
            shared.Tag(
                key="vitae",
                value="quo",
            ),
            shared.Tag(
                key="corrupti",
                value="iusto",
            ),
            shared.Tag(
                key="dolores",
                value="nobis",
            ),
        ],
    ),
)
    
res = s.create_app(req)

if res.create_app_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_app` - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
* `create_replication_job` - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
* `delete_app` - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
* `delete_app_launch_configuration` - Deletes the launch configuration for the specified application.
* `delete_app_replication_configuration` - Deletes the replication configuration for the specified application.
* `delete_app_validation_configuration` - Deletes the validation configuration for the specified application.
* `delete_replication_job` - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
* `delete_server_catalog` - Deletes all servers from your server catalog.
* `disassociate_connector` - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
* `generate_change_set` - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `generate_template` - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
* `get_app` - Retrieve information about the specified application.
* `get_app_launch_configuration` - Retrieves the application launch configuration associated with the specified application.
* `get_app_replication_configuration` - Retrieves the application replication configuration associated with the specified application.
* `get_app_validation_configuration` - Retrieves information about a configuration for validating an application.
* `get_app_validation_output` - Retrieves output from validating an application.
* `get_connectors` - Describes the connectors registered with the AWS SMS.
* `get_replication_jobs` - Describes the specified replication job or all of your replication jobs.
* `get_replication_runs` - Describes the replication runs for the specified replication job.
* `get_servers` - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
* `import_app_catalog` - Allows application import from AWS Migration Hub.
* `import_server_catalog` - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
* `launch_app` - Launches the specified application as a stack in AWS CloudFormation.
* `list_apps` - Retrieves summaries for all applications.
* `notify_app_validation_output` - Provides information to AWS SMS about whether application validation is successful.
* `put_app_launch_configuration` - Creates or updates the launch configuration for the specified application.
* `put_app_replication_configuration` - Creates or updates the replication configuration for the specified application.
* `put_app_validation_configuration` - Creates or updates a validation configuration for the specified application.
* `start_app_replication` - Starts replicating the specified application by creating replication jobs for each server in the application.
* `start_on_demand_app_replication` - Starts an on-demand replication run for the specified application.
* `start_on_demand_replication_run` - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
* `stop_app_replication` - Stops replicating the specified application by deleting the replication job for each server in the application.
* `terminate_app` - Terminates the stack for the specified application.
* `update_app` - Updates the specified application.
* `update_replication_job` - Updates the specified settings for the specified replication job.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
