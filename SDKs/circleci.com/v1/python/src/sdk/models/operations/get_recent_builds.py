import dataclasses
from typing import Optional
from ..shared import build as shared_build


@dataclasses.dataclass
class GetRecentBuildsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRecentBuildsRequest:
    query_params: GetRecentBuildsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecentBuildsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    builds: Optional[list[shared_build.Build]] = dataclasses.field(default=None)
    
