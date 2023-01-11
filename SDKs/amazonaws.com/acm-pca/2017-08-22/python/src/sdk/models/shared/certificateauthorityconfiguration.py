import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csrextensions as shared_csrextensions
from ..shared import keyalgorithm_enum as shared_keyalgorithm_enum
from ..shared import signingalgorithm_enum as shared_signingalgorithm_enum
from ..shared import asn1subject as shared_asn1subject


@dataclass_json
@dataclasses.dataclass
class CertificateAuthorityConfiguration:
    r"""CertificateAuthorityConfiguration
    Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href=\"https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html\">CreateCertificateAuthority</a> action. 
    """
    
    key_algorithm: shared_keyalgorithm_enum.KeyAlgorithmEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    signing_algorithm: shared_signingalgorithm_enum.SigningAlgorithmEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    subject: shared_asn1subject.Asn1Subject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    csr_extensions: Optional[shared_csrextensions.CsrExtensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsrExtensions') }})
    
