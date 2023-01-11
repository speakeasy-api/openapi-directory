import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import workspacecompact as shared_workspacecompact
from ..shared import workspacecompact as shared_workspacecompact

class TagResponseColorEnum(str, Enum):
    DARK_PINK = "dark-pink"
    DARK_GREEN = "dark-green"
    DARK_BLUE = "dark-blue"
    DARK_RED = "dark-red"
    DARK_TEAL = "dark-teal"
    DARK_BROWN = "dark-brown"
    DARK_ORANGE = "dark-orange"
    DARK_PURPLE = "dark-purple"
    DARK_WARM_GRAY = "dark-warm-gray"
    LIGHT_PINK = "light-pink"
    LIGHT_GREEN = "light-green"
    LIGHT_BLUE = "light-blue"
    LIGHT_RED = "light-red"
    LIGHT_TEAL = "light-teal"
    LIGHT_BROWN = "light-brown"
    LIGHT_ORANGE = "light-orange"
    LIGHT_PURPLE = "light-purple"
    LIGHT_WARM_GRAY = "light-warm-gray"


@dataclass_json
@dataclasses.dataclass
class TagResponse:
    r"""TagResponse
    A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
    """
    
    color: Optional[TagResponseColorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    followers: Optional[list[shared_usercompact.UserCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permalink_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    workspace: Optional[shared_workspacecompact.WorkspaceCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclasses.dataclass
class TagResponseInput:
    r"""TagResponseInput
    A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
    """
    
    color: Optional[TagResponseColorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    workspace: Optional[shared_workspacecompact.WorkspaceCompactInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
