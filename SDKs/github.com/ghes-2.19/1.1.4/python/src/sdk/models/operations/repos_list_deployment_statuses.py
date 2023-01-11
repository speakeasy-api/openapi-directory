import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import deployment_status as shared_deployment_status


@dataclasses.dataclass
class ReposListDeploymentStatusesPathParams:
    deployment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListDeploymentStatusesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListDeploymentStatusesRequest:
    path_params: ReposListDeploymentStatusesPathParams = dataclasses.field()
    query_params: ReposListDeploymentStatusesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListDeploymentStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    deployment_statuses: Optional[list[shared_deployment_status.DeploymentStatus]] = dataclasses.field(default=None)
    
