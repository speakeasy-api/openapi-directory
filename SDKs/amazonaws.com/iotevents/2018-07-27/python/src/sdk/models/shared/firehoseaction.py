import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payload as shared_payload


@dataclass_json
@dataclasses.dataclass
class FirehoseAction:
    r"""FirehoseAction
    Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    """
    
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStreamName') }})
    payload: Optional[shared_payload.Payload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    separator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separator') }})
    
