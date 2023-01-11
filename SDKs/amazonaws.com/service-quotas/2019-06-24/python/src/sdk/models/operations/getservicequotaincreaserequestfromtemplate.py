import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getservicequotaincreaserequestfromtemplaterequest as shared_getservicequotaincreaserequestfromtemplaterequest
from ..shared import getservicequotaincreaserequestfromtemplateresponse as shared_getservicequotaincreaserequestfromtemplateresponse

class GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"


@dataclasses.dataclass
class GetServiceQuotaIncreaseRequestFromTemplateHeaders:
    x_amz_target: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetServiceQuotaIncreaseRequestFromTemplateRequest:
    headers: GetServiceQuotaIncreaseRequestFromTemplateHeaders = dataclasses.field()
    request: shared_getservicequotaincreaserequestfromtemplaterequest.GetServiceQuotaIncreaseRequestFromTemplateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetServiceQuotaIncreaseRequestFromTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aws_service_access_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_service_quota_increase_request_from_template_response: Optional[shared_getservicequotaincreaserequestfromtemplateresponse.GetServiceQuotaIncreaseRequestFromTemplateResponse] = dataclasses.field(default=None)
    illegal_argument_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_organization_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_resource_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    templates_not_available_in_region_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
