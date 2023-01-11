import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofile as shared_launchprofile


@dataclass_json
@dataclasses.dataclass
class GetLaunchProfileResponse:
    launch_profile: Optional[shared_launchprofile.LaunchProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfile') }})
    
