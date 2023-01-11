import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Alarm:
    r"""Alarm
    Represents a CloudWatch alarm associated with a scaling policy.
    """
    
    alarm_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlarmARN') }})
    alarm_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlarmName') }})
    
