"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import districtadminresponse as shared_districtadminresponse
from ..shared import notfound as shared_notfound
from typing import Optional


@dataclasses.dataclass
class GetDistrictAdminRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetDistrictAdminResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    district_admin_response: Optional[shared_districtadminresponse.DistrictAdminResponse] = dataclasses.field(default=None)
    r"""OK Response"""  
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    r"""Entity Not Found"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    