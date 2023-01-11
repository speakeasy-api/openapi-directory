import dataclasses
from typing import Optional
from ..shared import alarm as shared_alarm


@dataclasses.dataclass
class PolicyArnType:
    r"""PolicyArnType
    Contains the output of PutScalingPolicy.
    """
    
    alarms: Optional[list[shared_alarm.Alarm]] = dataclasses.field(default=None)
    policy_arn: Optional[str] = dataclasses.field(default=None)
    
