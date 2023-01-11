import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stackerrorcode_enum as shared_stackerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class StackError:
    r"""StackError
    Describes a stack error.
    """
    
    error_code: Optional[shared_stackerrorcode_enum.StackErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    
