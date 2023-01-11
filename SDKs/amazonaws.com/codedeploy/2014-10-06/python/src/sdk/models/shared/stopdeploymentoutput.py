import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stopstatus_enum as shared_stopstatus_enum


@dataclass_json
@dataclasses.dataclass
class StopDeploymentOutput:
    r"""StopDeploymentOutput
     Represents the output of a <code>StopDeployment</code> operation. 
    """
    
    status: Optional[shared_stopstatus_enum.StopStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
