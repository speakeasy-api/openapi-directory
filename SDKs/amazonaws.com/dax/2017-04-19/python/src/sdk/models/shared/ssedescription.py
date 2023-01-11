import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssestatus_enum as shared_ssestatus_enum


@dataclass_json
@dataclasses.dataclass
class SseDescription:
    r"""SseDescription
    The description of the server-side encryption status on the specified DAX cluster.
    """
    
    status: Optional[shared_ssestatus_enum.SseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
