import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventstartcondition as shared_eventstartcondition
from ..shared import segmentcondition as shared_segmentcondition


@dataclass_json
@dataclasses.dataclass
class StartCondition:
    r"""StartCondition
    Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_start_condition: Optional[shared_eventstartcondition.EventStartCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStartCondition') }})
    segment_start_condition: Optional[shared_segmentcondition.SegmentCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentStartCondition') }})
    
