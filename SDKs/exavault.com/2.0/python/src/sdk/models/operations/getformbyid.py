import dataclasses
from typing import Optional
from ..shared import formresponse as shared_formresponse


@dataclasses.dataclass
class GetFormByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFormByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormByIDRequest:
    headers: GetFormByIDHeaders = dataclasses.field()
    path_params: GetFormByIDPathParams = dataclasses.field()
    query_params: GetFormByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFormByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_response: Optional[shared_formresponse.FormResponse] = dataclasses.field(default=None)
    
