import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alarmtype_enum as shared_alarmtype_enum

class GetDescribeAlarmsActionEnum(str, Enum):
    DESCRIBE_ALARMS = "DescribeAlarms"

class GetDescribeAlarmsStateValueEnum(str, Enum):
    OK = "OK"
    ALARM = "ALARM"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

class GetDescribeAlarmsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclasses.dataclass
class GetDescribeAlarmsQueryParams:
    action: GetDescribeAlarmsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeAlarmsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    action_prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ActionPrefix', 'style': 'form', 'explode': True }})
    alarm_name_prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AlarmNamePrefix', 'style': 'form', 'explode': True }})
    alarm_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AlarmNames', 'style': 'form', 'explode': True }})
    alarm_types: Optional[list[shared_alarmtype_enum.AlarmTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AlarmTypes', 'style': 'form', 'explode': True }})
    children_of_alarm_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ChildrenOfAlarmName', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    parents_of_alarm_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ParentsOfAlarmName', 'style': 'form', 'explode': True }})
    state_value: Optional[GetDescribeAlarmsStateValueEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StateValue', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeAlarmsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeAlarmsRequest:
    headers: GetDescribeAlarmsHeaders = dataclasses.field()
    query_params: GetDescribeAlarmsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeAlarmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
