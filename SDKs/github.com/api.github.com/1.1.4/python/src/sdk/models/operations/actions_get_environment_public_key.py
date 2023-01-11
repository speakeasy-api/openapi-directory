import dataclasses
from typing import Optional
from ..shared import actions_public_key as shared_actions_public_key


@dataclasses.dataclass
class ActionsGetEnvironmentPublicKeyPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetEnvironmentPublicKeyRequest:
    path_params: ActionsGetEnvironmentPublicKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetEnvironmentPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_public_key: Optional[shared_actions_public_key.ActionsPublicKey] = dataclasses.field(default=None)
    
