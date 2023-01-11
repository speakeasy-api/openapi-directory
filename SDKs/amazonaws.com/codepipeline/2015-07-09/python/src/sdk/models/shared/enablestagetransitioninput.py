import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stagetransitiontype_enum as shared_stagetransitiontype_enum


@dataclass_json
@dataclasses.dataclass
class EnableStageTransitionInput:
    r"""EnableStageTransitionInput
    Represents the input of an <code>EnableStageTransition</code> action.
    """
    
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    stage_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    transition_type: shared_stagetransitiontype_enum.StageTransitionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionType') }})
    
