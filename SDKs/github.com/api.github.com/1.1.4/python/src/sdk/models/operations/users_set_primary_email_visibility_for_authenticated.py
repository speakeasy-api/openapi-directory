import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import email as shared_email
from ..shared import validation_error as shared_validation_error

class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest:
    request: Optional[UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    emails: Optional[list[shared_email.Email]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
