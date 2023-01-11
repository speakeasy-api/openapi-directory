import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionstatus_enum as shared_encryptionstatus_enum
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    A configuration document that specifies encryption configuration settings.
    """
    
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    status: Optional[shared_encryptionstatus_enum.EncryptionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
