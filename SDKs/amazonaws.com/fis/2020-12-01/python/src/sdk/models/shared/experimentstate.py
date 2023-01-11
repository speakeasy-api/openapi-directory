import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experimentstatus_enum as shared_experimentstatus_enum


@dataclass_json
@dataclasses.dataclass
class ExperimentState:
    r"""ExperimentState
    Describes the state of an experiment.
    """
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[shared_experimentstatus_enum.ExperimentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
