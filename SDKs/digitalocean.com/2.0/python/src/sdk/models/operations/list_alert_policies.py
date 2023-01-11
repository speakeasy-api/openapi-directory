import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListAlertPoliciesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONMeta:
    r"""ListAlertPolicies200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack:
    channel: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONPoliciesAlerts:
    email: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    slack: list[ListAlertPolicies200ApplicationJSONPoliciesAlertsSlack] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack') }})
    
class ListAlertPolicies200ApplicationJSONPoliciesCompareEnum(str, Enum):
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"

class ListAlertPolicies200ApplicationJSONPoliciesTypeEnum(str, Enum):
    V1_INSIGHTS_DROPLET_LOAD_1 = "v1/insights/droplet/load_1"
    V1_INSIGHTS_DROPLET_LOAD_5 = "v1/insights/droplet/load_5"
    V1_INSIGHTS_DROPLET_LOAD_15 = "v1/insights/droplet/load_15"
    V1_INSIGHTS_DROPLET_MEMORY_UTILIZATION_PERCENT = "v1/insights/droplet/memory_utilization_percent"
    V1_INSIGHTS_DROPLET_DISK_UTILIZATION_PERCENT = "v1/insights/droplet/disk_utilization_percent"
    V1_INSIGHTS_DROPLET_CPU = "v1/insights/droplet/cpu"
    V1_INSIGHTS_DROPLET_DISK_READ = "v1/insights/droplet/disk_read"
    V1_INSIGHTS_DROPLET_DISK_WRITE = "v1/insights/droplet/disk_write"
    V1_INSIGHTS_DROPLET_PUBLIC_OUTBOUND_BANDWIDTH = "v1/insights/droplet/public_outbound_bandwidth"
    V1_INSIGHTS_DROPLET_PUBLIC_INBOUND_BANDWIDTH = "v1/insights/droplet/public_inbound_bandwidth"
    V1_INSIGHTS_DROPLET_PRIVATE_OUTBOUND_BANDWIDTH = "v1/insights/droplet/private_outbound_bandwidth"
    V1_INSIGHTS_DROPLET_PRIVATE_INBOUND_BANDWIDTH = "v1/insights/droplet/private_inbound_bandwidth"

class ListAlertPolicies200ApplicationJSONPoliciesWindowEnum(str, Enum):
    FIVEM = "5m"
    TENM = "10m"
    THIRTYM = "30m"
    ONEH = "1h"


@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSONPolicies:
    alerts: ListAlertPolicies200ApplicationJSONPoliciesAlerts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    compare: ListAlertPolicies200ApplicationJSONPoliciesCompareEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    entities: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: ListAlertPolicies200ApplicationJSONPoliciesTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    window: ListAlertPolicies200ApplicationJSONPoliciesWindowEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies200ApplicationJSON:
    meta: ListAlertPolicies200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    policies: list[ListAlertPolicies200ApplicationJSONPolicies] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    links: Optional[ListAlertPolicies200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAlertPolicies401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListAlertPoliciesRequest:
    query_params: ListAlertPoliciesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAlertPoliciesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_alert_policies_200_application_json_object: Optional[ListAlertPolicies200ApplicationJSON] = dataclasses.field(default=None)
    list_alert_policies_401_application_json_object: Optional[ListAlertPolicies401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
