import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryGetArtifactPathParams:
    artifact: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetArtifactRequest:
    path_params: RegistryGetArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact: Optional[Any] = dataclasses.field(default=None)
    
