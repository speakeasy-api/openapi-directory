import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class DeleteConnectionPoolPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    pool_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pool_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteConnectionPool401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class DeleteConnectionPoolRequest:
    path_params: DeleteConnectionPoolPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConnectionPoolResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_connection_pool_401_application_json_object: Optional[DeleteConnectionPool401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
