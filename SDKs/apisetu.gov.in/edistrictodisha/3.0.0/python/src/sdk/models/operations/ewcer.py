import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class EwcerRequestBodyCertificateParameters:
    uid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UID') }})
    refno: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refno') }})
    
class EwcerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclasses.dataclass
class EwcerRequestBody:
    format: EwcerRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[EwcerRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclasses.dataclass
class EwcerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Ewcer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Ewcer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclasses.dataclass
class Ewcer400ApplicationJSON:
    error: Optional[Ewcer400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Ewcer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class Ewcer401ApplicationJSON:
    error: Optional[Ewcer401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Ewcer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclasses.dataclass
class Ewcer404ApplicationJSON:
    error: Optional[Ewcer404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Ewcer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class Ewcer500ApplicationJSON:
    error: Optional[Ewcer500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Ewcer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclasses.dataclass
class Ewcer502ApplicationJSON:
    error: Optional[Ewcer502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Ewcer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class Ewcer503ApplicationJSON:
    error: Optional[Ewcer503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Ewcer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Ewcer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class Ewcer504ApplicationJSON:
    error: Optional[Ewcer504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Ewcer504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class EwcerRequest:
    security: EwcerSecurity = dataclasses.field()
    request: Optional[EwcerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EwcerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ewcer_400_application_json_object: Optional[Ewcer400ApplicationJSON] = dataclasses.field(default=None)
    ewcer_401_application_json_object: Optional[Ewcer401ApplicationJSON] = dataclasses.field(default=None)
    ewcer_404_application_json_object: Optional[Ewcer404ApplicationJSON] = dataclasses.field(default=None)
    ewcer_500_application_json_object: Optional[Ewcer500ApplicationJSON] = dataclasses.field(default=None)
    ewcer_502_application_json_object: Optional[Ewcer502ApplicationJSON] = dataclasses.field(default=None)
    ewcer_503_application_json_object: Optional[Ewcer503ApplicationJSON] = dataclasses.field(default=None)
    ewcer_504_application_json_object: Optional[Ewcer504ApplicationJSON] = dataclasses.field(default=None)
    
