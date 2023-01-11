import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cycle as shared_cycle
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class StandardsProfile:
    r"""StandardsProfile
    A complex type that defines a seller profile.
    """
    
    cycle: Optional[shared_cycle.Cycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    default_program: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProgram') }})
    evaluation_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationReason') }})
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    program: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    standards_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardsLevel') }})
    
