import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferenceinputnameconfiguration as shared_inferenceinputnameconfiguration
from ..shared import inferences3inputconfiguration as shared_inferences3inputconfiguration


@dataclass_json
@dataclasses.dataclass
class InferenceInputConfiguration:
    r"""InferenceInputConfiguration
    Specifies configuration information for the input data for the inference, including S3 location of input data.. 
    """
    
    inference_input_name_configuration: Optional[shared_inferenceinputnameconfiguration.InferenceInputNameConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceInputNameConfiguration') }})
    input_time_zone_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputTimeZoneOffset') }})
    s3_input_configuration: Optional[shared_inferences3inputconfiguration.InferenceS3InputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
