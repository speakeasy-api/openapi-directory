import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import search_results as shared_search_results


@dataclasses.dataclass
class GetDomainsUpdatesDeletedQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDomainsUpdatesDeletedRequest:
    query_params: GetDomainsUpdatesDeletedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsUpdatesDeletedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_results: Optional[shared_search_results.SearchResults] = dataclasses.field(default=None)
    
