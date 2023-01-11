import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecycleerrorcode_enum as shared_lifecycleerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class Diagnostics:
    r"""Diagnostics
    Diagnostic information about executable scripts that are part of a deployment.
    """
    
    error_code: Optional[shared_lifecycleerrorcode_enum.LifecycleErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    log_tail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTail') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    script_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptName') }})
    
