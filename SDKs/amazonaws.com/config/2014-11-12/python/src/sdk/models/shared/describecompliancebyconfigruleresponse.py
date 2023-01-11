import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancebyconfigrule as shared_compliancebyconfigrule


@dataclass_json
@dataclasses.dataclass
class DescribeComplianceByConfigRuleResponse:
    r"""DescribeComplianceByConfigRuleResponse
    <p/>
    """
    
    compliance_by_config_rules: Optional[list[shared_compliancebyconfigrule.ComplianceByConfigRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceByConfigRules') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
