import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import key as shared_key


@dataclasses.dataclass
class UsersGetPublicSSHKeyForAuthenticatedPathParams:
    key_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetPublicSSHKeyForAuthenticatedRequest:
    path_params: UsersGetPublicSSHKeyForAuthenticatedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetPublicSSHKeyForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    key: Optional[shared_key.Key] = dataclasses.field(default=None)
    
