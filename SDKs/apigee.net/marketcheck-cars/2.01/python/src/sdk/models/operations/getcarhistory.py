import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import historicallisting as shared_historicallisting


@dataclasses.dataclass
class GetCarHistoryPathParams:
    vin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCarHistoryQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_duplicates: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_duplicates', 'style': 'form', 'explode': True }})
    page: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCarHistoryRequest:
    path_params: GetCarHistoryPathParams = dataclasses.field()
    query_params: GetCarHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCarHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    historical_listings: Optional[list[shared_historicallisting.HistoricalListing]] = dataclasses.field(default=None)
    
