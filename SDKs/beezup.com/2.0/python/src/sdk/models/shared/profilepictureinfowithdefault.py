import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import profilepictureselected_enum as shared_profilepictureselected_enum


@dataclass_json
@dataclasses.dataclass
class ProfilePictureInfoWithDefault:
    gravatar_profile_picture_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatarProfilePictureUrl') }})
    initials_profile_picture_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialsProfilePictureUrl') }})
    profile_picture_selected: shared_profilepictureselected_enum.ProfilePictureSelectedEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePictureSelected') }})
    profile_picture_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePictureUrl') }})
    
