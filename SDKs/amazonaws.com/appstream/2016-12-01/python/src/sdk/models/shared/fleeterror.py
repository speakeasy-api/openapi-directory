import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleeterrorcode_enum as shared_fleeterrorcode_enum


@dataclass_json
@dataclasses.dataclass
class FleetError:
    r"""FleetError
    Describes a fleet error.
    """
    
    error_code: Optional[shared_fleeterrorcode_enum.FleetErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    
