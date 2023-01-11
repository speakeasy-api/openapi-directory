import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceid as shared_serviceid


@dataclass_json
@dataclasses.dataclass
class TraceUser:
    r"""TraceUser
    Information about a user recorded in segment documents.
    """
    
    service_ids: Optional[list[shared_serviceid.ServiceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
