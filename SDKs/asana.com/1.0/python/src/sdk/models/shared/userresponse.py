import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacecompact as shared_workspacecompact


@dataclass_json
@dataclasses.dataclass
class UserResponsePhoto:
    r"""UserResponsePhoto
    A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
    """
    
    image_1024x1024: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_1024x1024') }})
    image_128x128: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_128x128') }})
    image_21x21: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_21x21') }})
    image_27x27: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_27x27') }})
    image_36x36: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_36x36') }})
    image_60x60: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_60x60') }})
    

@dataclass_json
@dataclasses.dataclass
class UserResponse:
    r"""UserResponse
    A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    photo: Optional[UserResponsePhoto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    workspaces: Optional[list[shared_workspacecompact.WorkspaceCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    
