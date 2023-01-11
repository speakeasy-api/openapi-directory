import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class SocerRequestBodyCertificateParameters:
    appno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APPNO') }})
    date_of_birth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date_Of_Birth') }})
    enrolno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ENROLNO') }})
    typ_of_cert: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypOfCert') }})
    
class SocerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclasses.dataclass
class SocerRequestBody:
    format: SocerRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[SocerRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclasses.dataclass
class SocerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Socer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Socer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclasses.dataclass
class Socer400ApplicationJSON:
    error: Optional[Socer400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Socer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class Socer401ApplicationJSON:
    error: Optional[Socer401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Socer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclasses.dataclass
class Socer404ApplicationJSON:
    error: Optional[Socer404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Socer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class Socer500ApplicationJSON:
    error: Optional[Socer500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Socer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclasses.dataclass
class Socer502ApplicationJSON:
    error: Optional[Socer502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Socer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class Socer503ApplicationJSON:
    error: Optional[Socer503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Socer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Socer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class Socer504ApplicationJSON:
    error: Optional[Socer504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Socer504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class SocerRequest:
    security: SocerSecurity = dataclasses.field()
    request: Optional[SocerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SocerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    socer_400_application_json_object: Optional[Socer400ApplicationJSON] = dataclasses.field(default=None)
    socer_401_application_json_object: Optional[Socer401ApplicationJSON] = dataclasses.field(default=None)
    socer_404_application_json_object: Optional[Socer404ApplicationJSON] = dataclasses.field(default=None)
    socer_500_application_json_object: Optional[Socer500ApplicationJSON] = dataclasses.field(default=None)
    socer_502_application_json_object: Optional[Socer502ApplicationJSON] = dataclasses.field(default=None)
    socer_503_application_json_object: Optional[Socer503ApplicationJSON] = dataclasses.field(default=None)
    socer_504_application_json_object: Optional[Socer504ApplicationJSON] = dataclasses.field(default=None)
    
