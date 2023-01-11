import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configrulecompliancesummaryfilters as shared_configrulecompliancesummaryfilters
from ..shared import configrulecompliancesummarygroupkey_enum as shared_configrulecompliancesummarygroupkey_enum


@dataclass_json
@dataclasses.dataclass
class GetAggregateConfigRuleComplianceSummaryRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    filters: Optional[shared_configrulecompliancesummaryfilters.ConfigRuleComplianceSummaryFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_key: Optional[shared_configrulecompliancesummarygroupkey_enum.ConfigRuleComplianceSummaryGroupKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
