import dataclasses
from typing import Optional
from ..shared import simple_user as shared_simple_user
from ..shared import stargazer as shared_stargazer
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ActivityListStargazersForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListStargazersForRepoQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListStargazersForRepoRequest:
    path_params: ActivityListStargazersForRepoPathParams = dataclasses.field()
    query_params: ActivityListStargazersForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListStargazersForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    stargazers: Optional[list[shared_stargazer.Stargazer]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
