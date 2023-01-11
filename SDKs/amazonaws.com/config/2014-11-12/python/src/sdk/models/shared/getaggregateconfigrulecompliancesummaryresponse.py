import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatecompliancecount as shared_aggregatecompliancecount


@dataclass_json
@dataclasses.dataclass
class GetAggregateConfigRuleComplianceSummaryResponse:
    aggregate_compliance_counts: Optional[list[shared_aggregatecompliancecount.AggregateComplianceCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateComplianceCounts') }})
    group_by_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
