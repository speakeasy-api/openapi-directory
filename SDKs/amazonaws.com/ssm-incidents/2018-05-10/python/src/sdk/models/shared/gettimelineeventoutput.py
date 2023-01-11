import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timelineevent as shared_timelineevent


@dataclass_json
@dataclasses.dataclass
class GetTimelineEventOutput:
    event: shared_timelineevent.TimelineEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    
