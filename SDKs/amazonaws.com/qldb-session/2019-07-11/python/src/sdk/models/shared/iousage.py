import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IoUsage:
    r"""IoUsage
    Contains I/O usage metrics for a command that was invoked.
    """
    
    read_i_os: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadIOs') }})
    write_i_os: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteIOs') }})
    
