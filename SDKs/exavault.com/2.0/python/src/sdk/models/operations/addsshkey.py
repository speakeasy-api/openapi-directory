import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sshkeyresponse as shared_sshkeyresponse


@dataclasses.dataclass
class AddSSHKeyHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddSSHKeyAddSSHKeyRequestBody:
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    user_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclasses.dataclass
class AddSSHKeyRequest:
    headers: AddSSHKeyHeaders = dataclasses.field()
    request: Optional[AddSSHKeyAddSSHKeyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddSSHKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssh_key_response: Optional[shared_sshkeyresponse.SSHKeyResponse] = dataclasses.field(default=None)
    
