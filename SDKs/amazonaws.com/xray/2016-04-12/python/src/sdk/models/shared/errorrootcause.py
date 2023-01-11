import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorrootcauseservice as shared_errorrootcauseservice


@dataclass_json
@dataclasses.dataclass
class ErrorRootCause:
    r"""ErrorRootCause
    The root cause of a trace summary error.
    """
    
    client_impacting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientImpacting') }})
    services: Optional[list[shared_errorrootcauseservice.ErrorRootCauseService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Services') }})
    
