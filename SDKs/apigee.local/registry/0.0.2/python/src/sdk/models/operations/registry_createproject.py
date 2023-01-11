import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryCreateProjectQueryParams:
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryCreateProjectRequest:
    query_params: RegistryCreateProjectQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryCreateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project: Optional[Any] = dataclasses.field(default=None)
    
