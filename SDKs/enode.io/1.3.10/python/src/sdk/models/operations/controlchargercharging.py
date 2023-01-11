import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ControlChargerChargingPathParams:
    charger_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chargerId', 'style': 'simple', 'explode': False }})
    
class ControlChargerChargingRequestBodyActionEnum(str, Enum):
    START = "START"
    STOP = "STOP"


@dataclass_json
@dataclasses.dataclass
class ControlChargerChargingRequestBody:
    action: ControlChargerChargingRequestBodyActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclasses.dataclass
class ControlChargerChargingSecurity:
    user_access_token: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    user_access_token1: Optional[shared_security.SchemeUserAccessToken] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ControlChargerChargingRequest:
    path_params: ControlChargerChargingPathParams = dataclasses.field()
    security: ControlChargerChargingSecurity = dataclasses.field()
    request: Optional[ControlChargerChargingRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ControlChargerChargingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
