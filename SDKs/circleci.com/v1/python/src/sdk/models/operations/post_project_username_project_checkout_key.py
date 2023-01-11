import dataclasses
from typing import Optional
from enum import Enum
from ..shared import key as shared_key


@dataclasses.dataclass
class PostProjectUsernameProjectCheckoutKeyPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class PostProjectUsernameProjectCheckoutKeyRequestBodyEnum(str, Enum):
    DEPLOY_KEY = "deploy-key"
    GITHUB_USER_KEY = "github-user-key"


@dataclasses.dataclass
class PostProjectUsernameProjectCheckoutKeyRequest:
    path_params: PostProjectUsernameProjectCheckoutKeyPathParams = dataclasses.field()
    request: Optional[PostProjectUsernameProjectCheckoutKeyRequestBodyEnum] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectCheckoutKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    key: Optional[shared_key.Key] = dataclasses.field(default=None)
    
