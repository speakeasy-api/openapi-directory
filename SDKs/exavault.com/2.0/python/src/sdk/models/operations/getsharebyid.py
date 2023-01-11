import dataclasses
from typing import Optional
from ..shared import shareresponse as shared_shareresponse


@dataclasses.dataclass
class GetShareByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShareByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShareByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShareByIDRequest:
    headers: GetShareByIDHeaders = dataclasses.field()
    path_params: GetShareByIDPathParams = dataclasses.field()
    query_params: GetShareByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetShareByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    share_response: Optional[shared_shareresponse.ShareResponse] = dataclasses.field(default=None)
    
