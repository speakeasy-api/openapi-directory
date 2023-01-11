import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class ReposGetAllStatusCheckContextsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetAllStatusCheckContextsRequest:
    path_params: ReposGetAllStatusCheckContextsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetAllStatusCheckContextsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repos_get_all_status_check_contexts_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
