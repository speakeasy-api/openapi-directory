import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobstatus_enum as shared_jobstatus_enum


@dataclass_json
@dataclasses.dataclass
class AcknowledgeThirdPartyJobOutput:
    r"""AcknowledgeThirdPartyJobOutput
    Represents the output of an AcknowledgeThirdPartyJob action.
    """
    
    status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
