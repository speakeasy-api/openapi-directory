import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class FitcerRequestBodyCertificateParameters:
    full_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }})
    uid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UID') }})
    chasis_no: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chasis_no') }})
    reg_no: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reg_no') }})
    swd_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('swd_name') }})
    
class FitcerRequestBodyFormatEnum(str, Enum):
    XML = "xml"
    PDF = "pdf"


@dataclass_json
@dataclasses.dataclass
class FitcerRequestBody:
    format: FitcerRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[FitcerRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclasses.dataclass
class FitcerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Fitcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Fitcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclasses.dataclass
class Fitcer400ApplicationJSON:
    error: Optional[Fitcer400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Fitcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class Fitcer401ApplicationJSON:
    error: Optional[Fitcer401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Fitcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclasses.dataclass
class Fitcer404ApplicationJSON:
    error: Optional[Fitcer404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Fitcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class Fitcer500ApplicationJSON:
    error: Optional[Fitcer500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Fitcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclasses.dataclass
class Fitcer502ApplicationJSON:
    error: Optional[Fitcer502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Fitcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class Fitcer503ApplicationJSON:
    error: Optional[Fitcer503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Fitcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Fitcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class Fitcer504ApplicationJSON:
    error: Optional[Fitcer504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Fitcer504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class FitcerRequest:
    security: FitcerSecurity = dataclasses.field()
    request: Optional[FitcerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FitcerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    fitcer_400_application_json_object: Optional[Fitcer400ApplicationJSON] = dataclasses.field(default=None)
    fitcer_401_application_json_object: Optional[Fitcer401ApplicationJSON] = dataclasses.field(default=None)
    fitcer_404_application_json_object: Optional[Fitcer404ApplicationJSON] = dataclasses.field(default=None)
    fitcer_500_application_json_object: Optional[Fitcer500ApplicationJSON] = dataclasses.field(default=None)
    fitcer_502_application_json_object: Optional[Fitcer502ApplicationJSON] = dataclasses.field(default=None)
    fitcer_503_application_json_object: Optional[Fitcer503ApplicationJSON] = dataclasses.field(default=None)
    fitcer_504_application_json_object: Optional[Fitcer504ApplicationJSON] = dataclasses.field(default=None)
    
