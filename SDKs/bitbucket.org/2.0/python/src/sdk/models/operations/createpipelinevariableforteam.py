import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreatePipelineVariableForTeamPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePipelineVariableForTeamQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreatePipelineVariableForTeamRequest:
    path_params: CreatePipelineVariableForTeamPathParams = dataclasses.field()
    query_params: CreatePipelineVariableForTeamQueryParams = dataclasses.field()
    request: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePipelineVariableForTeamResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
