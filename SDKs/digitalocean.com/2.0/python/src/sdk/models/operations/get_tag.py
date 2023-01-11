import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items as shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetTagPathParams:
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTag200ApplicationJSON:
    tag: Optional[shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTag401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetTagRequest:
    path_params: GetTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tag_200_application_json_object: Optional[GetTag200ApplicationJSON] = dataclasses.field(default=None)
    get_tag_401_application_json_object: Optional[GetTag401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
