import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaction_enum as shared_instanceaction_enum


@dataclass_json
@dataclasses.dataclass
class BlueInstanceTerminationOption:
    r"""BlueInstanceTerminationOption
    Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. 
    """
    
    action: Optional[shared_instanceaction_enum.InstanceActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    termination_wait_time_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminationWaitTimeInMinutes') }})
    
