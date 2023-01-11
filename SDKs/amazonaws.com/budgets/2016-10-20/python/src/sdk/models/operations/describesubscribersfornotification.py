import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describesubscribersfornotificationrequest as shared_describesubscribersfornotificationrequest
from ..shared import describesubscribersfornotificationresponse as shared_describesubscribersfornotificationresponse


@dataclasses.dataclass
class DescribeSubscribersForNotificationQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeSubscribersForNotificationXAmzTargetEnum(str, Enum):
    AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_SUBSCRIBERS_FOR_NOTIFICATION = "AWSBudgetServiceGateway.DescribeSubscribersForNotification"


@dataclasses.dataclass
class DescribeSubscribersForNotificationHeaders:
    x_amz_target: DescribeSubscribersForNotificationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSubscribersForNotificationRequest:
    headers: DescribeSubscribersForNotificationHeaders = dataclasses.field()
    query_params: DescribeSubscribersForNotificationQueryParams = dataclasses.field()
    request: shared_describesubscribersfornotificationrequest.DescribeSubscribersForNotificationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSubscribersForNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_subscribers_for_notification_response: Optional[shared_describesubscribersfornotificationresponse.DescribeSubscribersForNotificationResponse] = dataclasses.field(default=None)
    expired_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
