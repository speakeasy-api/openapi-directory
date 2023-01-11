import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointmessageresult as shared_endpointmessageresult
from ..shared import messageresult as shared_messageresult


@dataclass_json
@dataclasses.dataclass
class MessageResponse:
    r"""MessageResponse
    Provides information about the results of a request to send a message to an endpoint address.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    endpoint_result: Optional[dict[str, shared_endpointmessageresult.EndpointMessageResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointResult') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    result: Optional[dict[str, shared_messageresult.MessageResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
