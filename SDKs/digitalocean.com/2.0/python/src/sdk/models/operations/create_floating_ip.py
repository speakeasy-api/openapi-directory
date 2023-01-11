import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_post_responses_202_content_application_1json_schema_oneof_0_properties_links_properties_actions_items as shared_onev2_1droplets_post_responses_202_content_application_1json_schema_oneof_0_properties_links_properties_actions_items
from ..shared import onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items as shared_onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateFloatingIPRequestBodyAssignToDroplet:
    droplet_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFloatingIPRequestBodyReserveToRegion:
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFloatingIP202ApplicationJSONLinks:
    actions: Optional[list[shared_onev2_1droplets_post_responses_202_content_application_1json_schema_oneof_0_properties_links_properties_actions_items.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    droplets: Optional[list[shared_onev2_1droplets_post_responses_202_content_application_1json_schema_oneof_0_properties_links_properties_actions_items.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplets') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFloatingIP202ApplicationJSON:
    floating_ip: Optional[shared_onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    links: Optional[CreateFloatingIP202ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateFloatingIP401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateFloatingIPRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFloatingIPResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_floating_ip_202_application_json_object: Optional[CreateFloatingIP202ApplicationJSON] = dataclasses.field(default=None)
    create_floating_ip_401_application_json_object: Optional[CreateFloatingIP401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
