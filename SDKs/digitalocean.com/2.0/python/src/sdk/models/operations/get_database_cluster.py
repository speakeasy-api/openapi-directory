import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDatabaseClusterPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatabaseCluster200ApplicationJSON:
    database: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatabaseCluster401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDatabaseClusterRequest:
    path_params: GetDatabaseClusterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDatabaseClusterResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_database_cluster_200_application_json_object: Optional[GetDatabaseCluster200ApplicationJSON] = dataclasses.field(default=None)
    get_database_cluster_401_application_json_object: Optional[GetDatabaseCluster401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
