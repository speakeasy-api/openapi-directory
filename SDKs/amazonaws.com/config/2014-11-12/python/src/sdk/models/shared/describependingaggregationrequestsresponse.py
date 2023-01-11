import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pendingaggregationrequest as shared_pendingaggregationrequest


@dataclass_json
@dataclasses.dataclass
class DescribePendingAggregationRequestsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    pending_aggregation_requests: Optional[list[shared_pendingaggregationrequest.PendingAggregationRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingAggregationRequests') }})
    
