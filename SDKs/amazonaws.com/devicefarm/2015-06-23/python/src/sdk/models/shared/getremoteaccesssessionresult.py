import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remoteaccesssession as shared_remoteaccesssession


@dataclass_json
@dataclasses.dataclass
class GetRemoteAccessSessionResult:
    r"""GetRemoteAccessSessionResult
    Represents the response from the server that lists detailed information about the remote access session.
    """
    
    remote_access_session: Optional[shared_remoteaccesssession.RemoteAccessSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSession') }})
    
