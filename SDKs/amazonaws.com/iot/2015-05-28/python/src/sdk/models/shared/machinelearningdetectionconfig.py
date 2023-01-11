import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import confidencelevel_enum as shared_confidencelevel_enum


@dataclass_json
@dataclasses.dataclass
class MachineLearningDetectionConfig:
    r"""MachineLearningDetectionConfig
     The configuration of an ML Detect Security Profile. 
    """
    
    confidence_level: shared_confidencelevel_enum.ConfidenceLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevel') }})
    
