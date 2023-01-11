import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import violationdetail as shared_violationdetail


@dataclass_json
@dataclasses.dataclass
class GetViolationDetailsResponse:
    violation_detail: Optional[shared_violationdetail.ViolationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationDetail') }})
    
