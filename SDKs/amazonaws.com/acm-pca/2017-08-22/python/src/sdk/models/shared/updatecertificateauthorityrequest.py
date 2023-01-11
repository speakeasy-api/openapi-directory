import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import revocationconfiguration as shared_revocationconfiguration
from ..shared import certificateauthoritystatus_enum as shared_certificateauthoritystatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateCertificateAuthorityRequest:
    certificate_authority_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    revocation_configuration: Optional[shared_revocationconfiguration.RevocationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationConfiguration') }})
    status: Optional[shared_certificateauthoritystatus_enum.CertificateAuthorityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
