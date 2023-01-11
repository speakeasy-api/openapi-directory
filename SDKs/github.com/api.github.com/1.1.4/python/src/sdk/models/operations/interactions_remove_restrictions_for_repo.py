import dataclasses



@dataclasses.dataclass
class InteractionsRemoveRestrictionsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InteractionsRemoveRestrictionsForRepoRequest:
    path_params: InteractionsRemoveRestrictionsForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InteractionsRemoveRestrictionsForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
