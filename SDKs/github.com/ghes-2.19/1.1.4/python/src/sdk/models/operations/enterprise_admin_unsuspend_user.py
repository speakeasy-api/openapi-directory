"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserRequestBody:
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reason'), 'exclude': lambda f: f is None }})
    r"""The reason the user is being unsuspended. This message will be logged in the [audit log](https://help.github.com/enterprise/admin/articles/audit-logging/). If you don't provide a `reason`, it will default to \\"Unsuspended via API by _SITE\_ADMINISTRATOR_\\", where _SITE\_ADMINISTRATOR_ is the person who performed the action."""  
    

@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserRequest:
    
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})  
    request_body: Optional[EnterpriseAdminUnsuspendUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    