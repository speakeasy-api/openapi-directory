import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tier_enum as shared_tier_enum


@dataclass_json
@dataclasses.dataclass
class DescribeComponentConfigurationResponse:
    component_configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentConfiguration') }})
    monitor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monitor') }})
    tier: Optional[shared_tier_enum.TierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
