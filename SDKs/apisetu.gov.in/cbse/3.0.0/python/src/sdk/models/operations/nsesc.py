"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import consentartifactschema as shared_consentartifactschema
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class NsescSecurity:
    
    api_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-APIKEY' }})  
    client_id: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-CLIENTID' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NsescRequestBodyCertificateParameters:
    
    full_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FullName') }})
    r"""Full name"""  
    rollno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rollno') }})
    r"""Roll No"""  
    year: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('year') }})
    r"""Year"""  
    
class NsescRequestBodyFormatEnum(str, Enum):
    r"""The format of the certificate in response."""
    PDF = 'pdf'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NsescRequestBody:
    r"""Request format"""
    
    format: NsescRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format') }})
    r"""The format of the certificate in response."""  
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('txnId') }})
    r"""A unique transaction id for this request in UUID format. It is used for tracking the request."""  
    certificate_parameters: Optional[NsescRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('certificateParameters'), 'exclude': lambda f: f is None }})  
    consent_artifact: Optional[shared_consentartifactschema.ConsentArtifactSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('consentArtifact'), 'exclude': lambda f: f is None }})  
    
class Nsesc504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = 'gateway_timeout'

class Nsesc504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = 'Publisher service did not respond in time'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc504ApplicationJSON:
    r"""Gateway timeout"""
    
    error: Optional[Nsesc504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = 'service_unavailable'

class Nsesc503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = 'Publisher service is temporarily unavailable'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc503ApplicationJSON:
    r"""Service unavailable"""
    
    error: Optional[Nsesc503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = 'bad_gatewy'

class Nsesc502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = 'Publisher service returned an invalid response'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc502ApplicationJSON:
    r"""Bad gateway"""
    
    error: Optional[Nsesc502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'internal_server_error'

class Nsesc500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'Internal server error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc500ApplicationJSON:
    r"""Internal server error"""
    
    error: Optional[Nsesc500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = 'record_not_found'
    URL_NOT_FOUND = 'url_not_found'

class Nsesc404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = 'No record found'
    YOUR_API_URL_OR_PATH_IS_INCORRECT = 'Your API url or path is incorrect'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc404ApplicationJSON:
    r"""No record found"""
    
    error: Optional[Nsesc404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = 'invalid_authentication'
    INVALID_AUTHORIZATION = 'invalid_authorization'

class Nsesc401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = 'Authentication failed'
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = 'You are not authorized to use this API'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc401ApplicationJSON:
    r"""Unauthorized access"""
    
    error: Optional[Nsesc401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Nsesc400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = 'missing_parameter'
    INVALID_PARAMETER = 'invalid_parameter'
    INVALID_FORMAT = 'invalid_format'
    INVALID_TXNID = 'invalid_txnid'
    INVALID_CONSENTID = 'invalid_consentid'

class Nsesc400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = 'Please provide all mandatory parameters'
    BAD_REQUEST = 'Bad request'
    THE_FORMAT_PARAMETER_IS_INVALID = 'The format parameter is invalid'
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The txnId parameter must be in UUID format'
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The consentId parameter must be in UUID format'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Nsesc400ApplicationJSON:
    r"""Bad request"""
    
    error: Optional[Nsesc400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Nsesc400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class NsescResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    nsesc_400_application_json_object: Optional[Nsesc400ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad request"""  
    nsesc_401_application_json_object: Optional[Nsesc401ApplicationJSON] = dataclasses.field(default=None)
    r"""Unauthorized access"""  
    nsesc_404_application_json_object: Optional[Nsesc404ApplicationJSON] = dataclasses.field(default=None)
    r"""No record found"""  
    nsesc_500_application_json_object: Optional[Nsesc500ApplicationJSON] = dataclasses.field(default=None)
    r"""Internal server error"""  
    nsesc_502_application_json_object: Optional[Nsesc502ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad gateway"""  
    nsesc_503_application_json_object: Optional[Nsesc503ApplicationJSON] = dataclasses.field(default=None)
    r"""Service unavailable"""  
    nsesc_504_application_json_object: Optional[Nsesc504ApplicationJSON] = dataclasses.field(default=None)
    r"""Gateway timeout"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    