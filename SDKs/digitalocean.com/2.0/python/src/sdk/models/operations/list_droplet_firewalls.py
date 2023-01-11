import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0 as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDropletFirewallsPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDropletFirewallsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    
class ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources:
    addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    droplet_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    kubernetes_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetes_ids') }})
    load_balancer_uids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_uids') }})
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONFirewallsInboundRules:
    ports: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    protocol: ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    sources: ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
class ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"
    ICMP = "icmp"


@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules:
    destinations: shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items_allof_1_properties_inbound_rules_items_allof_1_properties_sources_allof_0.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    ports: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    protocol: ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges:
    droplet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    removing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removing') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum(str, Enum):
    WAITING = "waiting"
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONFirewalls:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbound_rules: Optional[list[ListDropletFirewalls200ApplicationJSONFirewallsInboundRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_rules') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outbound_rules: Optional[list[ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_rules') }})
    pending_changes: Optional[list[ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending_changes') }})
    status: Optional[ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSONMeta:
    r"""ListDropletFirewalls200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls200ApplicationJSON:
    meta: ListDropletFirewalls200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    firewalls: Optional[list[ListDropletFirewalls200ApplicationJSONFirewalls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    links: Optional[ListDropletFirewalls200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletFirewalls401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDropletFirewallsRequest:
    path_params: ListDropletFirewallsPathParams = dataclasses.field()
    query_params: ListDropletFirewallsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDropletFirewallsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_droplet_firewalls_200_application_json_object: Optional[ListDropletFirewalls200ApplicationJSON] = dataclasses.field(default=None)
    list_droplet_firewalls_401_application_json_object: Optional[ListDropletFirewalls401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
