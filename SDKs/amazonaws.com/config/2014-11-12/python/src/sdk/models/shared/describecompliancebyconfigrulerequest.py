import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancetype_enum as shared_compliancetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeComplianceByConfigRuleRequest:
    r"""DescribeComplianceByConfigRuleRequest
    <p/>
    """
    
    compliance_types: Optional[list[shared_compliancetype_enum.ComplianceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceTypes') }})
    config_rule_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleNames') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
