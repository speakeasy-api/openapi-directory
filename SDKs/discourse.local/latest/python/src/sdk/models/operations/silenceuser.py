"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SilenceUserRequestBody:
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})
    r"""Will send an email with this message when present"""  
    post_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('post_action'), 'exclude': lambda f: f is None }})  
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reason'), 'exclude': lambda f: f is None }})  
    silenced_till: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silenced_till'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class SilenceUserRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})  
    request_body: Optional[SilenceUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SilenceUser200ApplicationJSONSilenceSilencedBy:
    
    avatar_template: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avatar_template') }})  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('username') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SilenceUser200ApplicationJSONSilence:
    
    silence_reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silence_reason') }})  
    silenced: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silenced') }})  
    silenced_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silenced_at') }})  
    silenced_by: SilenceUser200ApplicationJSONSilenceSilencedBy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silenced_by') }})  
    silenced_till: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silenced_till') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SilenceUser200ApplicationJSON:
    r"""response"""
    
    silence: SilenceUser200ApplicationJSONSilence = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('silence') }})  
    

@dataclasses.dataclass
class SilenceUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    silence_user_200_application_json_object: Optional[SilenceUser200ApplicationJSON] = dataclasses.field(default=None)
    r"""response"""  
    