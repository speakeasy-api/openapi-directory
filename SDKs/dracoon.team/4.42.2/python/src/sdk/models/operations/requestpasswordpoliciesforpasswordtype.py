"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from ..shared import passwordpoliciesconfig as shared_passwordpoliciesconfig
from enum import Enum
from typing import Optional

class RequestPasswordPoliciesForPasswordTypePasswordTypeEnum(str, Enum):
    r"""Password type"""
    LOGIN = 'login'
    ENCRYPTION = 'encryption'
    SHARES = 'shares'


@dataclasses.dataclass
class RequestPasswordPoliciesForPasswordTypeRequest:
    
    password_type: RequestPasswordPoliciesForPasswordTypePasswordTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'password_type', 'style': 'simple', 'explode': False }})
    r"""Password type"""  
    x_sds_auth_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    r"""Authentication token"""  
    

@dataclasses.dataclass
class RequestPasswordPoliciesForPasswordTypeResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Bad Request"""  
    password_policies_config: Optional[shared_passwordpoliciesconfig.PasswordPoliciesConfig] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    