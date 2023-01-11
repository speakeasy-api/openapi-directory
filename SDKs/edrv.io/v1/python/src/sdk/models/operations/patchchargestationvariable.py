import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PatchChargeStationVariablePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchChargeStationVariableRequestBodyVariableEnum(str, Enum):
    METER_VALUE_SAMPLE_INTERVAL = "MeterValueSampleInterval"
    HEARTBEAT_INTERVAL = "HeartbeatInterval"
    CONNECTION_TIME_OUT = "ConnectionTimeOut"
    WEB_SOCKET_PING_INTERVAL = "WebSocketPingInterval"
    TRANSACTION_MESSAGE_RETRY_INTERVAL = "TransactionMessageRetryInterval"
    TRANSACTION_MESSAGE_ATTEMPTS = "TransactionMessageAttempts"


@dataclass_json
@dataclasses.dataclass
class PatchChargeStationVariableRequestBody:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variable: Optional[PatchChargeStationVariableRequestBodyVariableEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchChargeStationVariable201ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PatchChargeStationVariableRequest:
    path_params: PatchChargeStationVariablePathParams = dataclasses.field()
    request: PatchChargeStationVariableRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchChargeStationVariableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_charge_station_variable_201_application_json_object: Optional[PatchChargeStationVariable201ApplicationJSON] = dataclasses.field(default=None)
    
