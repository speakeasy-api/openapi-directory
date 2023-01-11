import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactstatus_enum as shared_artifactstatus_enum


@dataclass_json
@dataclasses.dataclass
class AttachmentItem:
    r"""AttachmentItem
    The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
    """
    
    attachment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentId') }})
    attachment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentName') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    status: Optional[shared_artifactstatus_enum.ArtifactStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
