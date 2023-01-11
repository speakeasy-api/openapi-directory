import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketnotificationconfigurations3keyfilterrulename_enum as shared_awss3bucketnotificationconfigurations3keyfilterrulename_enum


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilterRule:
    r"""AwsS3BucketNotificationConfigurationS3KeyFilterRule
    Details for a filter rule.
    """
    
    name: Optional[shared_awss3bucketnotificationconfigurations3keyfilterrulename_enum.AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
