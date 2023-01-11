import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1dbs_get_responses_200_content_application_1json_schema_properties_dbs_items as shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1dbs_get_responses_200_content_application_1json_schema_properties_dbs_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDatabasePathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    database_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatabase200ApplicationJSON:
    db: shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1dbs_get_responses_200_content_application_1json_schema_properties_dbs_items.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDatabase401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDatabaseRequest:
    path_params: GetDatabasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDatabaseResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_database_200_application_json_object: Optional[GetDatabase200ApplicationJSON] = dataclasses.field(default=None)
    get_database_401_application_json_object: Optional[GetDatabase401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
