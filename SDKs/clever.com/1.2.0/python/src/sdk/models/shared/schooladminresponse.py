import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schooladmin as shared_schooladmin


@dataclass_json
@dataclasses.dataclass
class SchoolAdminResponse:
    data: Optional[shared_schooladmin.SchoolAdmin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
