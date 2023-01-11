import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifact as shared_artifact


@dataclasses.dataclass
class ActionsListWorkflowRunArtifactsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunArtifactsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListWorkflowRunArtifacts200ApplicationJSON:
    artifacts: list[shared_artifact.Artifact] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunArtifactsRequest:
    path_params: ActionsListWorkflowRunArtifactsPathParams = dataclasses.field()
    query_params: ActionsListWorkflowRunArtifactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListWorkflowRunArtifactsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_workflow_run_artifacts_200_application_json_object: Optional[ActionsListWorkflowRunArtifacts200ApplicationJSON] = dataclasses.field(default=None)
    
