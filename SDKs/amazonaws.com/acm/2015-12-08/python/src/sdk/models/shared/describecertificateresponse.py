import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatedetail as shared_certificatedetail


@dataclass_json
@dataclasses.dataclass
class DescribeCertificateResponse:
    certificate: Optional[shared_certificatedetail.CertificateDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    
