import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artifacttype_enum as shared_artifacttype_enum
from ..shared import artifactsearchresults as shared_artifactsearchresults
from ..shared import error as shared_error

class SearchArtifactsByContentOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchArtifactsByContentOrderbyEnum(str, Enum):
    NAME = "name"
    CREATED_ON = "createdOn"


@dataclasses.dataclass
class SearchArtifactsByContentQueryParams:
    artifact_type: Optional[shared_artifacttype_enum.ArtifactTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artifactType', 'style': 'form', 'explode': True }})
    canonical: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'canonical', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[SearchArtifactsByContentOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    orderby: Optional[SearchArtifactsByContentOrderbyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderby', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchArtifactsByContentRequest:
    query_params: SearchArtifactsByContentQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class SearchArtifactsByContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_search_results: Optional[shared_artifactsearchresults.ArtifactSearchResults] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
