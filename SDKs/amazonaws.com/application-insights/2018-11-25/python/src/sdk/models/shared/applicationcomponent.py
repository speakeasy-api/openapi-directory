import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ostype_enum as shared_ostype_enum
from ..shared import tier_enum as shared_tier_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationComponent:
    r"""ApplicationComponent
    Describes a standalone resource or similarly grouped resources that the application is made up of.
    """
    
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    component_remarks: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentRemarks') }})
    detected_workload: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedWorkload') }})
    monitor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monitor') }})
    os_type: Optional[shared_ostype_enum.OsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OsType') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    tier: Optional[shared_tier_enum.TierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
