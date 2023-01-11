import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remoteaccesssession as shared_remoteaccesssession


@dataclass_json
@dataclasses.dataclass
class ListRemoteAccessSessionsResult:
    r"""ListRemoteAccessSessionsResult
    Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    remote_access_sessions: Optional[list[shared_remoteaccesssession.RemoteAccessSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSessions') }})
    
