import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchprofilemembership as shared_launchprofilemembership


@dataclass_json
@dataclasses.dataclass
class GetLaunchProfileMemberResponse:
    member: Optional[shared_launchprofilemembership.LaunchProfileMembership] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    
