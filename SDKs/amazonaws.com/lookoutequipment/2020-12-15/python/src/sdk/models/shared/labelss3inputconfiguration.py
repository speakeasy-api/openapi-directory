import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LabelsS3InputConfiguration:
    r"""LabelsS3InputConfiguration
    The location information (prefix and bucket name) for the s3 location being used for label data. 
    """
    
    bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
