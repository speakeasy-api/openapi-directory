import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionStartedEventAttributes:
    r"""LambdaFunctionStartedEventAttributes
    Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    
