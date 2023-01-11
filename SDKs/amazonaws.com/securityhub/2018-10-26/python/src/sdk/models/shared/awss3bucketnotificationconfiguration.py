import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketnotificationconfigurationdetail as shared_awss3bucketnotificationconfigurationdetail


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketNotificationConfiguration:
    r"""AwsS3BucketNotificationConfiguration
    The notification configuration for the S3 bucket.
    """
    
    configurations: Optional[list[shared_awss3bucketnotificationconfigurationdetail.AwsS3BucketNotificationConfigurationDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    
