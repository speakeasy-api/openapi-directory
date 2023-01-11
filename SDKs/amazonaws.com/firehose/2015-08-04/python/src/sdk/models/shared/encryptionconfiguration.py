import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kmsencryptionconfig as shared_kmsencryptionconfig
from ..shared import noencryptionconfig_enum as shared_noencryptionconfig_enum


@dataclass_json
@dataclasses.dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Describes the encryption for a destination in Amazon S3.
    """
    
    kms_encryption_config: Optional[shared_kmsencryptionconfig.KmsEncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionConfig') }})
    no_encryption_config: Optional[shared_noencryptionconfig_enum.NoEncryptionConfigEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoEncryptionConfig') }})
    
