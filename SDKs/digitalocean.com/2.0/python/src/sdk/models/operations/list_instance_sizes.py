import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class ListInstanceSizes200ApplicationJSONInstanceSizesSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SHARED = "SHARED"
    DEDICATED = "DEDICATED"


@dataclass_json
@dataclasses.dataclass
class ListInstanceSizes200ApplicationJSONInstanceSizes:
    cpu_type: Optional[ListInstanceSizes200ApplicationJSONInstanceSizesSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    cpus: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpus') }})
    memory_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_bytes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    tier_downgrade_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_downgrade_to') }})
    tier_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_slug') }})
    tier_upgrade_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_upgrade_to') }})
    usd_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd_per_month') }})
    usd_per_second: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd_per_second') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInstanceSizes200ApplicationJSON:
    discount_percent: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_percent') }})
    instance_sizes: Optional[list[ListInstanceSizes200ApplicationJSONInstanceSizes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_sizes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInstanceSizes401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListInstanceSizesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_instance_sizes_200_application_json_object: Optional[ListInstanceSizes200ApplicationJSON] = dataclasses.field(default=None)
    list_instance_sizes_401_application_json_object: Optional[ListInstanceSizes401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
