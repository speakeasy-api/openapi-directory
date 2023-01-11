import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsetimerootcauseservice as shared_responsetimerootcauseservice


@dataclass_json
@dataclasses.dataclass
class ResponseTimeRootCause:
    r"""ResponseTimeRootCause
    The root cause information for a response time warning.
    """
    
    client_impacting: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientImpacting') }})
    services: Optional[list[shared_responsetimerootcauseservice.ResponseTimeRootCauseService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Services') }})
    
