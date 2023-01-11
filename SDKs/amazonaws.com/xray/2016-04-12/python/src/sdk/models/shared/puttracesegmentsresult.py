import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import unprocessedtracesegment as shared_unprocessedtracesegment


@dataclass_json
@dataclasses.dataclass
class PutTraceSegmentsResult:
    unprocessed_trace_segments: Optional[list[shared_unprocessedtracesegment.UnprocessedTraceSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedTraceSegments') }})
    
