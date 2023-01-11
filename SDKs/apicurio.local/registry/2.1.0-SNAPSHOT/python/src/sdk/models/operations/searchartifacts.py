import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import sortby_enum as shared_sortby_enum
from ..shared import artifactsearchresults as shared_artifactsearchresults
from ..shared import error as shared_error


@dataclasses.dataclass
class SearchArtifactsQueryParams:
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    orderby: Optional[shared_sortby_enum.SortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderby', 'style': 'form', 'explode': True }})
    properties: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchArtifactsRequest:
    query_params: SearchArtifactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchArtifactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_search_results: Optional[shared_artifactsearchresults.ArtifactSearchResults] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
