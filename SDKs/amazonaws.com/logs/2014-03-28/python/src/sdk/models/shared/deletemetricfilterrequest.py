import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteMetricFilterRequest:
    filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    
