import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancetype_enum as shared_conformancepackcompliancetype_enum


@dataclass_json
@dataclasses.dataclass
class ConformancePackEvaluationFilters:
    r"""ConformancePackEvaluationFilters
    Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
    """
    
    compliance_type: Optional[shared_conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleNames') }})
    resource_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIds') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
