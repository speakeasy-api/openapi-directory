import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow_run_status_enum as shared_workflow_run_status_enum
from ..shared import workflow_run as shared_workflow_run


@dataclasses.dataclass
class ActionsListWorkflowRunsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunsQueryParams:
    actor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared_workflow_run_status_enum.WorkflowRunStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListWorkflowRuns200ApplicationJSON:
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflow_runs: list[shared_workflow_run.WorkflowRun] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_runs') }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunsRequest:
    path_params: ActionsListWorkflowRunsPathParams = dataclasses.field()
    query_params: ActionsListWorkflowRunsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListWorkflowRunsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_workflow_runs_200_application_json_object: Optional[ActionsListWorkflowRuns200ApplicationJSON] = dataclasses.field(default=None)
    
