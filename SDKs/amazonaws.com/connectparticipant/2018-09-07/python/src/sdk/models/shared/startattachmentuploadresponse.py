import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uploadmetadata as shared_uploadmetadata


@dataclass_json
@dataclasses.dataclass
class StartAttachmentUploadResponse:
    attachment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentId') }})
    upload_metadata: Optional[shared_uploadmetadata.UploadMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UploadMetadata') }})
    
