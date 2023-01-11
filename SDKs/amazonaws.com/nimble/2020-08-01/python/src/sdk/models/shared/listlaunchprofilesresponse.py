import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofile as shared_launchprofile


@dataclass_json
@dataclasses.dataclass
class ListLaunchProfilesResponse:
    launch_profiles: Optional[list[shared_launchprofile.LaunchProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfiles') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
