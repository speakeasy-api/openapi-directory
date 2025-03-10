"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import publickeyentity as shared_publickeyentity
from typing import Optional


@dataclasses.dataclass
class PostPublicKeysRequestBody:
    
    public_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    r"""Actual contents of SSH key."""  
    title: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'title' }})
    r"""Internal reference for key."""  
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    r"""User ID.  Provide a value of `0` to operate the current session's user."""  
    

@dataclasses.dataclass
class PostPublicKeysResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    public_key_entity: Optional[shared_publickeyentity.PublicKeyEntity] = dataclasses.field(default=None)
    r"""The PublicKeys object."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    