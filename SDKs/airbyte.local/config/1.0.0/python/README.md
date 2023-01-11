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
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateConnectionRequest(
    request=shared.ConnectionCreate(
        destination_id="sed",
        name="officiis",
        namespace_definition="destination",
        namespace_format="consectetur",
        operation_ids=[
            "odio",
        ],
        prefix="qui",
        resource_requirements=shared.ResourceRequirements(
            cpu_limit="recusandae",
            cpu_request="at",
            memory_limit="ipsum",
            memory_request="eveniet",
        ),
        schedule=shared.ConnectionSchedule(
            time_unit="months",
            units=7338728586234333996,
        ),
        source_id="inventore",
        status="deprecated",
        sync_catalog=shared.AirbyteCatalog(
            streams=[
                shared.AirbyteStreamAndConfiguration(
                    config=shared.AirbyteStreamConfiguration(
                        alias_name="aut",
                        cursor_field=[
                            "tempore",
                        ],
                        destination_sync_mode="append",
                        primary_key=[
                            [
                                "beatae",
                                "veritatis",
                            ],
                            [
                                "et",
                                "omnis",
                                "ipsum",
                            ],
                            [
                                "dolores",
                            ],
                        ],
                        selected=True,
                        sync_mode="full_refresh",
                    ),
                    stream=shared.AirbyteStream(
                        default_cursor_field=[
                            "mollitia",
                            "voluptas",
                            "quam",
                        ],
                        json_schema={
                            "qui": "qui",
                        },
                        name="unde",
                        namespace="in",
                        source_defined_cursor=False,
                        source_defined_primary_key=[
                            [
                                "itaque",
                                "ab",
                                "neque",
                            ],
                        ],
                        supported_sync_modes=[
                            "full_refresh",
                            "full_refresh",
                            "full_refresh",
                        ],
                    ),
                ),
                shared.AirbyteStreamAndConfiguration(
                    config=shared.AirbyteStreamConfiguration(
                        alias_name="architecto",
                        cursor_field=[
                            "velit",
                        ],
                        destination_sync_mode="overwrite",
                        primary_key=[
                            [
                                "voluptates",
                                "magni",
                            ],
                        ],
                        selected=False,
                        sync_mode="incremental",
                    ),
                    stream=shared.AirbyteStream(
                        default_cursor_field=[
                            "earum",
                        ],
                        json_schema={
                            "omnis": "ut",
                        },
                        name="consequatur",
                        namespace="dolor",
                        source_defined_cursor=True,
                        source_defined_primary_key=[
                            [
                                "consectetur",
                            ],
                        ],
                        supported_sync_modes=[
                            "incremental",
                        ],
                    ),
                ),
                shared.AirbyteStreamAndConfiguration(
                    config=shared.AirbyteStreamConfiguration(
                        alias_name="laboriosam",
                        cursor_field=[
                            "a",
                            "soluta",
                            "aut",
                        ],
                        destination_sync_mode="append_dedup",
                        primary_key=[
                            [
                                "autem",
                            ],
                            [
                                "expedita",
                            ],
                            [
                                "perferendis",
                            ],
                        ],
                        selected=False,
                        sync_mode="incremental",
                    ),
                    stream=shared.AirbyteStream(
                        default_cursor_field=[
                            "explicabo",
                            "ea",
                            "maxime",
                        ],
                        json_schema={
                            "perferendis": "et",
                        },
                        name="rerum",
                        namespace="reiciendis",
                        source_defined_cursor=False,
                        source_defined_primary_key=[
                            [
                                "necessitatibus",
                            ],
                            [
                                "quis",
                                "eum",
                            ],
                        ],
                        supported_sync_modes=[
                            "incremental",
                        ],
                    ),
                ),
            ],
        ),
    ),
)
    
res = s.connection.create_connection(req)

if res.connection_read is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### connection

* `create_connection` - Create a connection between a source and a destination
* `delete_connection` - Delete a connection
* `get_connection` - Get a connection
* `get_state` - Fetch the current state for a connection.
* `list_connections_for_workspace` - Returns all connections for a workspace.
* `reset_connection` - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
* `sync_connection` - Trigger a manual sync of the connection
* `update_connection` - Update a connection

### deployment

* `export_archive` - Export Airbyte Configuration and Data Archive
* `import_archive` - Import Airbyte Configuration and Data Archive

### destination

* `check_connection_to_destination` - Check connection to the destination
* `check_connection_to_destination_for_update` - Check connection for a proposed update to a destination
* `create_destination` - Create a destination
* `delete_destination` - Delete the destination
* `get_destination` - Get configured destination
* `list_destinations_for_workspace` - List configured destinations for a workspace
* `update_destination` - Update a destination

### destination_definition

* `create_destination_definition` - Creates a destinationsDefinition
* `get_destination_definition` - Get destinationDefinition
* `list_destination_definitions` - List all the destinationDefinitions the current Airbyte deployment is configured to use
* `list_latest_destination_definitions` - List the latest destinationDefinitions Airbyte supports
* `update_destination_definition` - Update destinationDefinition

### destination_definition_specification

* `get_destination_definition_specification` - Get specification for a destinationDefinition

### health

* `get_health_check` - Health Check

### jobs

* `cancel_job` - Cancels a job
* `get_job_info` - Get information about a job
* `list_jobs_for` - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### logs

* `get_logs` - Get logs

### notifications

* `try_notification_config` - Try sending a notifications

### openapi

* `get_open_api_spec` - Returns the openapi specification

### operation

* `check_operation` - Check if an operation to be created is valid
* `create_operation` - Create an operation to be applied as part of a connection pipeline
* `delete_operation` - Delete an operation
* `get_operation` - Returns an operation
* `list_operations_for_connection` - Returns all operations for a connection.
* `update_operation` - Update an operation

### scheduler

* `execute_destination_check_connection` - Run check connection for a given destination configuration
* `execute_source_check_connection` - Run check connection for a given source configuration
* `execute_source_discover_schema` - Run discover schema for a given source a source configuration

### source

* `check_connection_to_source` - Check connection to the source
* `check_connection_to_source_for_update` - Check connection for a proposed update to a source
* `create_source` - Create a source
* `delete_source` - Delete a source
* `discover_schema_for_source` - Discover the schema catalog of the source
* `get_source` - Get source
* `list_sources_for_workspace` - List sources for workspace
* `update_source` - Update a source

### source_definition

* `create_source_definition` - Creates a sourceDefinition
* `get_source_definition` - Get source
* `list_latest_source_definitions` - List the latest sourceDefinitions Airbyte supports
* `list_source_definitions` - List all the sourceDefinitions the current Airbyte deployment is configured to use
* `update_source_definition` - Update a sourceDefinition

### source_definition_specification

* `get_source_definition_specification` - Get specification for a SourceDefinition.

### web_backend

* `web_backend_create_connection` - Create a connection
* `web_backend_get_connection` - Get a connection
* `web_backend_list_connections_for_workspace` - Returns all connections for a workspace.
* `web_backend_recreate_destination` - Recreate a destination
* `web_backend_recreate_source` - Recreate a source
* `web_backend_update_connection` - Update a connection

### workspace

* `create_workspace` - Creates a workspace
* `delete_workspace` - Deletes a workspace
* `get_workspace` - Find workspace by ID
* `get_workspace_by_slug` - Find workspace by slug
* `list_workspaces` - List all workspaces registered in the current Airbyte deployment
* `update_workspace` - Update workspace state

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
