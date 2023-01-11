import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BucketPolicy:
    r"""BucketPolicy
    Provides information about the permissions settings of the bucket policy for an S3 bucket.
    """
    
    allows_public_read_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsPublicReadAccess') }})
    allows_public_write_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsPublicWriteAccess') }})
    
