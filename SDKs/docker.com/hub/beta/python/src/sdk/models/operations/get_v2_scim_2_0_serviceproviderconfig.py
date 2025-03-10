"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import scim_service_provider_config as shared_scim_service_provider_config
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetV2Scim20ServiceProviderConfig500ApplicationScimPlusJSON:
    r"""Internal Error"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})
    r"""Details about why the request failed."""  
    schemas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schemas'), 'exclude': lambda f: f is None }})  
    status: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetV2Scim20ServiceProviderConfig401ApplicationScimPlusJSON:
    r"""Unauthorized"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})
    r"""Details about why the request failed."""  
    schemas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schemas'), 'exclude': lambda f: f is None }})  
    status: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetV2Scim20ServiceProviderConfigResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_v2_scim_2_0_service_provider_config_401_application_scim_plus_json_object: Optional[GetV2Scim20ServiceProviderConfig401ApplicationScimPlusJSON] = dataclasses.field(default=None)
    r"""Unauthorized"""  
    get_v2_scim_2_0_service_provider_config_500_application_scim_plus_json_object: Optional[GetV2Scim20ServiceProviderConfig500ApplicationScimPlusJSON] = dataclasses.field(default=None)
    r"""Internal Error"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    scim_service_provider_config: Optional[shared_scim_service_provider_config.ScimServiceProviderConfig] = dataclasses.field(default=None)  
    