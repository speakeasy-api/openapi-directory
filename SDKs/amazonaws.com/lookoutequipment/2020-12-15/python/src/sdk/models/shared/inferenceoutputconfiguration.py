import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferences3outputconfiguration as shared_inferences3outputconfiguration


@dataclass_json
@dataclasses.dataclass
class InferenceOutputConfiguration:
    r"""InferenceOutputConfiguration
     Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. 
    """
    
    s3_output_configuration: shared_inferences3outputconfiguration.InferenceS3OutputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputConfiguration') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
