import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsDeleteTokenPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsDeleteTokenRequestBody:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    

@dataclasses.dataclass
class AppsDeleteTokenRequest:
    path_params: AppsDeleteTokenPathParams = dataclasses.field()
    request: Optional[AppsDeleteTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppsDeleteTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
