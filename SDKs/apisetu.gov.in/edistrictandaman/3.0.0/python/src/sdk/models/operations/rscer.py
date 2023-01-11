import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class RscerRequestBodyCertificateParameters:
    certificate_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateNumber') }})
    
class RscerRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclasses.dataclass
class RscerRequestBody:
    format: RscerRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[RscerRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclasses.dataclass
class RscerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Rscer400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Rscer400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclasses.dataclass
class Rscer400ApplicationJSON:
    error: Optional[Rscer400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Rscer401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class Rscer401ApplicationJSON:
    error: Optional[Rscer401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Rscer404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclasses.dataclass
class Rscer404ApplicationJSON:
    error: Optional[Rscer404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Rscer500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class Rscer500ApplicationJSON:
    error: Optional[Rscer500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Rscer502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclasses.dataclass
class Rscer502ApplicationJSON:
    error: Optional[Rscer502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Rscer503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class Rscer503ApplicationJSON:
    error: Optional[Rscer503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Rscer504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Rscer504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class Rscer504ApplicationJSON:
    error: Optional[Rscer504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Rscer504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class RscerRequest:
    security: RscerSecurity = dataclasses.field()
    request: Optional[RscerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RscerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rscer_400_application_json_object: Optional[Rscer400ApplicationJSON] = dataclasses.field(default=None)
    rscer_401_application_json_object: Optional[Rscer401ApplicationJSON] = dataclasses.field(default=None)
    rscer_404_application_json_object: Optional[Rscer404ApplicationJSON] = dataclasses.field(default=None)
    rscer_500_application_json_object: Optional[Rscer500ApplicationJSON] = dataclasses.field(default=None)
    rscer_502_application_json_object: Optional[Rscer502ApplicationJSON] = dataclasses.field(default=None)
    rscer_503_application_json_object: Optional[Rscer503ApplicationJSON] = dataclasses.field(default=None)
    rscer_504_application_json_object: Optional[Rscer504ApplicationJSON] = dataclasses.field(default=None)
    
