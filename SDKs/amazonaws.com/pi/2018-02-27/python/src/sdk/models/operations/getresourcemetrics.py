import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getresourcemetricsrequest as shared_getresourcemetricsrequest
from ..shared import getresourcemetricsresponse as shared_getresourcemetricsresponse

class GetResourceMetricsXAmzTargetEnum(str, Enum):
    PERFORMANCE_INSIGHTSV20180227_GET_RESOURCE_METRICS = "PerformanceInsightsv20180227.GetResourceMetrics"


@dataclasses.dataclass
class GetResourceMetricsHeaders:
    x_amz_target: GetResourceMetricsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceMetricsRequest:
    headers: GetResourceMetricsHeaders = dataclasses.field()
    request: shared_getresourcemetricsrequest.GetResourceMetricsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetResourceMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resource_metrics_response: Optional[shared_getresourcemetricsresponse.GetResourceMetricsResponse] = dataclasses.field(default=None)
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    
