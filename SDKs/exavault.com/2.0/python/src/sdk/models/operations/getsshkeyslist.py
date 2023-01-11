import dataclasses
from typing import Optional
from ..shared import sshkeycollectionresponse as shared_sshkeycollectionresponse


@dataclasses.dataclass
class GetSSHKeysListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSSHKeysListHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSSHKeysListRequest:
    headers: GetSSHKeysListHeaders = dataclasses.field()
    query_params: GetSSHKeysListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSSHKeysListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ssh_key_collection_response: Optional[shared_sshkeycollectionresponse.SSHKeyCollectionResponse] = dataclasses.field(default=None)
    
