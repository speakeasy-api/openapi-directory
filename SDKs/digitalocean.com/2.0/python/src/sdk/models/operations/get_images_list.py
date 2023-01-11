import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class GetImagesListTypeEnum(str, Enum):
    APPLICATION = "application"
    DISTRIBUTION = "distribution"


@dataclasses.dataclass
class GetImagesListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'private', 'style': 'form', 'explode': True }})
    tag_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag_name', 'style': 'form', 'explode': True }})
    type: Optional[GetImagesListTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList200ApplicationJSONMeta:
    r"""GetImagesList200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList200ApplicationJSON:
    images: list[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    meta: GetImagesList200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    links: Optional[GetImagesList200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesList401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetImagesListRequest:
    query_params: GetImagesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_images_list_200_application_json_object: Optional[GetImagesList200ApplicationJSON] = dataclasses.field(default=None)
    get_images_list_401_application_json_object: Optional[GetImagesList401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
