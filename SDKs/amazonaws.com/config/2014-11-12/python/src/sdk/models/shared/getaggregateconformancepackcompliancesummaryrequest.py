import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateconformancepackcompliancesummaryfilters as shared_aggregateconformancepackcompliancesummaryfilters
from ..shared import aggregateconformancepackcompliancesummarygroupkey_enum as shared_aggregateconformancepackcompliancesummarygroupkey_enum


@dataclass_json
@dataclasses.dataclass
class GetAggregateConformancePackComplianceSummaryRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    filters: Optional[shared_aggregateconformancepackcompliancesummaryfilters.AggregateConformancePackComplianceSummaryFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_key: Optional[shared_aggregateconformancepackcompliancesummarygroupkey_enum.AggregateConformancePackComplianceSummaryGroupKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
