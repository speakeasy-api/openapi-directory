import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificate as shared_certificate


@dataclass_json
@dataclasses.dataclass
class DeleteCertificateResponse:
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    
