import dataclasses
from typing import Optional
from ..shared import getlistingsresponse as shared_getlistingsresponse


@dataclasses.dataclass
class ProductListingsAllPathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductListingsAllQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProductListingsAllRequest:
    path_params: ProductListingsAllPathParams = dataclasses.field()
    query_params: ProductListingsAllQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProductListingsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_listings_response: Optional[shared_getlistingsresponse.GetListingsResponse] = dataclasses.field(default=None)
    
