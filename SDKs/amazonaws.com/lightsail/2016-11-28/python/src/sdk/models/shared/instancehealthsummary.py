import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancehealthstate_enum as shared_instancehealthstate_enum
from ..shared import instancehealthreason_enum as shared_instancehealthreason_enum


@dataclass_json
@dataclasses.dataclass
class InstanceHealthSummary:
    r"""InstanceHealthSummary
    Describes information about the health of the instance.
    """
    
    instance_health: Optional[shared_instancehealthstate_enum.InstanceHealthStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceHealth') }})
    instance_health_reason: Optional[shared_instancehealthreason_enum.InstanceHealthReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceHealthReason') }})
    instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    
