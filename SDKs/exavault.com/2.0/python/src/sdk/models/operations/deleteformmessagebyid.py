import dataclasses
from typing import Optional
from ..shared import emptyresponse as shared_emptyresponse


@dataclasses.dataclass
class DeleteFormMessageByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFormMessageByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFormMessageByIDRequest:
    headers: DeleteFormMessageByIDHeaders = dataclasses.field()
    path_params: DeleteFormMessageByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFormMessageByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response: Optional[shared_emptyresponse.EmptyResponse] = dataclasses.field(default=None)
    
