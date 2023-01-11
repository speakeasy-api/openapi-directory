import dataclasses
from typing import Optional
from ..shared import actions_public_key as shared_actions_public_key


@dataclasses.dataclass
class ActionsGetRepoPublicKeyPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetRepoPublicKeyRequest:
    path_params: ActionsGetRepoPublicKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetRepoPublicKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_public_key: Optional[shared_actions_public_key.ActionsPublicKey] = dataclasses.field(default=None)
    
