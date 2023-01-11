import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mluserdataencryptionmodestring_enum as shared_mluserdataencryptionmodestring_enum


@dataclass_json
@dataclasses.dataclass
class MlUserDataEncryption:
    r"""MlUserDataEncryption
    The encryption-at-rest settings of the transform that apply to accessing user data.
    """
    
    ml_user_data_encryption_mode: shared_mluserdataencryptionmodestring_enum.MlUserDataEncryptionModeStringEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MlUserDataEncryptionMode') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
