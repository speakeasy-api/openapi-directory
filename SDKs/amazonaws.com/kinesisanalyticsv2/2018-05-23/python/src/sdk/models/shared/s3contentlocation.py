import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class S3ContentLocation:
    r"""S3ContentLocation
    For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. 
    """
    
    bucket_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    object_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectVersion') }})
    
