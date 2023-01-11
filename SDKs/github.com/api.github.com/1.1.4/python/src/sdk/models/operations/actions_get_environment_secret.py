import dataclasses
from typing import Optional
from ..shared import actions_secret as shared_actions_secret


@dataclasses.dataclass
class ActionsGetEnvironmentSecretPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetEnvironmentSecretRequest:
    path_params: ActionsGetEnvironmentSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetEnvironmentSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_secret: Optional[shared_actions_secret.ActionsSecret] = dataclasses.field(default=None)
    
