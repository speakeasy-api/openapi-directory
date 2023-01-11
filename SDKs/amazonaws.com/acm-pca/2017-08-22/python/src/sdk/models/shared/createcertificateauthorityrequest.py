import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateauthorityconfiguration as shared_certificateauthorityconfiguration
from ..shared import certificateauthoritytype_enum as shared_certificateauthoritytype_enum
from ..shared import keystoragesecuritystandard_enum as shared_keystoragesecuritystandard_enum
from ..shared import revocationconfiguration as shared_revocationconfiguration
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateCertificateAuthorityRequest:
    certificate_authority_configuration: shared_certificateauthorityconfiguration.CertificateAuthorityConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityConfiguration') }})
    certificate_authority_type: shared_certificateauthoritytype_enum.CertificateAuthorityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityType') }})
    idempotency_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    key_storage_security_standard: Optional[shared_keystoragesecuritystandard_enum.KeyStorageSecurityStandardEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorageSecurityStandard') }})
    revocation_configuration: Optional[shared_revocationconfiguration.RevocationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationConfiguration') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
