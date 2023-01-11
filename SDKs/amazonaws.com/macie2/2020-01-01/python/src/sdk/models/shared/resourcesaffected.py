import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3bucket as shared_s3bucket
from ..shared import s3object as shared_s3object


@dataclass_json
@dataclasses.dataclass
class ResourcesAffected:
    r"""ResourcesAffected
    Provides information about the resources that a finding applies to.
    """
    
    s3_bucket: Optional[shared_s3bucket.S3Bucket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_object: Optional[shared_s3object.S3Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Object') }})
    
