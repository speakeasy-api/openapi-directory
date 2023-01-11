import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classattachmentcreation as shared_classattachmentcreation


@dataclass_json
@dataclasses.dataclass
class AssignmentSubmissionUpdateComments:
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    unread: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignmentSubmissionUpdate:
    r"""AssignmentSubmissionUpdate
    Assignment Submission creation
    """
    
    attachments: Optional[list[shared_classattachmentcreation.ClassAttachmentCreation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    comments: Optional[AssignmentSubmissionUpdateComments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    draft_grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draftGrade') }})
    grade: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grade') }})
    return_: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return') }})
    submit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submit') }})
    
