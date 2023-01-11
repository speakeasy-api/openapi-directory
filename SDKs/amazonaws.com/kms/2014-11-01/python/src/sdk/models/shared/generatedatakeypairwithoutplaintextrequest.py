import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datakeypairspec_enum as shared_datakeypairspec_enum


@dataclass_json
@dataclasses.dataclass
class GenerateDataKeyPairWithoutPlaintextRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_pair_spec: shared_datakeypairspec_enum.DataKeyPairSpecEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPairSpec') }})
    encryption_context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionContext') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    
