import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctiontimeouttype_enum as shared_lambdafunctiontimeouttype_enum


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionTimedOutEventAttributes:
    r"""LambdaFunctionTimedOutEventAttributes
    Provides details of the <code>LambdaFunctionTimedOut</code> event.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: Optional[shared_lambdafunctiontimeouttype_enum.LambdaFunctionTimeoutTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
