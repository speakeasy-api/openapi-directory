import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketnotificationconfigurations3keyfilter as shared_awss3bucketnotificationconfigurations3keyfilter


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketNotificationConfigurationFilter:
    r"""AwsS3BucketNotificationConfigurationFilter
    Filtering information for the notifications. The filtering is based on Amazon S3 key names.
    """
    
    s3_key_filter: Optional[shared_awss3bucketnotificationconfigurations3keyfilter.AwsS3BucketNotificationConfigurationS3KeyFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3KeyFilter') }})
    
