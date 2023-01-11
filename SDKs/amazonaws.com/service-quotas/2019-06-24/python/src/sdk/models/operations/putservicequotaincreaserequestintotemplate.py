import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putservicequotaincreaserequestintotemplaterequest as shared_putservicequotaincreaserequestintotemplaterequest
from ..shared import putservicequotaincreaserequestintotemplateresponse as shared_putservicequotaincreaserequestintotemplateresponse

class PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"


@dataclasses.dataclass
class PutServiceQuotaIncreaseRequestIntoTemplateHeaders:
    x_amz_target: PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutServiceQuotaIncreaseRequestIntoTemplateRequest:
    headers: PutServiceQuotaIncreaseRequestIntoTemplateHeaders = dataclasses.field()
    request: shared_putservicequotaincreaserequestintotemplaterequest.PutServiceQuotaIncreaseRequestIntoTemplateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutServiceQuotaIncreaseRequestIntoTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aws_service_access_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    illegal_argument_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_organization_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_resource_exception: Optional[Any] = dataclasses.field(default=None)
    put_service_quota_increase_request_into_template_response: Optional[shared_putservicequotaincreaserequestintotemplateresponse.PutServiceQuotaIncreaseRequestIntoTemplateResponse] = dataclasses.field(default=None)
    quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
