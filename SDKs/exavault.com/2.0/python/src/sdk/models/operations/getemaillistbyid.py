import dataclasses
from typing import Optional
from ..shared import emaillistresponse as shared_emaillistresponse


@dataclasses.dataclass
class GetEmailListByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmailListByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmailListByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmailListByIDRequest:
    headers: GetEmailListByIDHeaders = dataclasses.field()
    path_params: GetEmailListByIDPathParams = dataclasses.field()
    query_params: GetEmailListByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmailListByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_list_response: Optional[shared_emaillistresponse.EmailListResponse] = dataclasses.field(default=None)
    
