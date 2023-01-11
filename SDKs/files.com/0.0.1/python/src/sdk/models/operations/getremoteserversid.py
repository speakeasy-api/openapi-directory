import dataclasses
from typing import Optional
from ..shared import remoteserverentity as shared_remoteserverentity


@dataclasses.dataclass
class GetRemoteServersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRemoteServersIDRequest:
    path_params: GetRemoteServersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoteServersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    remote_server_entity: Optional[shared_remoteserverentity.RemoteServerEntity] = dataclasses.field(default=None)
    
