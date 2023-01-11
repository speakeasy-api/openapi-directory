import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetProjectPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetProjectRequest:
    path_params: RegistryGetProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project: Optional[Any] = dataclasses.field(default=None)
    
