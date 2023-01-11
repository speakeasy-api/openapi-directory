import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeSpotFleetRequestHistoryActionEnum(str, Enum):
    DESCRIBE_SPOT_FLEET_REQUEST_HISTORY = "DescribeSpotFleetRequestHistory"

class GetDescribeSpotFleetRequestHistoryEventTypeEnum(str, Enum):
    INSTANCE_CHANGE = "instanceChange"
    FLEET_REQUEST_CHANGE = "fleetRequestChange"
    ERROR = "error"
    INFORMATION = "information"

class GetDescribeSpotFleetRequestHistoryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetDescribeSpotFleetRequestHistoryQueryParams:
    action: GetDescribeSpotFleetRequestHistoryActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    spot_fleet_request_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SpotFleetRequestId', 'style': 'form', 'explode': True }})
    start_time: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetDescribeSpotFleetRequestHistoryVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    event_type: Optional[GetDescribeSpotFleetRequestHistoryEventTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EventType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeSpotFleetRequestHistoryHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeSpotFleetRequestHistoryRequest:
    headers: GetDescribeSpotFleetRequestHistoryHeaders = dataclasses.field()
    query_params: GetDescribeSpotFleetRequestHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeSpotFleetRequestHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
