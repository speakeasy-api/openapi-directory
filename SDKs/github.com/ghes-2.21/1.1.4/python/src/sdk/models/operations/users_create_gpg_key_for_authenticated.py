import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import gpg_key as shared_gpg_key
from ..shared import validation_error as shared_validation_error


@dataclass_json
@dataclasses.dataclass
class UsersCreateGpgKeyForAuthenticatedRequestBody:
    armored_public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('armored_public_key') }})
    

@dataclasses.dataclass
class UsersCreateGpgKeyForAuthenticatedRequest:
    request: Optional[UsersCreateGpgKeyForAuthenticatedRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsersCreateGpgKeyForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gpg_key: Optional[shared_gpg_key.GpgKey] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
