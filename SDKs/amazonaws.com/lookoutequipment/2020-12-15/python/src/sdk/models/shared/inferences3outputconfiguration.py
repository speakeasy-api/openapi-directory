import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InferenceS3OutputConfiguration:
    r"""InferenceS3OutputConfiguration
     Specifies configuration information for the output results from the inference, including output S3 location. 
    """
    
    bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
