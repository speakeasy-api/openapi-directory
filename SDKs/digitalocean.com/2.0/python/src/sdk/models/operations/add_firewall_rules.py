import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0 as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class AddFirewallRulesPathParams:
    firewall_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firewall_id', 'style': 'simple', 'explode': False }})
    
class AddFirewallRulesRequestBodyInboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclasses.dataclass
class AddFirewallRulesRequestBodyInboundRulesSources:
    addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    droplet_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    kubernetes_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes_ids') }})
    load_balancer_uids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_uids') }})
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class AddFirewallRulesRequestBodyInboundRules:
    ports: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    protocol: AddFirewallRulesRequestBodyInboundRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    sources: AddFirewallRulesRequestBodyInboundRulesSources = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
class AddFirewallRulesRequestBodyOutboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclasses.dataclass
class AddFirewallRulesRequestBodyOutboundRules:
    destinations: shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    ports: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    protocol: AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

@dataclass_json
@dataclasses.dataclass
class AddFirewallRulesRequestBody:
    inbound_rules: Optional[list[AddFirewallRulesRequestBodyInboundRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_rules') }})
    outbound_rules: Optional[list[AddFirewallRulesRequestBodyOutboundRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_rules') }})
    

@dataclass_json
@dataclasses.dataclass
class AddFirewallRules401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AddFirewallRulesRequest:
    path_params: AddFirewallRulesPathParams = dataclasses.field()
    request: Optional[AddFirewallRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddFirewallRulesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_firewall_rules_401_application_json_object: Optional[AddFirewallRules401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
