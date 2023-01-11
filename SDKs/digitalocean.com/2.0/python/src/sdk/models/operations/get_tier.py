import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1tiers_get_responses_200_content_application_1json_schema_properties_tiers_items as shared_onev2_1apps_1tiers_get_responses_200_content_application_1json_schema_properties_tiers_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetTierPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTier200ApplicationJSON:
    tier: Optional[shared_onev2_1apps_1tiers_get_responses_200_content_application_1json_schema_properties_tiers_items.Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTier401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetTierRequest:
    path_params: GetTierPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTierResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tier_200_application_json_object: Optional[GetTier200ApplicationJSON] = dataclasses.field(default=None)
    get_tier_401_application_json_object: Optional[GetTier401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
