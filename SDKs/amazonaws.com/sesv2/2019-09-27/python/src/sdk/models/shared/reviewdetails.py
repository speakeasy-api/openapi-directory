import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewstatus_enum as shared_reviewstatus_enum


@dataclass_json
@dataclasses.dataclass
class ReviewDetails:
    r"""ReviewDetails
    An object that contains information about your account details review.
    """
    
    case_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaseId') }})
    status: Optional[shared_reviewstatus_enum.ReviewStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
