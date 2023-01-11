import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class EncryptResponse:
    ciphertext_blob: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithm') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
