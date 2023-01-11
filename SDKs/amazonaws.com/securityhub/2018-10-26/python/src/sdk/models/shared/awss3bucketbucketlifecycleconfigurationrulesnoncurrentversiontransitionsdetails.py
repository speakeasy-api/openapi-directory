import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
    A transition rule that describes when noncurrent objects transition to a specified storage class.
    """
    
    days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Days') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    
