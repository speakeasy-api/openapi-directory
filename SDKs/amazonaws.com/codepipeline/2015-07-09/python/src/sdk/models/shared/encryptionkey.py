import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionkeytype_enum as shared_encryptionkeytype_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionKey:
    r"""EncryptionKey
    Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: shared_encryptionkeytype_enum.EncryptionKeyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
