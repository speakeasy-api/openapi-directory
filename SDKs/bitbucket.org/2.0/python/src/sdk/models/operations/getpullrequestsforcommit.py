import dataclasses
from typing import Any,Optional
from ..shared import paginated_pullrequests as shared_paginated_pullrequests


@dataclasses.dataclass
class GetPullrequestsForCommitPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPullrequestsForCommitQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPullrequestsForCommitRequest:
    path_params: GetPullrequestsForCommitPathParams = dataclasses.field()
    query_params: GetPullrequestsForCommitQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPullrequestsForCommitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pullrequests: Optional[shared_paginated_pullrequests.PaginatedPullrequests] = dataclasses.field(default=None)
    
