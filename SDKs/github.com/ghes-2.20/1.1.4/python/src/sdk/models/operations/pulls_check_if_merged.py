import dataclasses



@dataclasses.dataclass
class PullsCheckIfMergedPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsCheckIfMergedRequest:
    path_params: PullsCheckIfMergedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsCheckIfMergedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
