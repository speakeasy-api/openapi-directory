import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatesummary as shared_certificatesummary
from ..shared import operation as shared_operation


@dataclass_json
@dataclasses.dataclass
class CreateCertificateResult:
    certificate: Optional[shared_certificatesummary.CertificateSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
