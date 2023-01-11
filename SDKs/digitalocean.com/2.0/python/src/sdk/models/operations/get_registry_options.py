import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum(str, Enum):
    OVER_REPOSITORY_LIMIT = "OverRepositoryLimit"
    OVER_STORAGE_LIMIT = "OverStorageLimit"


@dataclass_json
@dataclasses.dataclass
class GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers:
    allow_storage_overage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_storage_overage') }})
    eligibility_reasons: Optional[list[GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiersEligibilityReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibility_reasons') }})
    eligible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligible') }})
    included_bandwidth_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_bandwidth_bytes') }})
    included_repositories: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_repositories') }})
    included_storage_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_storage_bytes') }})
    monthly_price_in_cents: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_price_in_cents') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryOptions200ApplicationJSONOptions:
    subscription_tiers: Optional[list[GetRegistryOptions200ApplicationJSONOptionsSubscriptionTiers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_tiers') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryOptions200ApplicationJSON:
    options: Optional[GetRegistryOptions200ApplicationJSONOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryOptions401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetRegistryOptionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_options_200_application_json_object: Optional[GetRegistryOptions200ApplicationJSON] = dataclasses.field(default=None)
    get_registry_options_401_application_json_object: Optional[GetRegistryOptions401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
