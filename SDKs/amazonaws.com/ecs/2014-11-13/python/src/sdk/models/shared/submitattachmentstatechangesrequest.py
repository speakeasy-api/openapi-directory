import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachmentstatechange as shared_attachmentstatechange


@dataclass_json
@dataclasses.dataclass
class SubmitAttachmentStateChangesRequest:
    attachments: list[shared_attachmentstatechange.AttachmentStateChange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    
