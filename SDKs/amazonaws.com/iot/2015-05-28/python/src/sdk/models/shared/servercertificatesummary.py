import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servercertificatestatus_enum as shared_servercertificatestatus_enum


@dataclass_json
@dataclasses.dataclass
class ServerCertificateSummary:
    r"""ServerCertificateSummary
    An object that contains information about a server certificate.
    """
    
    server_certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateArn') }})
    server_certificate_status: Optional[shared_servercertificatestatus_enum.ServerCertificateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateStatus') }})
    server_certificate_status_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateStatusDetail') }})
    
