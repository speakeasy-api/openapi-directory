import dataclasses
from typing import Optional
from ..shared import commit_activity as shared_commit_activity


@dataclasses.dataclass
class ReposGetCommitActivityStatsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetCommitActivityStatsRequest:
    path_params: ReposGetCommitActivityStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetCommitActivityStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commit_activities: Optional[list[shared_commit_activity.CommitActivity]] = dataclasses.field(default=None)
    
