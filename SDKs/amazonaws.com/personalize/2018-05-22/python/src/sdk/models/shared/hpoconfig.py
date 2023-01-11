import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hyperparameterranges as shared_hyperparameterranges
from ..shared import hpoobjective as shared_hpoobjective
from ..shared import hporesourceconfig as shared_hporesourceconfig


@dataclass_json
@dataclasses.dataclass
class HpoConfig:
    r"""HpoConfig
    Describes the properties for hyperparameter optimization (HPO).
    """
    
    algorithm_hyper_parameter_ranges: Optional[shared_hyperparameterranges.HyperParameterRanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithmHyperParameterRanges') }})
    hpo_objective: Optional[shared_hpoobjective.HpoObjective] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoObjective') }})
    hpo_resource_config: Optional[shared_hporesourceconfig.HpoResourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoResourceConfig') }})
    
