import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPutScheduledUpdateGroupActionActionEnum(str, Enum):
    PUT_SCHEDULED_UPDATE_GROUP_ACTION = "PutScheduledUpdateGroupAction"

class GetPutScheduledUpdateGroupActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclasses.dataclass
class GetPutScheduledUpdateGroupActionQueryParams:
    action: GetPutScheduledUpdateGroupActionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    scheduled_action_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ScheduledActionName', 'style': 'form', 'explode': True }})
    version: GetPutScheduledUpdateGroupActionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    desired_capacity: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DesiredCapacity', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    max_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxSize', 'style': 'form', 'explode': True }})
    min_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MinSize', 'style': 'form', 'explode': True }})
    recurrence: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Recurrence', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Time', 'style': 'form', 'explode': True }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TimeZone', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPutScheduledUpdateGroupActionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPutScheduledUpdateGroupActionRequest:
    headers: GetPutScheduledUpdateGroupActionHeaders = dataclasses.field()
    query_params: GetPutScheduledUpdateGroupActionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPutScheduledUpdateGroupActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
