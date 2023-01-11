import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization as shared_authorization
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsCheckTokenPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsCheckTokenRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclasses.dataclass
class AppsCheckTokenRequest:
    path_params: AppsCheckTokenPathParams = dataclasses.field()
    request: Optional[AppsCheckTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppsCheckTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
