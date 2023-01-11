import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import run_id_enum as shared_run_id_enum
from ..shared import job as shared_job


@dataclasses.dataclass
class ActionsListJobsForWorkflowRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListJobsForWorkflowRunQueryParams:
    filter: Optional[shared_run_id_enum.RunIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListJobsForWorkflowRun200ApplicationJSON:
    jobs: list[shared_job.Job] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListJobsForWorkflowRunRequest:
    path_params: ActionsListJobsForWorkflowRunPathParams = dataclasses.field()
    query_params: ActionsListJobsForWorkflowRunQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListJobsForWorkflowRunResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_jobs_for_workflow_run_200_application_json_object: Optional[ActionsListJobsForWorkflowRun200ApplicationJSON] = dataclasses.field(default=None)
    
