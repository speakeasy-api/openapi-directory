import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artifactsearchresults as shared_artifactsearchresults
from ..shared import error as shared_error

class SearchArtifactsOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchArtifactsOverEnum(str, Enum):
    EVERYTHING = "everything"
    NAME = "name"
    DESCRIPTION = "description"
    LABELS = "labels"


@dataclasses.dataclass
class SearchArtifactsQueryParams:
    limit: int = dataclasses.field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = dataclasses.field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[SearchArtifactsOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    over: Optional[SearchArtifactsOverEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'over', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchArtifactsRequest:
    query_params: SearchArtifactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchArtifactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_search_results: Optional[shared_artifactsearchresults.ArtifactSearchResults] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
