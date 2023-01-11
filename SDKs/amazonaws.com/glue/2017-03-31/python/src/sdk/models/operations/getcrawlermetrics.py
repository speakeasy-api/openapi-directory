import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcrawlermetricsrequest as shared_getcrawlermetricsrequest
from ..shared import getcrawlermetricsresponse as shared_getcrawlermetricsresponse


@dataclasses.dataclass
class GetCrawlerMetricsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetCrawlerMetricsXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_CRAWLER_METRICS = "AWSGlue.GetCrawlerMetrics"


@dataclasses.dataclass
class GetCrawlerMetricsHeaders:
    x_amz_target: GetCrawlerMetricsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCrawlerMetricsRequest:
    headers: GetCrawlerMetricsHeaders = dataclasses.field()
    query_params: GetCrawlerMetricsQueryParams = dataclasses.field()
    request: shared_getcrawlermetricsrequest.GetCrawlerMetricsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCrawlerMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_crawler_metrics_response: Optional[shared_getcrawlermetricsresponse.GetCrawlerMetricsResponse] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
