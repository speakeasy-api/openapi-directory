import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asset as shared_asset


@dataclass_json
@dataclasses.dataclass
class ValidationData:
    r"""ValidationData
    <p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p> <p>The validation data includes error information for individual JSON lines in the dataset. For more information, see Debugging a Failed Model Training in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>) and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p> <p>The assets array contains a single <a>Asset</a> object. The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of the validation data. </p>
    """
    
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Assets') }})
    
