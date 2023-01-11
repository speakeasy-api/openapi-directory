import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3object as shared_s3object


@dataclass_json
@dataclasses.dataclass
class Summary:
    r"""Summary
    <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>
    """
    
    s3_object: Optional[shared_s3object.S3Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Object') }})
    
