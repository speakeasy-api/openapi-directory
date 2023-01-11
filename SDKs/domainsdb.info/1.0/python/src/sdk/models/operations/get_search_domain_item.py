import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import search_results as shared_search_results


@dataclasses.dataclass
class GetSearchDomainItemQueryParams:
    a: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'A', 'style': 'form', 'explode': True }})
    cname: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CNAME', 'style': 'form', 'explode': True }})
    mx: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MX', 'style': 'form', 'explode': True }})
    ns: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NS', 'style': 'form', 'explode': True }})
    txt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TXT', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    is_dead: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isDead', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchDomainItemRequest:
    query_params: GetSearchDomainItemQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchDomainItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_results: Optional[shared_search_results.SearchResults] = dataclasses.field(default=None)
    
