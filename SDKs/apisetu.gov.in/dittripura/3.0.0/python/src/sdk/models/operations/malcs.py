import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class MalcsRequestBodyCertificateParameters:
    ref_no: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefNo') }})
    token_no: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenNo') }})
    
class MalcsRequestBodyFormatEnum(str, Enum):
    PDF = "pdf"


@dataclass_json
@dataclasses.dataclass
class MalcsRequestBody:
    format: MalcsRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    txn_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txnId') }})
    certificate_parameters: Optional[MalcsRequestBodyCertificateParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateParameters') }})
    consent_artifact: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    

@dataclasses.dataclass
class MalcsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class Malcs400ApplicationJSONErrorEnum(str, Enum):
    MISSING_PARAMETER = "missing_parameter"
    INVALID_PARAMETER = "invalid_parameter"
    INVALID_FORMAT = "invalid_format"
    INVALID_TXNID = "invalid_txnid"
    INVALID_CONSENTID = "invalid_consentid"

class Malcs400ApplicationJSONErrorDescriptionEnum(str, Enum):
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS = "Please provide all mandatory parameters"
    BAD_REQUEST = "Bad request"
    THE_FORMAT_PARAMETER_IS_INVALID = "The format parameter is invalid"
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The txnId parameter must be in UUID format"
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT = "The consentId parameter must be in UUID format"


@dataclass_json
@dataclasses.dataclass
class Malcs400ApplicationJSON:
    error: Optional[Malcs400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class Malcs401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class Malcs401ApplicationJSON:
    error: Optional[Malcs401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "url_not_found"

class Malcs404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT = "Your API url or path is incorrect"


@dataclass_json
@dataclasses.dataclass
class Malcs404ApplicationJSON:
    error: Optional[Malcs404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class Malcs500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class Malcs500ApplicationJSON:
    error: Optional[Malcs500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWY = "bad_gatewy"

class Malcs502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE = "Publisher service returned an invalid response"


@dataclass_json
@dataclasses.dataclass
class Malcs502ApplicationJSON:
    error: Optional[Malcs502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class Malcs503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class Malcs503ApplicationJSON:
    error: Optional[Malcs503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class Malcs504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class Malcs504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class Malcs504ApplicationJSON:
    error: Optional[Malcs504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Malcs504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class MalcsRequest:
    security: MalcsSecurity = dataclasses.field()
    request: Optional[MalcsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MalcsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    malcs_400_application_json_object: Optional[Malcs400ApplicationJSON] = dataclasses.field(default=None)
    malcs_401_application_json_object: Optional[Malcs401ApplicationJSON] = dataclasses.field(default=None)
    malcs_404_application_json_object: Optional[Malcs404ApplicationJSON] = dataclasses.field(default=None)
    malcs_500_application_json_object: Optional[Malcs500ApplicationJSON] = dataclasses.field(default=None)
    malcs_502_application_json_object: Optional[Malcs502ApplicationJSON] = dataclasses.field(default=None)
    malcs_503_application_json_object: Optional[Malcs503ApplicationJSON] = dataclasses.field(default=None)
    malcs_504_application_json_object: Optional[Malcs504ApplicationJSON] = dataclasses.field(default=None)
    
