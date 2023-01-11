import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultcategoricalhyperparameterrange as shared_defaultcategoricalhyperparameterrange
from ..shared import defaultcontinuoushyperparameterrange as shared_defaultcontinuoushyperparameterrange
from ..shared import defaultintegerhyperparameterrange as shared_defaultintegerhyperparameterrange


@dataclass_json
@dataclasses.dataclass
class DefaultHyperParameterRanges:
    r"""DefaultHyperParameterRanges
    Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
    """
    
    categorical_hyper_parameter_ranges: Optional[list[shared_defaultcategoricalhyperparameterrange.DefaultCategoricalHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalHyperParameterRanges') }})
    continuous_hyper_parameter_ranges: Optional[list[shared_defaultcontinuoushyperparameterrange.DefaultContinuousHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousHyperParameterRanges') }})
    integer_hyper_parameter_ranges: Optional[list[shared_defaultintegerhyperparameterrange.DefaultIntegerHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerHyperParameterRanges') }})
    
