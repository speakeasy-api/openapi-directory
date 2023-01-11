import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceprofile as shared_instanceprofile


@dataclass_json
@dataclasses.dataclass
class GetInstanceProfileResult:
    instance_profile: Optional[shared_instanceprofile.InstanceProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceProfile') }})
    
