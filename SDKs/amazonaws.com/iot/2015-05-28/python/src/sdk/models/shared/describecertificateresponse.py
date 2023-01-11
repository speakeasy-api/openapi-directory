import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatedescription as shared_certificatedescription


@dataclass_json
@dataclasses.dataclass
class DescribeCertificateResponse:
    r"""DescribeCertificateResponse
    The output of the DescribeCertificate operation.
    """
    
    certificate_description: Optional[shared_certificatedescription.CertificateDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDescription') }})
    
