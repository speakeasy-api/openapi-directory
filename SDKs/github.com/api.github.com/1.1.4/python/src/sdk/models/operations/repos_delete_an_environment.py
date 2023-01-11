import dataclasses



@dataclasses.dataclass
class ReposDeleteAnEnvironmentPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteAnEnvironmentRequest:
    path_params: ReposDeleteAnEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteAnEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
