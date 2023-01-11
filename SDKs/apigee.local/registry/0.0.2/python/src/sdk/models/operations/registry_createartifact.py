import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryCreateArtifactPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryCreateArtifactQueryParams:
    artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artifact_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryCreateArtifactRequest:
    path_params: RegistryCreateArtifactPathParams = dataclasses.field()
    query_params: RegistryCreateArtifactQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryCreateArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact: Optional[Any] = dataclasses.field(default=None)
    
