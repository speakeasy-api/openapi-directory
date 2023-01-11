import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecreaseStreamRetentionPeriodInput:
    r"""DecreaseStreamRetentionPeriodInput
    Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
    """
    
    retention_period_hours: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
