import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytype as shared_activitytype


@dataclass_json
@dataclasses.dataclass
class DescribeActivityTypeInput:
    activity_type: shared_activitytype.ActivityType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
