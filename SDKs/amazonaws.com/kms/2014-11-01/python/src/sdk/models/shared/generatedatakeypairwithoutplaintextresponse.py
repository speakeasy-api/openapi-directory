import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datakeypairspec_enum as shared_datakeypairspec_enum


@dataclass_json
@dataclasses.dataclass
class GenerateDataKeyPairWithoutPlaintextResponse:
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_pair_spec: Optional[shared_datakeypairspec_enum.DataKeyPairSpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPairSpec') }})
    private_key_ciphertext_blob: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKeyCiphertextBlob') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    
