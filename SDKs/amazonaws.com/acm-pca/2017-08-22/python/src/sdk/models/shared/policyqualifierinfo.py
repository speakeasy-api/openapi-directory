import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyqualifierid_enum as shared_policyqualifierid_enum
from ..shared import qualifier as shared_qualifier


@dataclass_json
@dataclasses.dataclass
class PolicyQualifierInfo:
    r"""PolicyQualifierInfo
    Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
    """
    
    policy_qualifier_id: shared_policyqualifierid_enum.PolicyQualifierIDEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyQualifierId') }})
    qualifier: shared_qualifier.Qualifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Qualifier') }})
    
