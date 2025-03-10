"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheckSecurity:
    
    api_token: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-Token' }})  
    

@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheckRequest:
    
    app_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appVersion', 'style': 'form', 'explode': True }})  
    client_unique_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientUniqueId', 'style': 'form', 'explode': True }})  
    deployment_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deploymentKey', 'style': 'form', 'explode': True }})  
    is_companion: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isCompanion', 'style': 'form', 'explode': True }})  
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})  
    package_hash: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'packageHash', 'style': 'form', 'explode': True }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheckDefaultApplicationJSON:
    r"""Error"""
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo:
    
    is_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isAvailable') }})  
    app_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('appVersion'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})  
    download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('downloadURL'), 'exclude': lambda f: f is None }})  
    is_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isDisabled'), 'exclude': lambda f: f is None }})  
    is_mandatory: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isMandatory'), 'exclude': lambda f: f is None }})  
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('label'), 'exclude': lambda f: f is None }})  
    package_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('packageHash'), 'exclude': lambda f: f is None }})  
    package_size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('packageSize'), 'exclude': lambda f: f is None }})  
    rollout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rollout'), 'exclude': lambda f: f is None }})  
    should_run_binary_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shouldRunBinaryVersion'), 'exclude': lambda f: f is None }})  
    update_app_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateAppVersion'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheck200ApplicationJSON:
    r"""Success"""
    
    update_info: LegacyCodePushAcquisitionUpdateCheck200ApplicationJSONUpdateInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updateInfo') }})  
    

@dataclasses.dataclass
class LegacyCodePushAcquisitionUpdateCheckResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    legacy_code_push_acquisition_update_check_200_application_json_object: Optional[LegacyCodePushAcquisitionUpdateCheck200ApplicationJSON] = dataclasses.field(default=None)
    r"""Success"""  
    legacy_code_push_acquisition_update_check_default_application_json_object: Optional[LegacyCodePushAcquisitionUpdateCheckDefaultApplicationJSON] = dataclasses.field(default=None)
    r"""Error"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    