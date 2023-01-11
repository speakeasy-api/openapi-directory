import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import search_results as shared_search_results


@dataclasses.dataclass
class GetDomainsTldZoneIDSearchPathParams:
    zone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'zone_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDomainsTldZoneIDSearchQueryParams:
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
    

@dataclasses.dataclass
class GetDomainsTldZoneIDSearchRequest:
    path_params: GetDomainsTldZoneIDSearchPathParams = dataclasses.field()
    query_params: GetDomainsTldZoneIDSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsTldZoneIDSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_results: Optional[shared_search_results.SearchResults] = dataclasses.field(default=None)
    
