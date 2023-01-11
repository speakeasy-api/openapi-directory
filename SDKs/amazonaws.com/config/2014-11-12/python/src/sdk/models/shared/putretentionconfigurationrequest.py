import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutRetentionConfigurationRequest:
    retention_period_in_days: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodInDays') }})
    
