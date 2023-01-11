import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateevaluationresult as shared_aggregateevaluationresult


@dataclass_json
@dataclasses.dataclass
class GetAggregateComplianceDetailsByConfigRuleResponse:
    aggregate_evaluation_results: Optional[list[shared_aggregateevaluationresult.AggregateEvaluationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateEvaluationResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
