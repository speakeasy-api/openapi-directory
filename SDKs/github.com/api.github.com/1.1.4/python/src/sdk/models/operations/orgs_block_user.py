import dataclasses
from typing import Optional
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OrgsBlockUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsBlockUserRequest:
    path_params: OrgsBlockUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsBlockUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
