import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetSigningCertificateResponse:
    r"""GetSigningCertificateResponse
    Response from Cognito for a signing certificate request.
    """
    
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    
