import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact

class ProjectRequestColorEnum(str, Enum):
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

class ProjectRequestCurrentStatusColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclasses.dataclass
class ProjectRequestCurrentStatusInput:
    r"""ProjectRequestCurrentStatusInput
    A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: \"green\" for projects that are on track, \"yellow\" for projects at risk, and \"red\" for projects that are behind.
    """
    
    color: ProjectRequestCurrentStatusColorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    author: Optional[shared_usercompact.UserCompactInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_by: Optional[shared_usercompact.UserCompactInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    html_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class ProjectRequestDefaultViewEnum(str, Enum):
    LIST = "list"
    BOARD = "board"
    CALENDAR = "calendar"
    TIMELINE = "timeline"


@dataclass_json
@dataclasses.dataclass
class ProjectRequestWorkspaceInput:
    r"""ProjectRequestWorkspaceInput
    *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ProjectRequestInput:
    r"""ProjectRequestInput
    A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
    """
    
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    color: Optional[ProjectRequestColorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    current_status: Optional[ProjectRequestCurrentStatusInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_status') }})
    custom_fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    default_view: Optional[ProjectRequestDefaultViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_view') }})
    due_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    followers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    html_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_template: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    start_on: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    workspace: Optional[ProjectRequestWorkspaceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
