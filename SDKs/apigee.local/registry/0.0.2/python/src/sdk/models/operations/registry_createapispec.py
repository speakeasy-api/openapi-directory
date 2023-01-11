import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryCreateAPISpecPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryCreateAPISpecQueryParams:
    api_spec_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_spec_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryCreateAPISpecRequest:
    path_params: RegistryCreateAPISpecPathParams = dataclasses.field()
    query_params: RegistryCreateAPISpecQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryCreateAPISpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_spec: Optional[Any] = dataclasses.field(default=None)
    
