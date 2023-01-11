import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetAPISpecPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetAPISpecRequest:
    path_params: RegistryGetAPISpecPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetAPISpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_spec: Optional[Any] = dataclasses.field(default=None)
    
