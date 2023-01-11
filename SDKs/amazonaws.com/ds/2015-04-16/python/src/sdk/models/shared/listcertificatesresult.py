import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateinfo as shared_certificateinfo


@dataclass_json
@dataclasses.dataclass
class ListCertificatesResult:
    certificates_info: Optional[list[shared_certificateinfo.CertificateInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificatesInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
