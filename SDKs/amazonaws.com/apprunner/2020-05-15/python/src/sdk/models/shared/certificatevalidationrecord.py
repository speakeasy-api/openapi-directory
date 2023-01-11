import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatevalidationrecordstatus_enum as shared_certificatevalidationrecordstatus_enum


@dataclass_json
@dataclasses.dataclass
class CertificateValidationRecord:
    r"""CertificateValidationRecord
    Describes a certificate CNAME record to add to your DNS. For more information, see <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html\">AssociateCustomDomain</a>.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[shared_certificatevalidationrecordstatus_enum.CertificateValidationRecordStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
