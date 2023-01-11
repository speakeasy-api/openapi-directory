import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListAvailableContentBlocksQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_after', 'style': 'form', 'explode': True }})
    modified_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_before', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAvailableContentBlocksRequest:
    query_params: ListAvailableContentBlocksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAvailableContentBlocksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
