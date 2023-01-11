import dataclasses
from typing import Optional
from ..shared import getcollectionsresponse as shared_getcollectionsresponse


@dataclasses.dataclass
class CollectionsAllPathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CollectionsAllQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CollectionsAllRequest:
    path_params: CollectionsAllPathParams = dataclasses.field()
    query_params: CollectionsAllQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CollectionsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_collections_response: Optional[shared_getcollectionsresponse.GetCollectionsResponse] = dataclasses.field(default=None)
    
