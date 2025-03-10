"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOSTRequest:
    
    group_mapper: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupMapper', 'style': 'form', 'explode': True }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOST500ApplicationJSON:
    r"""internal api error (code 2)"""
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOST401ApplicationJSON:
    r"""no or wrong API key (code 4)"""
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOST400ApplicationJSON:
    r"""generic api error (code 1)"""
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOST200ApplicationJSONData:
    
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('groupID'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOST200ApplicationJSON:
    r"""ok (code 0)"""
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    data: Optional[CreateGroupIfNotExistsForUsingPOST200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPOSTResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    create_group_if_not_exists_for_using_post_200_application_json_object: Optional[CreateGroupIfNotExistsForUsingPOST200ApplicationJSON] = dataclasses.field(default=None)
    r"""ok (code 0)"""  
    create_group_if_not_exists_for_using_post_400_application_json_object: Optional[CreateGroupIfNotExistsForUsingPOST400ApplicationJSON] = dataclasses.field(default=None)
    r"""generic api error (code 1)"""  
    create_group_if_not_exists_for_using_post_401_application_json_object: Optional[CreateGroupIfNotExistsForUsingPOST401ApplicationJSON] = dataclasses.field(default=None)
    r"""no or wrong API key (code 4)"""  
    create_group_if_not_exists_for_using_post_500_application_json_object: Optional[CreateGroupIfNotExistsForUsingPOST500ApplicationJSON] = dataclasses.field(default=None)
    r"""internal api error (code 2)"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    