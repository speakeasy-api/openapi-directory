import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import closestatus_enum as shared_closestatus_enum


@dataclass_json
@dataclasses.dataclass
class CloseStatusFilter:
    r"""CloseStatusFilter
    Used to filter the closed workflow executions in visibility APIs by their close status.
    """
    
    status: shared_closestatus_enum.CloseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
