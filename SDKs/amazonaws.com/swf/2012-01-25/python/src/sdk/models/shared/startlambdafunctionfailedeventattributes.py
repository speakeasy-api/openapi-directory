import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startlambdafunctionfailedcause_enum as shared_startlambdafunctionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class StartLambdaFunctionFailedEventAttributes:
    r"""StartLambdaFunctionFailedEventAttributes
    Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
    """
    
    cause: Optional[shared_startlambdafunctionfailedcause_enum.StartLambdaFunctionFailedCauseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    scheduled_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    
