import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatesummary as shared_certificatesummary


@dataclass_json
@dataclasses.dataclass
class GetCertificatesResult:
    certificates: Optional[list[shared_certificatesummary.CertificateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    
