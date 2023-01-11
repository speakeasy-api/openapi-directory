import dataclasses



@dataclasses.dataclass
class ActionsDeleteRepoSecretPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteRepoSecretRequest:
    path_params: ActionsDeleteRepoSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteRepoSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
