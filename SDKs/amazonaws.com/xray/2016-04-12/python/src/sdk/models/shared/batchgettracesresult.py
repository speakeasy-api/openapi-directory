import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trace as shared_trace


@dataclass_json
@dataclasses.dataclass
class BatchGetTracesResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    traces: Optional[list[shared_trace.Trace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traces') }})
    unprocessed_trace_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedTraceIds') }})
    
