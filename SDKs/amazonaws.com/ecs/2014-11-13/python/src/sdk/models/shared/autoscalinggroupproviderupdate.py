import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedscaling as shared_managedscaling
from ..shared import managedterminationprotection_enum as shared_managedterminationprotection_enum


@dataclass_json
@dataclasses.dataclass
class AutoScalingGroupProviderUpdate:
    r"""AutoScalingGroupProviderUpdate
    The details of the Auto Scaling group capacity provider to update.
    """
    
    managed_scaling: Optional[shared_managedscaling.ManagedScaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedScaling') }})
    managed_termination_protection: Optional[shared_managedterminationprotection_enum.ManagedTerminationProtectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedTerminationProtection') }})
    
