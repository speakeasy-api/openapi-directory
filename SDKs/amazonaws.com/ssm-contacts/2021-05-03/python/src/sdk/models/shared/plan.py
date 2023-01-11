import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stage as shared_stage


@dataclass_json
@dataclasses.dataclass
class Plan:
    r"""Plan
    The stages that an escalation plan or engagement plan engages contacts and contact methods in.
    """
    
    stages: list[shared_stage.Stage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stages') }})
    
