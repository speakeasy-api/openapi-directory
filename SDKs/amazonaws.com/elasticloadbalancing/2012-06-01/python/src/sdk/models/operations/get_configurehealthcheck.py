import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetConfigureHealthCheckActionEnum(str, Enum):
    CONFIGURE_HEALTH_CHECK = "ConfigureHealthCheck"


@dataclasses.dataclass
class GetConfigureHealthCheckHealthCheck:
    r"""GetConfigureHealthCheckHealthCheck
    Information about a health check.
    """
    
    healthy_threshold: int = dataclasses.field(metadata={'query_param': { 'field_name': 'HealthyThreshold' }})
    interval: int = dataclasses.field(metadata={'query_param': { 'field_name': 'Interval' }})
    target: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Target' }})
    timeout: int = dataclasses.field(metadata={'query_param': { 'field_name': 'Timeout' }})
    unhealthy_threshold: int = dataclasses.field(metadata={'query_param': { 'field_name': 'UnhealthyThreshold' }})
    
class GetConfigureHealthCheckVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclasses.dataclass
class GetConfigureHealthCheckQueryParams:
    action: GetConfigureHealthCheckActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    health_check: GetConfigureHealthCheckHealthCheck = dataclasses.field(metadata={'query_param': { 'field_name': 'HealthCheck', 'style': 'form', 'explode': True }})
    load_balancer_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    version: GetConfigureHealthCheckVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConfigureHealthCheckHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigureHealthCheckRequest:
    headers: GetConfigureHealthCheckHeaders = dataclasses.field()
    query_params: GetConfigureHealthCheckQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigureHealthCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
