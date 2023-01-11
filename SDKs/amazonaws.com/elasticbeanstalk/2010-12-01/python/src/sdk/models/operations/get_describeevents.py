import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeEventsActionEnum(str, Enum):
    DESCRIBE_EVENTS = "DescribeEvents"

class GetDescribeEventsSeverityEnum(str, Enum):
    TRACE = "TRACE"
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"
    FATAL = "FATAL"

class GetDescribeEventsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetDescribeEventsQueryParams:
    action: GetDescribeEventsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeEventsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ApplicationName', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    environment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentId', 'style': 'form', 'explode': True }})
    environment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    platform_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PlatformArn', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RequestId', 'style': 'form', 'explode': True }})
    severity: Optional[GetDescribeEventsSeverityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Severity', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    template_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TemplateName', 'style': 'form', 'explode': True }})
    version_label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VersionLabel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeEventsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeEventsRequest:
    headers: GetDescribeEventsHeaders = dataclasses.field()
    query_params: GetDescribeEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
