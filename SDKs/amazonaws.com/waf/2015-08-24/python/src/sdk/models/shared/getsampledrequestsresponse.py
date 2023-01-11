import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sampledhttprequest as shared_sampledhttprequest
from ..shared import timewindow as shared_timewindow


@dataclass_json
@dataclasses.dataclass
class GetSampledRequestsResponse:
    population_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PopulationSize') }})
    sampled_requests: Optional[list[shared_sampledhttprequest.SampledHTTPRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampledRequests') }})
    time_window: Optional[shared_timewindow.TimeWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeWindow') }})
    
