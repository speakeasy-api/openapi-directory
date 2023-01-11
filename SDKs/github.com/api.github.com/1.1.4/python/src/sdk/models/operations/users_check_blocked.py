import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class UsersCheckBlockedPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersCheckBlockedRequest:
    path_params: UsersCheckBlockedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersCheckBlockedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
