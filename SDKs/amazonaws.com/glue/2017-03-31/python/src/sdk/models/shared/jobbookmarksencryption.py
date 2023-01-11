import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobbookmarksencryptionmode_enum as shared_jobbookmarksencryptionmode_enum


@dataclass_json
@dataclasses.dataclass
class JobBookmarksEncryption:
    r"""JobBookmarksEncryption
    Specifies how job bookmark data should be encrypted.
    """
    
    job_bookmarks_encryption_mode: Optional[shared_jobbookmarksencryptionmode_enum.JobBookmarksEncryptionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobBookmarksEncryptionMode') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    
