import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaattachment as shared_mediaattachment
from ..shared import googleclassroomsubmission as shared_googleclassroomsubmission
from ..shared import microsoftgraphsubmission as shared_microsoftgraphsubmission
from ..shared import assignmentsubmissionstate_enum as shared_assignmentsubmissionstate_enum


@dataclass_json
@dataclasses.dataclass
class AssignmentSubmission:
    r"""AssignmentSubmission
    Assignment Submission
    """
    
    assignment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    attachments: Optional[list[shared_mediaattachment.MediaAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    classroom: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classroom') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    draft_grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draftGrade') }})
    google_classroom: Optional[shared_googleclassroomsubmission.GoogleClassroomSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleClassroom') }})
    grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grade') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_points: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPoints') }})
    microsoft_graph: Optional[shared_microsoftgraphsubmission.MicrosoftGraphSubmission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microsoftGraph') }})
    return_creator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnCreator') }})
    return_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnDate') }})
    state: Optional[shared_assignmentsubmissionstate_enum.AssignmentSubmissionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionDate') }})
    
