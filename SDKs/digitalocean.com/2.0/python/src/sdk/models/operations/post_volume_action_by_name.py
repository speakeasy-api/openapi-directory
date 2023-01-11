import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PostVolumeActionByNameQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    
class PostVolumeActionByNameRequestBody1TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclasses.dataclass
class PostVolumeActionByNameRequestBody1:
    droplet_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    type: PostVolumeActionByNameRequestBody1TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    region: Optional[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
class PostVolumeActionByNameRequestBody2TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclasses.dataclass
class PostVolumeActionByNameRequestBody2:
    droplet_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    type: PostVolumeActionByNameRequestBody2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    region: Optional[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass_json
@dataclasses.dataclass
class PostVolumeActionByName401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostVolumeActionByNameRequest:
    query_params: PostVolumeActionByNameQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVolumeActionByNameResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_volume_action_by_name_202_application_json_any: Optional[Any] = dataclasses.field(default=None)
    post_volume_action_by_name_401_application_json_object: Optional[PostVolumeActionByName401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
