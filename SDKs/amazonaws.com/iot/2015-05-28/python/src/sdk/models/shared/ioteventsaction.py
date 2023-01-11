import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IotEventsAction:
    r"""IotEventsAction
    Sends an input to an IoT Events detector.
    """
    
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    batch_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchMode') }})
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    
