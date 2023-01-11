import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeEventsActionEnum(str, Enum):
    DESCRIBE_EVENTS = "DescribeEvents"

class GetDescribeEventsSourceTypeEnum(str, Enum):
    CACHE_CLUSTER = "cache-cluster"
    CACHE_PARAMETER_GROUP = "cache-parameter-group"
    CACHE_SECURITY_GROUP = "cache-security-group"
    CACHE_SUBNET_GROUP = "cache-subnet-group"
    REPLICATION_GROUP = "replication-group"
    USER = "user"
    USER_GROUP = "user-group"

class GetDescribeEventsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDescribeEventsQueryParams:
    action: GetDescribeEventsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeEventsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Duration', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    source_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceIdentifier', 'style': 'form', 'explode': True }})
    source_type: Optional[GetDescribeEventsSourceTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceType', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    

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
    
