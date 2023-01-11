import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class ReEncryptRequest:
    ciphertext_blob: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    destination_key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationKeyId') }})
    destination_encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionAlgorithm') }})
    destination_encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionContext') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    source_encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionAlgorithm') }})
    source_encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionContext') }})
    source_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceKeyId') }})
    
