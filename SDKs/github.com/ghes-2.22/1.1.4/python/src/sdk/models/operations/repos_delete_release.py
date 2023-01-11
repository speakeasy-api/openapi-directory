import dataclasses



@dataclasses.dataclass
class ReposDeleteReleasePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteReleaseRequest:
    path_params: ReposDeleteReleasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteReleaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
