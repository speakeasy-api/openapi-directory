"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import membership as shared_membership
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class TeamsCreateMembershipSecurity:
    
    jwt: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Appwrite-JWT' }})  
    key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Appwrite-Key' }})  
    project: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Appwrite-Project' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TeamsCreateMembershipRequestBody:
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email') }})
    r"""New team member email."""  
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('roles') }})
    r"""Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](/docs/permissions). Max length for each role is 32 chars."""  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})
    r"""URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""New team member name. Max length: 128 chars."""  
    

@dataclasses.dataclass
class TeamsCreateMembershipRequest:
    
    team_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    r"""Team unique ID."""  
    request_body: Optional[TeamsCreateMembershipRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class TeamsCreateMembershipResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    membership: Optional[shared_membership.Membership] = dataclasses.field(default=None)
    r"""Membership"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    