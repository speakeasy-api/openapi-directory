import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofileinitialization as shared_launchprofileinitialization


@dataclass_json
@dataclasses.dataclass
class GetLaunchProfileInitializationResponse:
    launch_profile_initialization: Optional[shared_launchprofileinitialization.LaunchProfileInitialization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchProfileInitialization') }})
    
