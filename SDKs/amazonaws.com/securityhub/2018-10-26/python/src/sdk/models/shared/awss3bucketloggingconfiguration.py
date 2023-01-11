import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketLoggingConfiguration:
    r"""AwsS3BucketLoggingConfiguration
    Information about logging for the S3 bucket
    """
    
    destination_bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationBucketName') }})
    log_file_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogFilePrefix') }})
    
