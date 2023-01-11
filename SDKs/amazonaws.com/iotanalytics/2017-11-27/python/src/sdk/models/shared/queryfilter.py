import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deltatime as shared_deltatime


@dataclass_json
@dataclasses.dataclass
class QueryFilter:
    r"""QueryFilter
    Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
    """
    
    delta_time: Optional[shared_deltatime.DeltaTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaTime') }})
    
