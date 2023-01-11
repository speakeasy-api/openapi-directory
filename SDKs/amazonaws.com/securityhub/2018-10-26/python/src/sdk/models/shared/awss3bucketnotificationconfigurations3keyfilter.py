import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketnotificationconfigurations3keyfilterrule as shared_awss3bucketnotificationconfigurations3keyfilterrule


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilter:
    r"""AwsS3BucketNotificationConfigurationS3KeyFilter
    Details for an Amazon S3 filter.
    """
    
    filter_rules: Optional[list[shared_awss3bucketnotificationconfigurations3keyfilterrule.AwsS3BucketNotificationConfigurationS3KeyFilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterRules') }})
    
