import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetUserPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetUser200ApplicationJSON:
    user: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUser401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetUserRequest:
    path_params: GetUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_user_200_application_json_object: Optional[GetUser200ApplicationJSON] = dataclasses.field(default=None)
    get_user_401_application_json_object: Optional[GetUser401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
