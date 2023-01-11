import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paralleldataformat_enum as shared_paralleldataformat_enum


@dataclass_json
@dataclasses.dataclass
class ParallelDataConfig:
    r"""ParallelDataConfig
    Specifies the format and S3 location of the parallel data input file.
    """
    
    format: shared_paralleldataformat_enum.ParallelDataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
