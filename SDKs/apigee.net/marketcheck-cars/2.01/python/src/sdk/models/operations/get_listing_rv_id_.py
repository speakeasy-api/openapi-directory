import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import rvlisting as shared_rvlisting


@dataclasses.dataclass
class GetListingRvIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingRvIDQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingRvIDRequest:
    path_params: GetListingRvIDPathParams = dataclasses.field()
    query_params: GetListingRvIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListingRvIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rv_listing: Optional[shared_rvlisting.RvListing] = dataclasses.field(default=None)
    
