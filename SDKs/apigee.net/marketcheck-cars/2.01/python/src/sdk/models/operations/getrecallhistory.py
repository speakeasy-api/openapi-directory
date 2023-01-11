import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import searchresponse as shared_searchresponse


@dataclasses.dataclass
class GetRecallHistoryPathParams:
    vin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRecallHistoryQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecallHistoryRequest:
    path_params: GetRecallHistoryPathParams = dataclasses.field()
    query_params: GetRecallHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecallHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    search_response: Optional[shared_searchresponse.SearchResponse] = dataclasses.field(default=None)
    
