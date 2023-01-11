import dataclasses
from typing import Optional
from ..shared import remoteserverentity as shared_remoteserverentity


@dataclasses.dataclass
class GetRemoteServersQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoteServersRequest:
    query_params: GetRemoteServersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoteServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    remote_server_entities: Optional[list[shared_remoteserverentity.RemoteServerEntity]] = dataclasses.field(default=None)
    
