import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyinformation as shared_policyinformation
from ..shared import extendedkeyusage as shared_extendedkeyusage
from ..shared import keyusage as shared_keyusage
from ..shared import generalname as shared_generalname


@dataclass_json
@dataclasses.dataclass
class Extensions:
    r"""Extensions
    Contains X.509 extension information for a certificate.
    """
    
    certificate_policies: Optional[list[shared_policyinformation.PolicyInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificatePolicies') }})
    extended_key_usage: Optional[list[shared_extendedkeyusage.ExtendedKeyUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsage') }})
    key_usage: Optional[shared_keyusage.KeyUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    subject_alternative_names: Optional[list[shared_generalname.GeneralName]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    
