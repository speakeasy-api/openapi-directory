"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class RefreshGravatarRequest:
    
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RefreshGravatar200ApplicationJSON:
    r"""response"""
    
    gravatar_avatar_template: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gravatar_avatar_template') }})  
    gravatar_upload_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gravatar_upload_id') }})  
    

@dataclasses.dataclass
class RefreshGravatarResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    refresh_gravatar_200_application_json_object: Optional[RefreshGravatar200ApplicationJSON] = dataclasses.field(default=None)
    r"""response"""  
    