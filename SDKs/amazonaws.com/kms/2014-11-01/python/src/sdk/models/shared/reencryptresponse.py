import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class ReEncryptResponse:
    ciphertext_blob: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    destination_encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionAlgorithm') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    source_encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionAlgorithm') }})
    source_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceKeyId') }})
    
