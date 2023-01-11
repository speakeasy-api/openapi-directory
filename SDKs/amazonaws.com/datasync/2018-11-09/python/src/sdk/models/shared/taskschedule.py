import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TaskSchedule:
    r"""TaskSchedule
    Specifies the schedule you want your task to use for repeated executions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html\">Schedule Expressions for Rules</a>.
    """
    
    schedule_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleExpression') }})
    
