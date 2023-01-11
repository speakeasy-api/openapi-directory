import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experimentactionstatus_enum as shared_experimentactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ExperimentActionState:
    r"""ExperimentActionState
    Describes the state of an action.
    """
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[shared_experimentactionstatus_enum.ExperimentActionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
