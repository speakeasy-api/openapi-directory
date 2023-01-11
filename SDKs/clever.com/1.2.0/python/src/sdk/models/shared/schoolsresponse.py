import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schoolresponse as shared_schoolresponse


@dataclass_json
@dataclasses.dataclass
class SchoolsResponse:
    data: Optional[list[shared_schoolresponse.SchoolResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
