import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketnotificationconfigurationfilter as shared_awss3bucketnotificationconfigurationfilter


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketNotificationConfigurationDetail:
    r"""AwsS3BucketNotificationConfigurationDetail
    Details for an S3 bucket notification configuration.
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    events: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    filter: Optional[shared_awss3bucketnotificationconfigurationfilter.AwsS3BucketNotificationConfigurationFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
