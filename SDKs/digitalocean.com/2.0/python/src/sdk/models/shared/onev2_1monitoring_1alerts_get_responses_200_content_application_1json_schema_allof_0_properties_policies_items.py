import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack:
    channel: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts:
    email: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    slack: list[Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slack') }})
    
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum(str, Enum):
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"

class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum(str, Enum):
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

class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum(str, Enum):
    FIVEM = "5m"
    TENM = "10m"
    THIRTYM = "30m"
    ONEH = "1h"


@dataclass_json
@dataclasses.dataclass
class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems:
    alerts: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    compare: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    entities: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    window: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
