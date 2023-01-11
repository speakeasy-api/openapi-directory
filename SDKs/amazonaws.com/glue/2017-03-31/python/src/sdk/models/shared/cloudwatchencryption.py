import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchencryptionmode_enum as shared_cloudwatchencryptionmode_enum


@dataclass_json
@dataclasses.dataclass
class CloudWatchEncryption:
    r"""CloudWatchEncryption
    Specifies how Amazon CloudWatch data should be encrypted.
    """
    
    cloud_watch_encryption_mode: Optional[shared_cloudwatchencryptionmode_enum.CloudWatchEncryptionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchEncryptionMode') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    
