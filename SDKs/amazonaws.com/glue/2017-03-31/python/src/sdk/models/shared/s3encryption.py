import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3encryptionmode_enum as shared_s3encryptionmode_enum


@dataclass_json
@dataclasses.dataclass
class S3Encryption:
    r"""S3Encryption
    Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
    """
    
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    s3_encryption_mode: Optional[shared_s3encryptionmode_enum.S3EncryptionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3EncryptionMode') }})
    
