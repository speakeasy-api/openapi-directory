import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revocationreason_enum as shared_revocationreason_enum


@dataclass_json
@dataclasses.dataclass
class RevokeCertificateRequest:
    certificate_authority_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    certificate_serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateSerial') }})
    revocation_reason: shared_revocationreason_enum.RevocationReasonEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationReason') }})
    
