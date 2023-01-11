import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryReplaceArtifactPathParams:
    artifact: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryReplaceArtifactRequest:
    path_params: RegistryReplaceArtifactPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryReplaceArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact: Optional[Any] = dataclasses.field(default=None)
    
