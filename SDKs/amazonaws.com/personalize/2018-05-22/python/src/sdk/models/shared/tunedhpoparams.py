import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TunedHpoParams:
    r"""TunedHpoParams
    If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model.
    """
    
    algorithm_hyper_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithmHyperParameters') }})
    
