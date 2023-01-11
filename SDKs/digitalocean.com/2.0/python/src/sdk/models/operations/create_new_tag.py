import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items as shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateNewTag400ApplicationJSON:
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    root_causes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root_causes') }})
    messages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNewTag401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateNewTagRequest:
    request: shared_onev2_1tags_get_responses_200_content_application_1json_schema_allof_0_properties_tags_items.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNewTagResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_new_tag_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_new_tag_400_application_json_object: Optional[CreateNewTag400ApplicationJSON] = dataclasses.field(default=None)
    create_new_tag_401_application_json_object: Optional[CreateNewTag401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
