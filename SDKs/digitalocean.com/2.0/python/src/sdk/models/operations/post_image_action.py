import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items as shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items


@dataclasses.dataclass
class PostImageActionPathParams:
    image_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    
class PostImageActionRequestBody1TypeEnum(str, Enum):
    CONVERT = "convert"
    TRANSFER = "transfer"


@dataclass_json
@dataclasses.dataclass
class PostImageActionRequestBody1:
    type: PostImageActionRequestBody1TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostImageActionRequestBody2TypeEnum(str, Enum):
    CONVERT = "convert"
    TRANSFER = "transfer"


@dataclass_json
@dataclasses.dataclass
class PostImageActionRequestBody2:
    region: shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    type: PostImageActionRequestBody2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostImageAction401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostImageActionRequest:
    path_params: PostImageActionPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostImageActionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_image_action_401_application_json_object: Optional[PostImageAction401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1actions_get_responses_200_content_application_1json_schema_all_of_0_properties_actions_items: Optional[shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems] = dataclasses.field(default=None)
    
