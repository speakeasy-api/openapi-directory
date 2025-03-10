"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import codespace as shared_codespace
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodespacesUpdateForAuthenticatedUserRequestBody:
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('display_name'), 'exclude': lambda f: f is None }})
    r"""Display name for this codespace"""  
    machine: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('machine'), 'exclude': lambda f: f is None }})
    r"""A valid machine to transition this codespace to."""  
    recent_folders: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recent_folders'), 'exclude': lambda f: f is None }})
    r"""Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in."""  
    

@dataclasses.dataclass
class CodespacesUpdateForAuthenticatedUserRequest:
    
    codespace_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'codespace_name', 'style': 'simple', 'explode': False }})
    r"""The name of the codespace."""  
    request_body: Optional[CodespacesUpdateForAuthenticatedUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class CodespacesUpdateForAuthenticatedUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Requires authentication"""  
    codespace: Optional[shared_codespace.Codespace] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    