import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import versionsearchresults as shared_versionsearchresults


@dataclasses.dataclass
class SearchVersionsPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchVersionsQueryParams:
    limit: int = dataclasses.field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = dataclasses.field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchVersionsRequest:
    path_params: SearchVersionsPathParams = dataclasses.field()
    query_params: SearchVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    version_search_results: Optional[shared_versionsearchresults.VersionSearchResults] = dataclasses.field(default=None)
    
