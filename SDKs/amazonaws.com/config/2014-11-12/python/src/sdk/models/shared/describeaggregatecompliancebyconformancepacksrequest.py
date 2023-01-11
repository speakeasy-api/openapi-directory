import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateconformancepackcompliancefilters as shared_aggregateconformancepackcompliancefilters


@dataclass_json
@dataclasses.dataclass
class DescribeAggregateComplianceByConformancePacksRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    filters: Optional[shared_aggregateconformancepackcompliancefilters.AggregateConformancePackComplianceFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
