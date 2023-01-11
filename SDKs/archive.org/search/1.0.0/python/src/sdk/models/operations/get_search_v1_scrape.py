import dataclasses
from typing import Any,Optional
from ..shared import scraperesult as shared_scraperesult


@dataclasses.dataclass
class GetSearchV1ScrapeQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    field: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    total_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'total_only', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchV1ScrapeRequest:
    query_params: GetSearchV1ScrapeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchV1ScrapeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    scrape_result: Optional[shared_scraperesult.ScrapeResult] = dataclasses.field(default=None)
    
