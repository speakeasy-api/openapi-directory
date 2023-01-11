import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configruleevaluationstatus as shared_configruleevaluationstatus


@dataclass_json
@dataclasses.dataclass
class DescribeConfigRuleEvaluationStatusResponse:
    r"""DescribeConfigRuleEvaluationStatusResponse
    <p/>
    """
    
    config_rules_evaluation_status: Optional[list[shared_configruleevaluationstatus.ConfigRuleEvaluationStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRulesEvaluationStatus') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
