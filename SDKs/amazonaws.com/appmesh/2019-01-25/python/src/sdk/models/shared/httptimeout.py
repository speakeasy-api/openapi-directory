import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class HTTPTimeout:
    r"""HTTPTimeout
    An object that represents types of timeouts. 
    """
    
    idle: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idle') }})
    per_request: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perRequest') }})
    
