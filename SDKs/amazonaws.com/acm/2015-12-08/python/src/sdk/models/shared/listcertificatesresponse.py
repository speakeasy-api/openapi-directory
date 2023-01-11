import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatesummary as shared_certificatesummary


@dataclass_json
@dataclasses.dataclass
class ListCertificatesResponse:
    certificate_summary_list: Optional[list[shared_certificatesummary.CertificateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
