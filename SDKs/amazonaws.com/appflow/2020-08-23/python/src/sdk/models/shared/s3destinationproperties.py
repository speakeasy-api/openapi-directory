import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3outputformatconfig as shared_s3outputformatconfig


@dataclass_json
@dataclasses.dataclass
class S3DestinationProperties:
    r"""S3DestinationProperties
     The properties that are applied when Amazon S3 is used as a destination. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    s3_output_format_config: Optional[shared_s3outputformatconfig.S3OutputFormatConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3OutputFormatConfig') }})
    
