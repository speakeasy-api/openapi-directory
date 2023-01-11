import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancecontributorcount as shared_compliancecontributorcount
from ..shared import compliancetype_enum as shared_compliancetype_enum


@dataclass_json
@dataclasses.dataclass
class Compliance:
    r"""Compliance
    Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
    """
    
    compliance_contributor_count: Optional[shared_compliancecontributorcount.ComplianceContributorCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceContributorCount') }})
    compliance_type: Optional[shared_compliancetype_enum.ComplianceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    
