import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1tiers_1instance_sizes_get_responses_200_content_application_1json_schema_properties_instance_sizes_items as shared_onev2_1apps_1tiers_1instance_sizes_get_responses_200_content_application_1json_schema_properties_instance_sizes_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetInstanceSizePathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetInstanceSize200ApplicationJSON:
    instance_size: Optional[shared_onev2_1apps_1tiers_1instance_sizes_get_responses_200_content_application_1json_schema_properties_instance_sizes_items.Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size') }})
    

@dataclass_json
@dataclasses.dataclass
class GetInstanceSize401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetInstanceSizeRequest:
    path_params: GetInstanceSizePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInstanceSizeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_instance_size_200_application_json_object: Optional[GetInstanceSize200ApplicationJSON] = dataclasses.field(default=None)
    get_instance_size_401_application_json_object: Optional[GetInstanceSize401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
