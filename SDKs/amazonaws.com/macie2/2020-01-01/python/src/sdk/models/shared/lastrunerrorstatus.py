import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lastrunerrorstatuscode_enum as shared_lastrunerrorstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class LastRunErrorStatus:
    r"""LastRunErrorStatus
    Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html\">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.
    """
    
    code: Optional[shared_lastrunerrorstatuscode_enum.LastRunErrorStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
