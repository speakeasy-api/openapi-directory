import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import motorcyclelisting as shared_motorcyclelisting


@dataclasses.dataclass
class GetListingMotorcycleIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingMotorcycleIDQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingMotorcycleIDRequest:
    path_params: GetListingMotorcycleIDPathParams = dataclasses.field()
    query_params: GetListingMotorcycleIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingMotorcycleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    motorcycle_listing: Optional[shared_motorcyclelisting.MotorcycleListing] = dataclasses.field(default=None)
    
