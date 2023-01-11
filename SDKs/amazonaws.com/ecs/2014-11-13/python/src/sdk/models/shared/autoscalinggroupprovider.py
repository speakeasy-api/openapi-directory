import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedscaling as shared_managedscaling
from ..shared import managedterminationprotection_enum as shared_managedterminationprotection_enum


@dataclass_json
@dataclasses.dataclass
class AutoScalingGroupProvider:
    r"""AutoScalingGroupProvider
    The details of the Auto Scaling group for the capacity provider.
    """
    
    auto_scaling_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupArn') }})
    managed_scaling: Optional[shared_managedscaling.ManagedScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedScaling') }})
    managed_termination_protection: Optional[shared_managedterminationprotection_enum.ManagedTerminationProtectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedTerminationProtection') }})
    
