import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1domains_get_responses_200_content_application_1json_schema_allof_0_properties_domains_items as shared_onev2_1domains_get_responses_200_content_application_1json_schema_allof_0_properties_domains_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateDomain401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateDomainRequest:
    request: Optional[shared_onev2_1domains_get_responses_200_content_application_1json_schema_allof_0_properties_domains_items.Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDomainResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_domain_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_domain_401_application_json_object: Optional[CreateDomain401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
