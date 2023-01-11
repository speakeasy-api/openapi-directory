import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IncreaseStreamRetentionPeriodInput:
    r"""IncreaseStreamRetentionPeriodInput
    Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
    """
    
    retention_period_hours: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
