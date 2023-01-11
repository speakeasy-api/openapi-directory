import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listener as shared_listener


@dataclass_json
@dataclasses.dataclass
class DescribeListenerResponse:
    listener: Optional[shared_listener.Listener] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Listener') }})
    
