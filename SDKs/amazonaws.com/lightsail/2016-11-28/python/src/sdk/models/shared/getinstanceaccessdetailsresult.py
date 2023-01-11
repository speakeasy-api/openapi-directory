import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaccessdetails as shared_instanceaccessdetails


@dataclass_json
@dataclasses.dataclass
class GetInstanceAccessDetailsResult:
    access_details: Optional[shared_instanceaccessdetails.InstanceAccessDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDetails') }})
    
