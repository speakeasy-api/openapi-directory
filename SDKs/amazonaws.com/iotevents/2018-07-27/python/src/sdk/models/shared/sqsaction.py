import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payload as shared_payload


@dataclass_json
@dataclasses.dataclass
class SqsAction:
    r"""SqsAction
    Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
    """
    
    queue_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueUrl') }})
    payload: Optional[shared_payload.Payload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    use_base64: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useBase64') }})
    
