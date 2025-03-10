"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class DeleteGroupRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DeleteGroup200ApplicationJSON:
    r"""response"""
    
    success: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('success') }})  
    

@dataclasses.dataclass
class DeleteGroupResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    delete_group_200_application_json_object: Optional[DeleteGroup200ApplicationJSON] = dataclasses.field(default=None)
    r"""response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    