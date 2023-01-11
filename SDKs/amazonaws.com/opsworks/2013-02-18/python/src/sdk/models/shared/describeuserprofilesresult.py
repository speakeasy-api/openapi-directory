import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userprofile as shared_userprofile


@dataclass_json
@dataclasses.dataclass
class DescribeUserProfilesResult:
    r"""DescribeUserProfilesResult
    Contains the response to a <code>DescribeUserProfiles</code> request.
    """
    
    user_profiles: Optional[list[shared_userprofile.UserProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfiles') }})
    
