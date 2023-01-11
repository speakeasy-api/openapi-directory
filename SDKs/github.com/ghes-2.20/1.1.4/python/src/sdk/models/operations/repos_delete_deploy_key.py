import dataclasses



@dataclasses.dataclass
class ReposDeleteDeployKeyPathParams:
    key_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteDeployKeyRequest:
    path_params: ReposDeleteDeployKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteDeployKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
