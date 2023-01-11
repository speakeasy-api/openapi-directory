import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyqualifierinfo as shared_policyqualifierinfo


@dataclass_json
@dataclasses.dataclass
class PolicyInformation:
    r"""PolicyInformation
    Defines the X.509 <code>CertificatePolicies</code> extension.
    """
    
    cert_policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertPolicyId') }})
    policy_qualifiers: Optional[list[shared_policyqualifierinfo.PolicyQualifierInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyQualifiers') }})
    
