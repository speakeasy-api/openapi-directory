import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackrulecompliance as shared_conformancepackrulecompliance


@dataclass_json
@dataclasses.dataclass
class DescribeConformancePackComplianceResponse:
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_rule_compliance_list: list[shared_conformancepackrulecompliance.ConformancePackRuleCompliance] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackRuleComplianceList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
