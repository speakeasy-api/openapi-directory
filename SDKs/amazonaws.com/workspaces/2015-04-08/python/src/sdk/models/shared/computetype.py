import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compute_enum as shared_compute_enum


@dataclass_json
@dataclasses.dataclass
class ComputeType:
    r"""ComputeType
    Describes the compute type of the bundle.
    """
    
    name: Optional[shared_compute_enum.ComputeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
