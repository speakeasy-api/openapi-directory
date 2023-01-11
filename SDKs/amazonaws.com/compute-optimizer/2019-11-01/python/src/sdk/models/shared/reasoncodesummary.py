import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingreasoncode_enum as shared_findingreasoncode_enum


@dataclass_json
@dataclasses.dataclass
class ReasonCodeSummary:
    r"""ReasonCodeSummary
    A summary of a finding reason code.
    """
    
    name: Optional[shared_findingreasoncode_enum.FindingReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
