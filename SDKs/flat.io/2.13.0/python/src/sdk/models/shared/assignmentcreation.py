import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classattachmentcreation as shared_classattachmentcreation
from ..shared import assignmenttype_enum as shared_assignmenttype_enum

class AssignmentCreationAssigneeModeEnum(str, Enum):
    EVERYONE = "everyone"
    SELECTED = "selected"


@dataclass_json
@dataclasses.dataclass
class AssignmentCreationGoogleClassroom:
    r"""AssignmentCreationGoogleClassroom
    Google Classroom options for this assignment
    """
    
    topic_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicId') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignmentCreationMicrosoftGraph:
    r"""AssignmentCreationMicrosoftGraph
    Microsoft Graph options for this assignment
    """
    
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
class AssignmentCreationStateEnum(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"


@dataclass_json
@dataclasses.dataclass
class AssignmentCreation:
    r"""AssignmentCreation
    Assignment creation details
    """
    
    assigned_students: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedStudents') }})
    assignee_mode: Optional[AssignmentCreationAssigneeModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigneeMode') }})
    attachments: Optional[list[shared_classattachmentcreation.ClassAttachmentCreation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    cover: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover') }})
    cover_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverFile') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    google_classroom: Optional[AssignmentCreationGoogleClassroom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleClassroom') }})
    max_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPoints') }})
    microsoft_graph: Optional[AssignmentCreationMicrosoftGraph] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoftGraph') }})
    nb_playback_authorized: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nbPlaybackAuthorized') }})
    scheduled_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[AssignmentCreationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    toolset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolset') }})
    type: Optional[shared_assignmenttype_enum.AssignmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
