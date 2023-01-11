import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payload as shared_payload


@dataclass_json
@dataclasses.dataclass
class IotEventsAction:
    r"""IotEventsAction
    Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
    """
    
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    payload: Optional[shared_payload.Payload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
