import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3object as shared_s3object


@dataclass_json
@dataclasses.dataclass
class GroundTruthManifest:
    r"""GroundTruthManifest
    The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
    """
    
    s3_object: Optional[shared_s3object.S3Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Object') }})
    
