import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow as shared_workflow


@dataclasses.dataclass
class ActionsListRepoWorkflowsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListRepoWorkflowsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListRepoWorkflows200ApplicationJSON:
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflows: list[shared_workflow.Workflow] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    

@dataclasses.dataclass
class ActionsListRepoWorkflowsRequest:
    path_params: ActionsListRepoWorkflowsPathParams = dataclasses.field()
    query_params: ActionsListRepoWorkflowsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListRepoWorkflowsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_repo_workflows_200_application_json_object: Optional[ActionsListRepoWorkflows200ApplicationJSON] = dataclasses.field(default=None)
    
