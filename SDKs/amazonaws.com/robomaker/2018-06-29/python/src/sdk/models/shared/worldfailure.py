import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldgenerationjoberrorcode_enum as shared_worldgenerationjoberrorcode_enum


@dataclass_json
@dataclasses.dataclass
class WorldFailure:
    r"""WorldFailure
    Information about a failed world.
    """
    
    failure_code: Optional[shared_worldgenerationjoberrorcode_enum.WorldGenerationJobErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    sample_failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleFailureReason') }})
    
