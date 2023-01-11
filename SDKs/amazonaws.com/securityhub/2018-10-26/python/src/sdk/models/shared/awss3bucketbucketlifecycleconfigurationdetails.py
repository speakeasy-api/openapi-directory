import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationrulesdetails as shared_awss3bucketbucketlifecycleconfigurationrulesdetails


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationDetails
    The lifecycle configuration for the objects in the S3 bucket.
    """
    
    rules: Optional[list[shared_awss3bucketbucketlifecycleconfigurationrulesdetails.AwsS3BucketBucketLifecycleConfigurationRulesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
