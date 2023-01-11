import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaattachment as shared_mediaattachment
from ..shared import googleclassroomcoursework as shared_googleclassroomcoursework
from ..shared import microsoftgraphassignment as shared_microsoftgraphassignment
from ..shared import assignmentsubmission as shared_assignmentsubmission
from ..shared import assignmenttype_enum as shared_assignmenttype_enum


@dataclass_json
@dataclasses.dataclass
class AssignmentCanvas:
    r"""AssignmentCanvas
    A Canvas LMS assignment
    """
    
    alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignmentLti:
    r"""AssignmentLti
    An LTI assignment
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignmentMfc:
    r"""AssignmentMfc
    A MusicFirst Classroom assignment
    """
    
    alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class AssignmentStateEnum(str, Enum):
    DRAFT = "draft"
    ACTIVE = "active"
    ARCHIVED = "archived"


@dataclass_json
@dataclasses.dataclass
class Assignment:
    r"""Assignment
    Assignment details
    """
    
    attachments: Optional[list[shared_mediaattachment.MediaAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    canvas: Optional[AssignmentCanvas] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas') }})
    classroom: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classroom') }})
    cover: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover') }})
    cover_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverFile') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    google_classroom: Optional[shared_googleclassroomcoursework.GoogleClassroomCoursework] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleClassroom') }})
    lti: Optional[AssignmentLti] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lti') }})
    max_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPoints') }})
    mfc: Optional[AssignmentMfc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfc') }})
    microsoft_graph: Optional[shared_microsoftgraphassignment.MicrosoftGraphAssignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoftGraph') }})
    scheduled_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[AssignmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submissions: Optional[list[shared_assignmentsubmission.AssignmentSubmission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissions') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[shared_assignmenttype_enum.AssignmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
