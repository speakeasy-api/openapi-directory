import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describependingaggregationrequestsrequest as shared_describependingaggregationrequestsrequest
from ..shared import describependingaggregationrequestsresponse as shared_describependingaggregationrequestsresponse


@dataclasses.dataclass
class DescribePendingAggregationRequestsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribePendingAggregationRequestsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_PENDING_AGGREGATION_REQUESTS = "StarlingDoveService.DescribePendingAggregationRequests"


@dataclasses.dataclass
class DescribePendingAggregationRequestsHeaders:
    x_amz_target: DescribePendingAggregationRequestsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribePendingAggregationRequestsRequest:
    headers: DescribePendingAggregationRequestsHeaders = dataclasses.field()
    query_params: DescribePendingAggregationRequestsQueryParams = dataclasses.field()
    request: shared_describependingaggregationrequestsrequest.DescribePendingAggregationRequestsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribePendingAggregationRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_pending_aggregation_requests_response: Optional[shared_describependingaggregationrequestsresponse.DescribePendingAggregationRequestsResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    
