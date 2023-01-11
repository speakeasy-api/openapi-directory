import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import sortby_enum as shared_sortby_enum
from ..shared import artifactsearchresults as shared_artifactsearchresults
from ..shared import error as shared_error


@dataclasses.dataclass
class ListArtifactsInGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListArtifactsInGroupQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    orderby: Optional[shared_sortby_enum.SortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderby', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListArtifactsInGroupRequest:
    path_params: ListArtifactsInGroupPathParams = dataclasses.field()
    query_params: ListArtifactsInGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListArtifactsInGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_search_results: Optional[shared_artifactsearchresults.ArtifactSearchResults] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
