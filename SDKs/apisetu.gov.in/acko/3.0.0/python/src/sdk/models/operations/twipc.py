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
class TwipcSecurity:
    
    api_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-APIKEY' }})  
    client_id: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-APISETU-CLIENTID' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TwipcRequestBodyCertificateParameters:
    
    phoneno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phoneno') }})
    r"""Phone Number"""  
    policyno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('policyno') }})
    r"""Policy Number"""  
    
class TwipcRequestBodyFormatEnum(str, Enum):
    r"""The format of the certificate in response."""
    PDF = 'pdf'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TwipcRequestBody:
    r"""Request format"""
    
    format: TwipcRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('format') }})
    r"""The format of the certificate in response."""  
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('txnId') }})
    r"""A unique transaction id for this request in UUID format. It is used for tracking the request."""  
    certificate_parameters: Optional[TwipcRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('certificateParameters'), 'exclude': lambda f: f is None }})  
    consent_artifact: Optional[shared_consentartifactschema.ConsentArtifactSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('consentArtifact'), 'exclude': lambda f: f is None }})  
    
class Twipc504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = 'gateway_timeout'

class Twipc504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = 'Publisher service did not respond in time'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc504ApplicationJSON:
    r"""Gateway timeout"""
    
    error: Optional[Twipc504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = 'service_unavailable'

class Twipc503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = 'Publisher service is temporarily unavailable'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc503ApplicationJSON:
    r"""Service unavailable"""
    
    error: Optional[Twipc503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = 'bad_gatewy'

class Twipc502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = 'Publisher service returned an invalid response'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc502ApplicationJSON:
    r"""Bad gateway"""
    
    error: Optional[Twipc502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'internal_server_error'

class Twipc500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = 'Internal server error'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc500ApplicationJSON:
    r"""Internal server error"""
    
    error: Optional[Twipc500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = 'record_not_found'
    URL_NOT_FOUND = 'url_not_found'

class Twipc404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = 'No record found'
    YOUR_API_URL_OR_PATH_IS_INCORRECT = 'Your API url or path is incorrect'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc404ApplicationJSON:
    r"""No record found"""
    
    error: Optional[Twipc404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = 'invalid_authentication'
    INVALID_AUTHORIZATION = 'invalid_authorization'

class Twipc401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = 'Authentication failed'
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = 'You are not authorized to use this API'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc401ApplicationJSON:
    r"""Unauthorized access"""
    
    error: Optional[Twipc401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    
class Twipc400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = 'missing_parameter'
    INVALID_PARAMETER = 'invalid_parameter'
    INVALID_FORMAT = 'invalid_format'
    INVALID_TXNID = 'invalid_txnid'
    INVALID_CONSENTID = 'invalid_consentid'

class Twipc400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = 'Please provide all mandatory parameters'
    BAD_REQUEST = 'Bad request'
    THE_FORMAT_PARAMETER_IS_INVALID = 'The format parameter is invalid'
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The txnId parameter must be in UUID format'
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = 'The consentId parameter must be in UUID format'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Twipc400ApplicationJSON:
    r"""Bad request"""
    
    error: Optional[Twipc400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    error_description: Optional[Twipc400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('errorDescription'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class TwipcResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    twipc_400_application_json_object: Optional[Twipc400ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad request"""  
    twipc_401_application_json_object: Optional[Twipc401ApplicationJSON] = dataclasses.field(default=None)
    r"""Unauthorized access"""  
    twipc_404_application_json_object: Optional[Twipc404ApplicationJSON] = dataclasses.field(default=None)
    r"""No record found"""  
    twipc_500_application_json_object: Optional[Twipc500ApplicationJSON] = dataclasses.field(default=None)
    r"""Internal server error"""  
    twipc_502_application_json_object: Optional[Twipc502ApplicationJSON] = dataclasses.field(default=None)
    r"""Bad gateway"""  
    twipc_503_application_json_object: Optional[Twipc503ApplicationJSON] = dataclasses.field(default=None)
    r"""Service unavailable"""  
    twipc_504_application_json_object: Optional[Twipc504ApplicationJSON] = dataclasses.field(default=None)
    r"""Gateway timeout"""  
    