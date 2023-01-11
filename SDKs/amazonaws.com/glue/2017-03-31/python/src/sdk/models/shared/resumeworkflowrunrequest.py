import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResumeWorkflowRunRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    node_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeIds') }})
    run_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    
