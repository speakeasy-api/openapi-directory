import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchencryption as shared_cloudwatchencryption
from ..shared import jobbookmarksencryption as shared_jobbookmarksencryption
from ..shared import s3encryption as shared_s3encryption


@dataclass_json
@dataclasses.dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Specifies an encryption configuration.
    """
    
    cloud_watch_encryption: Optional[shared_cloudwatchencryption.CloudWatchEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchEncryption') }})
    job_bookmarks_encryption: Optional[shared_jobbookmarksencryption.JobBookmarksEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobBookmarksEncryption') }})
    s3_encryption: Optional[list[shared_s3encryption.S3Encryption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Encryption') }})
    
