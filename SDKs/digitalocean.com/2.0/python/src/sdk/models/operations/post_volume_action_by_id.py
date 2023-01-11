import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum
from ..shared import onev2_1volumes_1actions_post_requestbody_content_application_1json_schema_anyof_0 as shared_onev2_1volumes_1actions_post_requestbody_content_application_1json_schema_anyof_0
from ..shared import onev2_1volumes_1actions_post_requestbody_content_application_1json_schema_anyof_1 as shared_onev2_1volumes_1actions_post_requestbody_content_application_1json_schema_anyof_1
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PostVolumeActionByIDPathParams:
    volume_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'volume_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVolumeActionByIDQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    
class PostVolumeActionByIDRequestBody3TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclasses.dataclass
class PostVolumeActionByIDRequestBody3:
    size_gigabytes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    type: PostVolumeActionByIDRequestBody3TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    region: Optional[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass_json
@dataclasses.dataclass
class PostVolumeActionByID401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostVolumeActionByIDRequest:
    path_params: PostVolumeActionByIDPathParams = dataclasses.field()
    query_params: PostVolumeActionByIDQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVolumeActionByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_volume_action_by_id_202_application_json_any: Optional[Any] = dataclasses.field(default=None)
    post_volume_action_by_id_401_application_json_object: Optional[PostVolumeActionByID401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
