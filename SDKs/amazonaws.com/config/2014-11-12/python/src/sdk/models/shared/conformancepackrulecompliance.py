import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancetype_enum as shared_conformancepackcompliancetype_enum


@dataclass_json
@dataclasses.dataclass
class ConformancePackRuleCompliance:
    r"""ConformancePackRuleCompliance
    Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
    """
    
    compliance_type: Optional[shared_conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    controls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Controls') }})
    
