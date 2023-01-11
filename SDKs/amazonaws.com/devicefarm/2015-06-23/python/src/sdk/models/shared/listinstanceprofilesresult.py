import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceprofile as shared_instanceprofile


@dataclass_json
@dataclasses.dataclass
class ListInstanceProfilesResult:
    instance_profiles: Optional[list[shared_instanceprofile.InstanceProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceProfiles') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
