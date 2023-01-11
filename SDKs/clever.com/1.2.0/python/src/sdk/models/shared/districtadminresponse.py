import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import districtadmin as shared_districtadmin


@dataclass_json
@dataclasses.dataclass
class DistrictAdminResponse:
    data: Optional[shared_districtadmin.DistrictAdmin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
