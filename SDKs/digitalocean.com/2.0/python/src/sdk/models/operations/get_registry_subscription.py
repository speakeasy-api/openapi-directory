import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1registry_get_responses_200_content_application_1json_schema_properties_registry_properties_subscription_allof_1 as shared_onev2_1registry_get_responses_200_content_application_1json_schema_properties_registry_properties_subscription_allof_1


@dataclass_json
@dataclasses.dataclass
class GetRegistrySubscription401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetRegistrySubscriptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_subscription_401_application_json_object: Optional[GetRegistrySubscription401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1registry_get_responses_200_content_application_1json_schema_properties_registry_properties_subscription_all_of_1: Optional[shared_onev2_1registry_get_responses_200_content_application_1json_schema_properties_registry_properties_subscription_allof_1.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1] = dataclasses.field(default=None)
    
