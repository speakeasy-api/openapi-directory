import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import requestservicequotaincreaserequest as shared_requestservicequotaincreaserequest
from ..shared import requestservicequotaincreaseresponse as shared_requestservicequotaincreaseresponse

class RequestServiceQuotaIncreaseXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_REQUEST_SERVICE_QUOTA_INCREASE = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"


@dataclasses.dataclass
class RequestServiceQuotaIncreaseHeaders:
    x_amz_target: RequestServiceQuotaIncreaseXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RequestServiceQuotaIncreaseRequest:
    headers: RequestServiceQuotaIncreaseHeaders = dataclasses.field()
    request: shared_requestservicequotaincreaserequest.RequestServiceQuotaIncreaseRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RequestServiceQuotaIncreaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    illegal_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_state_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_resource_exception: Optional[Any] = dataclasses.field(default=None)
    quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    request_service_quota_increase_response: Optional[shared_requestservicequotaincreaseresponse.RequestServiceQuotaIncreaseResponse] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
