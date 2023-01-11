import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketserversideencryptionbydefault as shared_awss3bucketserversideencryptionbydefault


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketServerSideEncryptionRule:
    r"""AwsS3BucketServerSideEncryptionRule
    An encryption rule to apply to the S3 bucket.
    """
    
    apply_server_side_encryption_by_default: Optional[shared_awss3bucketserversideencryptionbydefault.AwsS3BucketServerSideEncryptionByDefault] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyServerSideEncryptionByDefault') }})
    
