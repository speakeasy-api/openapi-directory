import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import alarmtype_enum as shared_alarmtype_enum

class GetDescribeAlarmHistoryActionEnum(str, Enum):
    DESCRIBE_ALARM_HISTORY = "DescribeAlarmHistory"

class GetDescribeAlarmHistoryHistoryItemTypeEnum(str, Enum):
    CONFIGURATION_UPDATE = "ConfigurationUpdate"
    STATE_UPDATE = "StateUpdate"
    ACTION = "Action"

class GetDescribeAlarmHistoryScanByEnum(str, Enum):
    TIMESTAMP_DESCENDING = "TimestampDescending"
    TIMESTAMP_ASCENDING = "TimestampAscending"

class GetDescribeAlarmHistoryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_08_01 = "2010-08-01"


@dataclasses.dataclass
class GetDescribeAlarmHistoryQueryParams:
    action: GetDescribeAlarmHistoryActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeAlarmHistoryVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    alarm_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AlarmName', 'style': 'form', 'explode': True }})
    alarm_types: Optional[list[shared_alarmtype_enum.AlarmTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AlarmTypes', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    history_item_type: Optional[GetDescribeAlarmHistoryHistoryItemTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HistoryItemType', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    scan_by: Optional[GetDescribeAlarmHistoryScanByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ScanBy', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeAlarmHistoryHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeAlarmHistoryRequest:
    headers: GetDescribeAlarmHistoryHeaders = dataclasses.field()
    query_params: GetDescribeAlarmHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeAlarmHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
