import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class UsersDeleteGpgKeyForAuthenticatedPathParams:
    gpg_key_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'gpg_key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersDeleteGpgKeyForAuthenticatedRequest:
    path_params: UsersDeleteGpgKeyForAuthenticatedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersDeleteGpgKeyForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
