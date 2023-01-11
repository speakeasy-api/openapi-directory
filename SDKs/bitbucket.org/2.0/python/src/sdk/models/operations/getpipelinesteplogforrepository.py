import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPipelineStepLogForRepositoryPathParams:
    pipeline_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    step_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineStepLogForRepositoryRequest:
    path_params: GetPipelineStepLogForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineStepLogForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
