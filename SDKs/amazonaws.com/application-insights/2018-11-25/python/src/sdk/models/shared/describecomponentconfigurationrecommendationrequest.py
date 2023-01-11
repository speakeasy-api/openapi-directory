import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tier_enum as shared_tier_enum


@dataclass_json
@dataclasses.dataclass
class DescribeComponentConfigurationRecommendationRequest:
    component_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    tier: shared_tier_enum.TierEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
