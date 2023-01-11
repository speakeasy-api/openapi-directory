import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectioncredentials as shared_connectioncredentials
from ..shared import websocket as shared_websocket


@dataclass_json
@dataclasses.dataclass
class CreateParticipantConnectionResponse:
    connection_credentials: Optional[shared_connectioncredentials.ConnectionCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionCredentials') }})
    websocket: Optional[shared_websocket.Websocket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Websocket') }})
    
