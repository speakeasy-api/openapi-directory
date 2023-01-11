import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3Destination:
    r"""S3Destination
    Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    kms_key_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
