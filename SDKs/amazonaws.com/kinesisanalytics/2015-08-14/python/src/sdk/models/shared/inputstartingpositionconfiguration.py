import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputstartingposition_enum as shared_inputstartingposition_enum


@dataclass_json
@dataclasses.dataclass
class InputStartingPositionConfiguration:
    r"""InputStartingPositionConfiguration
    Describes the point at which the application reads from the streaming source.
    """
    
    input_starting_position: Optional[shared_inputstartingposition_enum.InputStartingPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPosition') }})
    
