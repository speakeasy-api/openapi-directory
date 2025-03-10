"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import installation as shared_installation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class OrgsListAppInstallationsRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OrgsListAppInstallations200ApplicationJSON:
    r"""Response"""
    
    installations: list[shared_installation.Installation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('installations') }})  
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_count') }})  
    

@dataclasses.dataclass
class OrgsListAppInstallationsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    orgs_list_app_installations_200_application_json_object: Optional[OrgsListAppInstallations200ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    