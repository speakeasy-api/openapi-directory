import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryCreateAPIVersionPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryCreateAPIVersionQueryParams:
    api_version_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_version_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryCreateAPIVersionRequest:
    path_params: RegistryCreateAPIVersionPathParams = dataclasses.field()
    query_params: RegistryCreateAPIVersionQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryCreateAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_version: Optional[Any] = dataclasses.field(default=None)
    
