import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediascoresharingmode_enum as shared_mediascoresharingmode_enum

class ClassAttachmentCreationTypeEnum(str, Enum):
    FLAT = "flat"
    LINK = "link"
    GOOGLE_DRIVE = "googleDrive"
    WORKSHEET = "worksheet"


@dataclass_json
@dataclasses.dataclass
class ClassAttachmentCreation:
    r"""ClassAttachmentCreation
    Attachment creation for an assignment or stream post.
    This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
    
    """
    
    google_drive_file_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDriveFileId') }})
    lock_score_template: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockScoreTemplate') }})
    score: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    sharing_mode: Optional[shared_mediascoresharingmode_enum.MediaScoreSharingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharingMode') }})
    type: Optional[ClassAttachmentCreationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    worksheet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worksheet') }})
    
