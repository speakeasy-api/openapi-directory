import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categoricalparameterrange as shared_categoricalparameterrange
from ..shared import continuousparameterrange as shared_continuousparameterrange
from ..shared import integerparameterrange as shared_integerparameterrange


@dataclass_json
@dataclasses.dataclass
class ParameterRanges:
    r"""ParameterRanges
    Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object.
    """
    
    categorical_parameter_ranges: Optional[list[shared_categoricalparameterrange.CategoricalParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CategoricalParameterRanges') }})
    continuous_parameter_ranges: Optional[list[shared_continuousparameterrange.ContinuousParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousParameterRanges') }})
    integer_parameter_ranges: Optional[list[shared_integerparameterrange.IntegerParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegerParameterRanges') }})
    
