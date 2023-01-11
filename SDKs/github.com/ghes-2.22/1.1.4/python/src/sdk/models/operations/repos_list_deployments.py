import dataclasses
from typing import Optional
from ..shared import deployment as shared_deployment


@dataclasses.dataclass
class ReposListDeploymentsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListDeploymentsQueryParams:
    environment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'environment', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    sha: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sha', 'style': 'form', 'explode': True }})
    task: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListDeploymentsRequest:
    path_params: ReposListDeploymentsPathParams = dataclasses.field()
    query_params: ReposListDeploymentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListDeploymentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    deployments: Optional[list[shared_deployment.Deployment]] = dataclasses.field(default=None)
    
