import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttachmentStateChange:
    r"""AttachmentStateChange
    An object representing a change in state for a task attachment.
    """
    
    attachment_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentArn') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
