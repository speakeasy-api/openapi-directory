import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionerrortype_enum as shared_executionerrortype_enum


@dataclass_json
@dataclasses.dataclass
class ExecutionError:
    r"""ExecutionError
    Specifies the error message and type, for an error that occurs during the execution of the workflow.
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    type: shared_executionerrortype_enum.ExecutionErrorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
