import dataclasses
from typing import Optional
from ..shared import dealer as shared_dealer
from ..shared import error as shared_error


@dataclasses.dataclass
class GetDealerMotorcycleIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDealerMotorcycleIDQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    provider: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealerMotorcycleIDRequest:
    path_params: GetDealerMotorcycleIDPathParams = dataclasses.field()
    query_params: GetDealerMotorcycleIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDealerMotorcycleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dealer: Optional[shared_dealer.Dealer] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
