import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddAttachmentsToSetResponse:
    r"""AddAttachmentsToSetResponse
    The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
    """
    
    attachment_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentSetId') }})
    expiry_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    
