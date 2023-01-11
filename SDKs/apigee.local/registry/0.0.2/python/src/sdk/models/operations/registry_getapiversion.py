import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetAPIVersionPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetAPIVersionRequest:
    path_params: RegistryGetAPIVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_version: Optional[Any] = dataclasses.field(default=None)
    
