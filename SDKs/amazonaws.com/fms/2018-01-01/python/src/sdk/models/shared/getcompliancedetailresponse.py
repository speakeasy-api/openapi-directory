import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policycompliancedetail as shared_policycompliancedetail


@dataclass_json
@dataclasses.dataclass
class GetComplianceDetailResponse:
    policy_compliance_detail: Optional[shared_policycompliancedetail.PolicyComplianceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyComplianceDetail') }})
    
