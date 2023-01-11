import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SHARED = "SHARED"
    DEDICATED = "DEDICATED"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems:
    cpu_type: Optional[Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCPUCoresDedicatedDedicatedVCPUCoresEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_type') }})
    cpus: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpus') }})
    memory_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory_bytes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    tier_downgrade_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_downgrade_to') }})
    tier_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_slug') }})
    tier_upgrade_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_upgrade_to') }})
    usd_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd_per_month') }})
    usd_per_second: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usd_per_second') }})
    
