import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class EncryptRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    plaintext: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plaintext') }})
    encryption_algorithm: Optional[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithm') }})
    encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionContext') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    
