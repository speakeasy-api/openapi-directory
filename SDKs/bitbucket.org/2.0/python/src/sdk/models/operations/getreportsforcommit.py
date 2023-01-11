import dataclasses
from typing import Optional
from ..shared import paginated_reports as shared_paginated_reports


@dataclasses.dataclass
class GetReportsForCommitPathParams:
    commit: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportsForCommitRequest:
    path_params: GetReportsForCommitPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsForCommitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_reports: Optional[shared_paginated_reports.PaginatedReports] = dataclasses.field(default=None)
    
