import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classstate_enum as shared_classstate_enum
from ..shared import groupdetails as shared_groupdetails


@dataclass_json
@dataclasses.dataclass
class ClassDetailsCanvas:
    r"""ClassDetailsCanvas
    Meta information provided by Canvs LMS
    """
    
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class ClassDetailsCleverSubjectEnum(str, Enum):
    ENGLISH_LANGUAGE_ARTS = "english/language arts"
    MATH = "math"
    SCIENCE = "science"
    SOCIAL_STUDIES = "social studies"
    LANGUAGE = "language"
    HOMEROOM_ADVISORY = "homeroom/advisory"
    INTERVENTIONS_ONLINE_LEARNING = "interventions/online learning"
    TECHNOLOGY_AND_ENGINEERING = "technology and engineering"
    PE_AND_HEALTH = "PE and health"
    ARTS_AND_MUSIC = "arts and music"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class ClassDetailsClever:
    r"""ClassDetailsClever
    Clever.com section-related information
    """
    
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modification_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modificationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subject: Optional[ClassDetailsCleverSubjectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    term_end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termEndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    term_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termName') }})
    term_start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termStartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsGoogleClassroom:
    r"""ClassDetailsGoogleClassroom
    Google Classroom course-related information
    """
    
    alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsGoogleDrive:
    r"""ClassDetailsGoogleDrive
    Google Drive course-related information provided by Google Classroom
    """
    
    teacher_folder_alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teacherFolderAlternateLink') }})
    teacher_folder_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teacherFolderId') }})
    
class ClassDetailsIssuesSyncReasonEnum(str, Enum):
    OTHER_ORGNANIZATION = "otherOrgnanization"
    PERSONAL_SUBSCRIPTION = "personalSubscription"


@dataclass_json
@dataclasses.dataclass
class ClassDetailsIssuesSync:
    r"""ClassDetailsIssuesSync
    A sync issue
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reason: Optional[ClassDetailsIssuesSyncReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsIssues:
    r"""ClassDetailsIssues
    Detected issues for this class
    """
    
    sync: Optional[list[ClassDetailsIssuesSync]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sync') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsLti:
    r"""ClassDetailsLti
    Meta information provided by the LTI consumer
    """
    
    context_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextId') }})
    context_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextLabel') }})
    context_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextTitle') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsMfc:
    r"""ClassDetailsMfc
    Meta information provided by Canvs LMS
    """
    
    alternate_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetailsMicrosoftGraph:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassDetails:
    r"""ClassDetails
    A classroom
    """
    
    assignments_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignmentsCount') }})
    canvas: Optional[ClassDetailsCanvas] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas') }})
    clever: Optional[ClassDetailsClever] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clever') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enrollment_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentCode') }})
    google_classroom: Optional[ClassDetailsGoogleClassroom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleClassroom') }})
    google_drive: Optional[ClassDetailsGoogleDrive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDrive') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issues: Optional[ClassDetailsIssues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    lti: Optional[ClassDetailsLti] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lti') }})
    mfc: Optional[ClassDetailsMfc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfc') }})
    microsoft_graph: Optional[ClassDetailsMicrosoftGraph] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoftGraph') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    section: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    state: Optional[shared_classstate_enum.ClassStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    students_group: Optional[shared_groupdetails.GroupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studentsGroup') }})
    teachers_group: Optional[shared_groupdetails.GroupDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teachersGroup') }})
    theme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    
