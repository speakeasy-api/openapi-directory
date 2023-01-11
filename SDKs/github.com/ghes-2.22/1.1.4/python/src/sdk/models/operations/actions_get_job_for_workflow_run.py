import dataclasses
from typing import Optional
from ..shared import job as shared_job


@dataclasses.dataclass
class ActionsGetJobForWorkflowRunPathParams:
    job_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'job_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetJobForWorkflowRunRequest:
    path_params: ActionsGetJobForWorkflowRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetJobForWorkflowRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    job: Optional[shared_job.Job] = dataclasses.field(default=None)
    
