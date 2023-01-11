import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import charitysearchresponse as shared_charitysearchresponse


@dataclasses.dataclass
class GetCharityOrgsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    registration_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'registration_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCharityOrgsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCharityOrgsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCharityOrgsRequest:
    headers: GetCharityOrgsHeaders = dataclasses.field()
    query_params: GetCharityOrgsQueryParams = dataclasses.field()
    security: GetCharityOrgsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCharityOrgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    charity_search_response: Optional[shared_charitysearchresponse.CharitySearchResponse] = dataclasses.field(default=None)
    
