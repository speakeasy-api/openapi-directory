import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatecompliancebyconfigrule as shared_aggregatecompliancebyconfigrule


@dataclass_json
@dataclasses.dataclass
class DescribeAggregateComplianceByConfigRulesResponse:
    aggregate_compliance_by_config_rules: Optional[list[shared_aggregatecompliancebyconfigrule.AggregateComplianceByConfigRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateComplianceByConfigRules') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
