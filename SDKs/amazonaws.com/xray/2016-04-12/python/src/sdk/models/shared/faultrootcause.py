import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faultrootcauseservice as shared_faultrootcauseservice


@dataclass_json
@dataclasses.dataclass
class FaultRootCause:
    r"""FaultRootCause
    The root cause information for a trace summary fault.
    """
    
    client_impacting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientImpacting') }})
    services: Optional[list[shared_faultrootcauseservice.FaultRootCauseService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Services') }})
    
