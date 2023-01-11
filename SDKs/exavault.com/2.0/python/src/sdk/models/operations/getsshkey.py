import dataclasses
from typing import Optional
from ..shared import sshkeyresponse as shared_sshkeyresponse


@dataclasses.dataclass
class GetSSHKeyPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSSHKeyHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSSHKeyRequest:
    headers: GetSSHKeyHeaders = dataclasses.field()
    path_params: GetSSHKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSSHKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssh_key_response: Optional[shared_sshkeyresponse.SSHKeyResponse] = dataclasses.field(default=None)
    
