import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getawsdefaultservicequotarequest as shared_getawsdefaultservicequotarequest
from ..shared import getawsdefaultservicequotaresponse as shared_getawsdefaultservicequotaresponse

class GetAwsDefaultServiceQuotaXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_AWS_DEFAULT_SERVICE_QUOTA = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"


@dataclasses.dataclass
class GetAwsDefaultServiceQuotaHeaders:
    x_amz_target: GetAwsDefaultServiceQuotaXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAwsDefaultServiceQuotaRequest:
    headers: GetAwsDefaultServiceQuotaHeaders = dataclasses.field()
    request: shared_getawsdefaultservicequotarequest.GetAwsDefaultServiceQuotaRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAwsDefaultServiceQuotaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_aws_default_service_quota_response: Optional[shared_getawsdefaultservicequotaresponse.GetAwsDefaultServiceQuotaResponse] = dataclasses.field(default=None)
    illegal_argument_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_resource_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
