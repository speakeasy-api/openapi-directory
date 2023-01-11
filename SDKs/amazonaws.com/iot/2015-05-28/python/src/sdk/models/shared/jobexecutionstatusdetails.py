import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JobExecutionStatusDetails:
    r"""JobExecutionStatusDetails
    Details of the job execution status.
    """
    
    details_map: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailsMap') }})
    
