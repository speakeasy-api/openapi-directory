import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import realtimecontactanalysissegment as shared_realtimecontactanalysissegment


@dataclass_json
@dataclasses.dataclass
class ListRealtimeContactAnalysisSegmentsResponse:
    segments: list[shared_realtimecontactanalysissegment.RealtimeContactAnalysisSegment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
