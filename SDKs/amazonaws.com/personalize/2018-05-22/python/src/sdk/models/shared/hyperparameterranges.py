import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categoricalhyperparameterrange as shared_categoricalhyperparameterrange
from ..shared import continuoushyperparameterrange as shared_continuoushyperparameterrange
from ..shared import integerhyperparameterrange as shared_integerhyperparameterrange


@dataclass_json
@dataclasses.dataclass
class HyperParameterRanges:
    r"""HyperParameterRanges
    Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
    """
    
    categorical_hyper_parameter_ranges: Optional[list[shared_categoricalhyperparameterrange.CategoricalHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoricalHyperParameterRanges') }})
    continuous_hyper_parameter_ranges: Optional[list[shared_continuoushyperparameterrange.ContinuousHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousHyperParameterRanges') }})
    integer_hyper_parameter_ranges: Optional[list[shared_integerhyperparameterrange.IntegerHyperParameterRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerHyperParameterRanges') }})
    
