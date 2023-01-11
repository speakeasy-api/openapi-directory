import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userprofilesummary as shared_userprofilesummary


@dataclass_json
@dataclasses.dataclass
class ListUserProfilesResult:
    user_profiles: list[shared_userprofilesummary.UserProfileSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userProfiles') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
