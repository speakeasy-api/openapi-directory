"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import email as shared_email
from ..shared import validation_error as shared_validation_error
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBodyVisibilityEnum(str, Enum):
    r"""Denotes whether an email is publicly visible."""
    PUBLIC = 'public'
    PRIVATE = 'private'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody:
    
    visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBodyVisibilityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('visibility') }})
    r"""Denotes whether an email is publicly visible."""  
    

@dataclasses.dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Requires authentication"""  
    emails: Optional[list[shared_email.Email]] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed, or the endpoint has been spammed."""  
    