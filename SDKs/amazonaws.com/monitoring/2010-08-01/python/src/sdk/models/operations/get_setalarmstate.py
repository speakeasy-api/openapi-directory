import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSetAlarmStateActionEnum(str, Enum):
    SET_ALARM_STATE = "SetAlarmState"

class GetSetAlarmStateStateValueEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

class GetSetAlarmStateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclasses.dataclass
class GetSetAlarmStateQueryParams:
    action: GetSetAlarmStateActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    alarm_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AlarmName', 'style': 'form', 'explode': True }})
    state_reason: str = dataclasses.field(metadata={'query_param': { 'field_name': 'StateReason', 'style': 'form', 'explode': True }})
    state_value: GetSetAlarmStateStateValueEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'StateValue', 'style': 'form', 'explode': True }})
    version: GetSetAlarmStateVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    state_reason_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StateReasonData', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetAlarmStateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetAlarmStateRequest:
    headers: GetSetAlarmStateHeaders = dataclasses.field()
    query_params: GetSetAlarmStateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetAlarmStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
