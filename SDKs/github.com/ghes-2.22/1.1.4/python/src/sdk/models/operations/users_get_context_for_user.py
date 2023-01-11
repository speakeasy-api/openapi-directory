import dataclasses
from typing import Optional
from enum import Enum
from ..shared import username_enum as shared_username_enum
from ..shared import basic_error as shared_basic_error
from ..shared import hovercard as shared_hovercard
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class UsersGetContextForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersGetContextForUserQueryParams:
    subject_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_id', 'style': 'form', 'explode': True }})
    subject_type: Optional[shared_username_enum.UsernameEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersGetContextForUserRequest:
    path_params: UsersGetContextForUserPathParams = dataclasses.field()
    query_params: UsersGetContextForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersGetContextForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    hovercard: Optional[shared_hovercard.Hovercard] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
