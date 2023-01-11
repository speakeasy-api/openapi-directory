import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomerManagedChannelS3Storage:
    r"""CustomerManagedChannelS3Storage
    Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.
    """
    
    bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
