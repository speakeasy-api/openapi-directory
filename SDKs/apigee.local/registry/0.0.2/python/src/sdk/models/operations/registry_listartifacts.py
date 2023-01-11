import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryListArtifactsPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryListArtifactsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryListArtifactsRequest:
    path_params: RegistryListArtifactsPathParams = dataclasses.field()
    query_params: RegistryListArtifactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryListArtifactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_artifacts_response: Optional[Any] = dataclasses.field(default=None)
    
