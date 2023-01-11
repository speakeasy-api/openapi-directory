import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryListAPIVersionsPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryListAPIVersionsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryListAPIVersionsRequest:
    path_params: RegistryListAPIVersionsPathParams = dataclasses.field()
    query_params: RegistryListAPIVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryListAPIVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_api_versions_response: Optional[Any] = dataclasses.field(default=None)
    
