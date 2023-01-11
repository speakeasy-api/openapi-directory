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


@dataclasses.dataclass
class ImporterExporterCodeVerificationAPIPathParams:
    iec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iec', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImporterExporterCodeVerificationAPISecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: Optional[shared_security.SchemeClientID] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI200ApplicationJSON:
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine1') }})
    address_line2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLine2') }})
    branch: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    data_as_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataAsOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directors') }})
    entity_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityName') }})
    exporter_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exporterType') }})
    iec: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iec') }})
    iec_issue_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iecIssueDate') }})
    iec_modification_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iecModificationDate') }})
    iec_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iecStatus') }})
    nature_of_concern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('natureOfConcern') }})
    pan: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pan') }})
    pin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
class ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum(str, Enum):
    INVALID_PARAMETER = "invalid parameter"
    MISSING_PARAMETER = "missing parameter"

class ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum(str, Enum):
    BAD_REQUEST = "Bad request"
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS_ = "Please provide all mandatory parameters."


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI400ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum(str, Enum):
    INVALID_AUTHENTICATION = "invalid_authentication"
    INVALID_AUTHORIZATION = "invalid_authorization"

class ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum(str, Enum):
    AUTHENTICATION_FAILED = "Authentication failed"
    YOU_ARE_NOT_AUTHORIZED_TO_USE_THIS_API = "You are not authorized to use this API"


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI401ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum(str, Enum):
    RECORD_NOT_FOUND = "record_not_found"
    URL_NOT_FOUND = "Url not found"

class ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum(str, Enum):
    NO_RECORD_FOUND = "No record found"
    YOUR_API_URL_OR_PATH_IS_INCORRECT_ = "Your API url or path is incorrect."


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI404ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "internal_server_error"

class ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI500ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum(str, Enum):
    BAD_GATEWAY = "bad gateway"

class ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_RETURNED_AN_INVALID_RESPONSE_ = "Publisher service returned an invalid response."


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI502ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum(str, Enum):
    SERVICE_UNAVAILABLE = "service_unavailable"

class ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_IS_TEMPORARILY_UNAVAILABLE = "Publisher service is temporarily unavailable"


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI503ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    
class ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum(str, Enum):
    GATEWAY_TIMEOUT = "gateway_timeout"

class ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum(str, Enum):
    PUBLISHER_SERVICE_DID_NOT_RESPOND_IN_TIME = "Publisher service did not respond in time"


@dataclass_json
@dataclasses.dataclass
class ImporterExporterCodeVerificationAPI504ApplicationJSON:
    error: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    

@dataclasses.dataclass
class ImporterExporterCodeVerificationAPIRequest:
    path_params: ImporterExporterCodeVerificationAPIPathParams = dataclasses.field()
    security: ImporterExporterCodeVerificationAPISecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImporterExporterCodeVerificationAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    importer_exporter_code_verification_api_200_application_json_object: Optional[ImporterExporterCodeVerificationAPI200ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_400_application_json_object: Optional[ImporterExporterCodeVerificationAPI400ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_401_application_json_object: Optional[ImporterExporterCodeVerificationAPI401ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_404_application_json_object: Optional[ImporterExporterCodeVerificationAPI404ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_500_application_json_object: Optional[ImporterExporterCodeVerificationAPI500ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_502_application_json_object: Optional[ImporterExporterCodeVerificationAPI502ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_503_application_json_object: Optional[ImporterExporterCodeVerificationAPI503ApplicationJSON] = dataclasses.field(default=None)
    importer_exporter_code_verification_api_504_application_json_object: Optional[ImporterExporterCodeVerificationAPI504ApplicationJSON] = dataclasses.field(default=None)
    
