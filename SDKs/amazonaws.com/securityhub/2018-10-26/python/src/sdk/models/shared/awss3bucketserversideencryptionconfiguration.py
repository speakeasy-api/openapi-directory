import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketserversideencryptionrule as shared_awss3bucketserversideencryptionrule


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketServerSideEncryptionConfiguration:
    r"""AwsS3BucketServerSideEncryptionConfiguration
    The encryption configuration for the S3 bucket.
    """
    
    rules: Optional[list[shared_awss3bucketserversideencryptionrule.AwsS3BucketServerSideEncryptionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
