import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describesubscriptionfiltersrequest as shared_describesubscriptionfiltersrequest
from ..shared import describesubscriptionfiltersresponse as shared_describesubscriptionfiltersresponse


@dataclasses.dataclass
class DescribeSubscriptionFiltersQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeSubscriptionFiltersXAmzTargetEnum(str, Enum):
    LOGS_20140328_DESCRIBE_SUBSCRIPTION_FILTERS = "Logs_20140328.DescribeSubscriptionFilters"


@dataclasses.dataclass
class DescribeSubscriptionFiltersHeaders:
    x_amz_target: DescribeSubscriptionFiltersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSubscriptionFiltersRequest:
    headers: DescribeSubscriptionFiltersHeaders = dataclasses.field()
    query_params: DescribeSubscriptionFiltersQueryParams = dataclasses.field()
    request: shared_describesubscriptionfiltersrequest.DescribeSubscriptionFiltersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSubscriptionFiltersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_subscription_filters_response: Optional[shared_describesubscriptionfiltersresponse.DescribeSubscriptionFiltersResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
