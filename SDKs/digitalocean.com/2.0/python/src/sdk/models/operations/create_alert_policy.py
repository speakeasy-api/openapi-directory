import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items_properties_alerts as shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items_properties_alerts
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items as shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items

class CreateAlertPolicyRequestBodyCompareEnum(str, Enum):
    GREATER_THAN = "GreaterThan"
    LESS_THAN = "LessThan"

class CreateAlertPolicyRequestBodyTypeEnum(str, Enum):
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

class CreateAlertPolicyRequestBodyWindowEnum(str, Enum):
    FIVEM = "5m"
    TENM = "10m"
    THIRTYM = "30m"
    ONEH = "1h"


@dataclass_json
@dataclasses.dataclass
class CreateAlertPolicyRequestBody:
    alerts: shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items_properties_alerts.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    compare: CreateAlertPolicyRequestBodyCompareEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    entities: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: CreateAlertPolicyRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    window: CreateAlertPolicyRequestBodyWindowEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAlertPolicy401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateAlertPolicyRequest:
    request: CreateAlertPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAlertPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_alert_policy_401_application_json_object: Optional[CreateAlertPolicy401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_all_of_0_properties_policies_items: Optional[shared_onev2_1monitoring_1alerts_get_responses_200_content_application_1json_schema_allof_0_properties_policies_items.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems] = dataclasses.field(default=None)
    
