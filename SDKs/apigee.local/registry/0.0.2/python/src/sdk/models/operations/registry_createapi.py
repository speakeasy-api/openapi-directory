import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryCreateAPIPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryCreateAPIQueryParams:
    api_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryCreateAPIRequest:
    path_params: RegistryCreateAPIPathParams = dataclasses.field()
    query_params: RegistryCreateAPIQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryCreateAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api: Optional[Any] = dataclasses.field(default=None)
    
