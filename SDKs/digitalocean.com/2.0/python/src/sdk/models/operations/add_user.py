import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class AddUserPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddUser201ApplicationJSON:
    user: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class AddUser401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AddUserRequest:
    path_params: AddUserPathParams = dataclasses.field()
    request: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items_properties_users_items.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_user_201_application_json_object: Optional[AddUser201ApplicationJSON] = dataclasses.field(default=None)
    add_user_401_application_json_object: Optional[AddUser401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
