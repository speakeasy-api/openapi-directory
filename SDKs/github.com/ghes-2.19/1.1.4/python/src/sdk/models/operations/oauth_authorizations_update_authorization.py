"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import authorization as shared_authorization
from ..shared import validation_error as shared_validation_error
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationRequestBody:
    
    add_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('add_scopes'), 'exclude': lambda f: f is None }})
    r"""A list of scopes to add to this authorization."""  
    fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fingerprint'), 'exclude': lambda f: f is None }})
    r"""A unique string to distinguish an authorization from others created for the same client ID and user."""  
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('note'), 'exclude': lambda f: f is None }})
    r"""A note to remind you what the OAuth token is for."""  
    note_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('note_url'), 'exclude': lambda f: f is None }})
    r"""A URL to remind you what app the OAuth token is for."""  
    remove_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('remove_scopes'), 'exclude': lambda f: f is None }})
    r"""A list of scopes to remove from this authorization."""  
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scopes'), 'exclude': lambda f: f is None }})
    r"""A list of scopes that this authorization is in."""  
    

@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationRequest:
    
    authorization_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    r"""authorization_id parameter"""  
    request_body: Optional[OauthAuthorizationsUpdateAuthorizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed"""  
    