import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CancelMlTaskRunRequest:
    task_run_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRunId') }})
    transform_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    
