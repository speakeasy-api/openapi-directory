import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SetStatusInput:
    r"""SetStatusInput
    Contains the parameters for SetStatus.
    """
    
    object_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
