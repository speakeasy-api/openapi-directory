import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytype_enum as shared_policytype_enum
from ..shared import targettrackingconfiguration as shared_targettrackingconfiguration


@dataclass_json
@dataclasses.dataclass
class ScalingPolicy:
    r"""ScalingPolicy
    Represents a scaling policy.
    """
    
    policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    policy_type: shared_policytype_enum.PolicyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    target_tracking_configuration: Optional[shared_targettrackingconfiguration.TargetTrackingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingConfiguration') }})
    
