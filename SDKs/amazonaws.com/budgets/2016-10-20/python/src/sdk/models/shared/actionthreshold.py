import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thresholdtype_enum as shared_thresholdtype_enum


@dataclass_json
@dataclasses.dataclass
class ActionThreshold:
    r"""ActionThreshold
     The trigger threshold of the action. 
    """
    
    action_threshold_type: shared_thresholdtype_enum.ThresholdTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThresholdType') }})
    action_threshold_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThresholdValue') }})
    
