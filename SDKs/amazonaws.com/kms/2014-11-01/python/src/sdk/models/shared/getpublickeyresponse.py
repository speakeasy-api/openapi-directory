import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum
from ..shared import keyspec_enum as shared_keyspec_enum
from ..shared import keyusagetype_enum as shared_keyusagetype_enum
from ..shared import signingalgorithmspec_enum as shared_signingalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class GetPublicKeyResponse:
    customer_master_key_spec: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerMasterKeySpec') }})
    encryption_algorithms: Optional[list[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithms') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_spec: Optional[shared_keyspec_enum.KeySpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySpec') }})
    key_usage: Optional[shared_keyusagetype_enum.KeyUsageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    signing_algorithms: Optional[list[shared_signingalgorithmspec_enum.SigningAlgorithmSpecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithms') }})
    
