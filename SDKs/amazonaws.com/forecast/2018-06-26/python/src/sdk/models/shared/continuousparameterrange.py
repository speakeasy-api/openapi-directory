import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingtype_enum as shared_scalingtype_enum


@dataclass_json
@dataclasses.dataclass
class ContinuousParameterRange:
    r"""ContinuousParameterRange
    Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
    """
    
    max_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scaling_type: Optional[shared_scalingtype_enum.ScalingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingType') }})
    
