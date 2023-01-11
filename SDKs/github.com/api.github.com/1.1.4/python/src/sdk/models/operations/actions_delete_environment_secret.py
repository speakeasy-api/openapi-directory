import dataclasses



@dataclasses.dataclass
class ActionsDeleteEnvironmentSecretPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteEnvironmentSecretRequest:
    path_params: ActionsDeleteEnvironmentSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteEnvironmentSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
