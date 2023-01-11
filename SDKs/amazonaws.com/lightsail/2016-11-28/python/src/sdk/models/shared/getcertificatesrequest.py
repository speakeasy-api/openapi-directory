import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatestatus_enum as shared_certificatestatus_enum


@dataclass_json
@dataclasses.dataclass
class GetCertificatesRequest:
    certificate_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    certificate_statuses: Optional[list[shared_certificatestatus_enum.CertificateStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateStatuses') }})
    include_certificate_details: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeCertificateDetails') }})
    
