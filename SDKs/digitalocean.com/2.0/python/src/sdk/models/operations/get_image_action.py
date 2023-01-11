import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items as shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items


@dataclasses.dataclass
class GetImageActionPathParams:
    action_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'action_id', 'style': 'simple', 'explode': False }})
    image_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetImageAction401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetImageActionRequest:
    path_params: GetImageActionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImageActionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_image_action_401_application_json_object: Optional[GetImageAction401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1actions_get_responses_200_content_application_1json_schema_all_of_0_properties_actions_items: Optional[shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems] = dataclasses.field(default=None)
    
