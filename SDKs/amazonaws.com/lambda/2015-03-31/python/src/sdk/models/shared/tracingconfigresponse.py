import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tracingmode_enum as shared_tracingmode_enum


@dataclass_json
@dataclasses.dataclass
class TracingConfigResponse:
    r"""TracingConfigResponse
    The function's X-Ray tracing configuration.
    """
    
    mode: Optional[shared_tracingmode_enum.TracingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    
