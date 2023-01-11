import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ssmcontrols as shared_ssmcontrols


@dataclass_json
@dataclasses.dataclass
class ExecutionControls:
    r"""ExecutionControls
    The controls that Config uses for executing remediations.
    """
    
    ssm_controls: Optional[shared_ssmcontrols.SsmControls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsmControls') }})
    
