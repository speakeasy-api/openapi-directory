import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyTargetGroupActionEnum(str, Enum):
    MODIFY_TARGET_GROUP = "ModifyTargetGroup"

class GetModifyTargetGroupHealthCheckProtocolEnum(str, Enum):
    HTTP = "HTTP"
    HTTPS = "HTTPS"
    TCP = "TCP"
    TLS = "TLS"
    UDP = "UDP"
    TCP_UDP = "TCP_UDP"
    GENEVE = "GENEVE"


@dataclasses.dataclass
class GetModifyTargetGroupMatcher:
    r"""GetModifyTargetGroupMatcher
    The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
    """
    
    grpc_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'GrpcCode' }})
    http_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HttpCode' }})
    
class GetModifyTargetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_12_01 = "2015-12-01"


@dataclasses.dataclass
class GetModifyTargetGroupQueryParams:
    action: GetModifyTargetGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    target_group_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TargetGroupArn', 'style': 'form', 'explode': True }})
    version: GetModifyTargetGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    health_check_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckEnabled', 'style': 'form', 'explode': True }})
    health_check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckIntervalSeconds', 'style': 'form', 'explode': True }})
    health_check_path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckPath', 'style': 'form', 'explode': True }})
    health_check_port: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckPort', 'style': 'form', 'explode': True }})
    health_check_protocol: Optional[GetModifyTargetGroupHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckProtocol', 'style': 'form', 'explode': True }})
    health_check_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthCheckTimeoutSeconds', 'style': 'form', 'explode': True }})
    healthy_threshold_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HealthyThresholdCount', 'style': 'form', 'explode': True }})
    matcher: Optional[GetModifyTargetGroupMatcher] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Matcher', 'style': 'form', 'explode': True }})
    unhealthy_threshold_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'UnhealthyThresholdCount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyTargetGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyTargetGroupRequest:
    headers: GetModifyTargetGroupHeaders = dataclasses.field()
    query_params: GetModifyTargetGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyTargetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
