import dataclasses
from typing import Optional
from ..shared import formentryresponse as shared_formentryresponse


@dataclasses.dataclass
class GetFormEntriesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormEntriesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFormEntriesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormEntriesRequest:
    headers: GetFormEntriesHeaders = dataclasses.field()
    path_params: GetFormEntriesPathParams = dataclasses.field()
    query_params: GetFormEntriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFormEntriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_entry_response: Optional[shared_formentryresponse.FormEntryResponse] = dataclasses.field(default=None)
    
