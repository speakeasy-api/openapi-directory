import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateconformancepackcompliancesummary as shared_aggregateconformancepackcompliancesummary


@dataclass_json
@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryResponse:
    aggregate_conformance_pack_compliance_summaries: Optional[list[shared_aggregateconformancepackcompliancesummary.AggregateConformancePackComplianceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateConformancePackComplianceSummaries') }})
    group_by_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
