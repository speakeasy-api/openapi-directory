import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automlconfig as shared_automlconfig
from ..shared import hpoconfig as shared_hpoconfig
from ..shared import optimizationobjective as shared_optimizationobjective


@dataclass_json
@dataclasses.dataclass
class SolutionConfig:
    r"""SolutionConfig
    Describes the configuration properties for the solution.
    """
    
    algorithm_hyper_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithmHyperParameters') }})
    auto_ml_config: Optional[shared_automlconfig.AutoMlConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoMLConfig') }})
    event_value_threshold: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventValueThreshold') }})
    feature_transformation_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureTransformationParameters') }})
    hpo_config: Optional[shared_hpoconfig.HpoConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoConfig') }})
    optimization_objective: Optional[shared_optimizationobjective.OptimizationObjective] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    
