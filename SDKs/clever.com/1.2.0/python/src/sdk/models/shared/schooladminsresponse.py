import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schooladminresponse as shared_schooladminresponse


@dataclass_json
@dataclasses.dataclass
class SchoolAdminsResponse:
    data: Optional[list[shared_schooladminresponse.SchoolAdminResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
