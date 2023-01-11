import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetAPIPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetAPIRequest:
    path_params: RegistryGetAPIPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api: Optional[Any] = dataclasses.field(default=None)
    
