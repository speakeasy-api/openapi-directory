import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingstatisticsummary as shared_samplingstatisticsummary


@dataclass_json
@dataclasses.dataclass
class GetSamplingStatisticSummariesResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sampling_statistic_summaries: Optional[list[shared_samplingstatisticsummary.SamplingStatisticSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingStatisticSummaries') }})
    
