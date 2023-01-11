import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import gpg_key as shared_gpg_key


@dataclasses.dataclass
class UsersGetGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetGpgKeyForAuthenticatedRequest:
    path_params: UsersGetGpgKeyForAuthenticatedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetGpgKeyForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gpg_key: Optional[shared_gpg_key.GpgKey] = dataclasses.field(default=None)
    
