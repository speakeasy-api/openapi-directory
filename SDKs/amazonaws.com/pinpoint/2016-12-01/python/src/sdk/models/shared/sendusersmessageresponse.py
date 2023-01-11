import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointmessageresult as shared_endpointmessageresult


@dataclass_json
@dataclasses.dataclass
class SendUsersMessageResponse:
    r"""SendUsersMessageResponse
    Provides information about which users and endpoints a message was sent to.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    result: Optional[dict[str, dict[str, shared_endpointmessageresult.EndpointMessageResult]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
