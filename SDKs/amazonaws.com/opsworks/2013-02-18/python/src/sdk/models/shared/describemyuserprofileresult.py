import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selfuserprofile as shared_selfuserprofile


@dataclass_json
@dataclasses.dataclass
class DescribeMyUserProfileResult:
    r"""DescribeMyUserProfileResult
    Contains the response to a <code>DescribeMyUserProfile</code> request.
    """
    
    user_profile: Optional[shared_selfuserprofile.SelfUserProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfile') }})
    
