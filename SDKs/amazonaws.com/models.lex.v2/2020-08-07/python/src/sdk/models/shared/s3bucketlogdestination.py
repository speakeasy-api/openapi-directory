import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3BucketLogDestination:
    r"""S3BucketLogDestination
    Specifies an Amazon S3 bucket for logging audio conversations
    """
    
    log_prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logPrefix') }})
    s3_bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketArn') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyArn') }})
    
