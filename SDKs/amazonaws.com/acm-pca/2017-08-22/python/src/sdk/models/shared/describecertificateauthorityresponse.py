import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateauthority as shared_certificateauthority


@dataclass_json
@dataclasses.dataclass
class DescribeCertificateAuthorityResponse:
    certificate_authority: Optional[shared_certificateauthority.CertificateAuthority] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthority') }})
    
