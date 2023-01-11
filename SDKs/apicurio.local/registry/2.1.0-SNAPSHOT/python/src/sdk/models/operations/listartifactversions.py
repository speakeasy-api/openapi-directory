import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import versionsearchresults as shared_versionsearchresults


@dataclasses.dataclass
class ListArtifactVersionsPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListArtifactVersionsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListArtifactVersionsRequest:
    path_params: ListArtifactVersionsPathParams = dataclasses.field()
    query_params: ListArtifactVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListArtifactVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    version_search_results: Optional[shared_versionsearchresults.VersionSearchResults] = dataclasses.field(default=None)
    
