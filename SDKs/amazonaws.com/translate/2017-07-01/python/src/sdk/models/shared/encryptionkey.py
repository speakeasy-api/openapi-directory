import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionkeytype_enum as shared_encryptionkeytype_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionKey:
    r"""EncryptionKey
    The encryption key used to encrypt this object.
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: shared_encryptionkeytype_enum.EncryptionKeyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
