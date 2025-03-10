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
class SpcerSecurity:
    
    api_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-APIKEY' }})  
    client_id: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-CLIENTID' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SpcerRequestBodyCertificateParameters:
    
    exsession: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exsession') }})
    r"""Exam Session"""  
    full_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FullName') }})
    r"""Full name"""  
    rollnumber: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rollnumber') }})
    r"""Seat No"""  
    totalmarks: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('totalmarks') }})
    r"""Total Marks"""  
    year: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('year') }})
    r"""Year"""  
    
class SpcerRequestBodyFormatEnum(str, Enum):
    r"""The format of the certificate in response."""
    XML = 'xml'
    PDF = 'pdf'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SpcerRequestBody:
    r"""Request format"""
    
    format: SpcerRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format') }})
    r"""The format of the certificate in response."""  
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('txnId') }})
    r"""A unique transaction id for this request in UUID format. It is used for tracking the request."""  
    certificate_parameters: Optional[SpcerRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('certificateParameters'), 'exclude': lambda f: f is None }})  
    consent_artifact: Optional[shared_consentartifactschema.ConsentArtifactSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('consentArtifact'), 'exclude': lambda f: f is None }})  
    
class Spcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = 'gateway_timeout'

class Spcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = 'Publisher service did not respond in time'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer504ApplicationJSON:
    r"""Gateway timeout"""
    
    error: Optional[Spcer504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = 'service_unavailable'

class Spcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = 'Publisher service is temporarily unavailable'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer503ApplicationJSON:
    r"""Service unavailable"""
    
    error: Optional[Spcer503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = 'bad_gatewy'

class Spcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = 'Publisher service returned an invalid response'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer502ApplicationJSON:
    r"""Bad gateway"""
    
    error: Optional[Spcer502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'internal_server_error'

class Spcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'Internal server error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer500ApplicationJSON:
    r"""Internal server error"""
    
    error: Optional[Spcer500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = 'record_not_found'
    URL_NOT_FOUND = 'url_not_found'

class Spcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = 'No record found'
    YOUR_API_URL_OR_PATH_IS_INCORRECT = 'Your API url or path is incorrect'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer404ApplicationJSON:
    r"""No record found"""
    
    error: Optional[Spcer404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = 'invalid_authentication'
    INVALID_AUTHORIZATION = 'invalid_authorization'

class Spcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = 'Authentication failed'
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = 'You are not authorized to use this API'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer401ApplicationJSON:
    r"""Unauthorized access"""
    
    error: Optional[Spcer401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Spcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = 'missing_parameter'
    INVALID_PARAMETER = 'invalid_parameter'
    INVALID_FORMAT = 'invalid_format'
    INVALID_TXNID = 'invalid_txnid'
    INVALID_CONSENTID = 'invalid_consentid'

class Spcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = 'Please provide all mandatory parameters'
    BAD_REQUEST = 'Bad request'
    THE_FORMAT_PARAMETER_IS_INVALID = 'The format parameter is invalid'
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The txnId parameter must be in UUID format'
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The consentId parameter must be in UUID format'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Spcer400ApplicationJSON:
    r"""Bad request"""
    
    error: Optional[Spcer400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Spcer400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class SpcerResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    spcer_400_application_json_object: Optional[Spcer400ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad request"""  
    spcer_401_application_json_object: Optional[Spcer401ApplicationJSON] = dataclasses.field(default=None)
    r"""Unauthorized access"""  
    spcer_404_application_json_object: Optional[Spcer404ApplicationJSON] = dataclasses.field(default=None)
    r"""No record found"""  
    spcer_500_application_json_object: Optional[Spcer500ApplicationJSON] = dataclasses.field(default=None)
    r"""Internal server error"""  
    spcer_502_application_json_object: Optional[Spcer502ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad gateway"""  
    spcer_503_application_json_object: Optional[Spcer503ApplicationJSON] = dataclasses.field(default=None)
    r"""Service unavailable"""  
    spcer_504_application_json_object: Optional[Spcer504ApplicationJSON] = dataclasses.field(default=None)
    r"""Gateway timeout"""  
    