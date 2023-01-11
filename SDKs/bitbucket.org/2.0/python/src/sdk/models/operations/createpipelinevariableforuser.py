import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreatePipelineVariableForUserPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePipelineVariableForUserRequest:
    path_params: CreatePipelineVariableForUserPathParams = dataclasses.field()
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePipelineVariableForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
