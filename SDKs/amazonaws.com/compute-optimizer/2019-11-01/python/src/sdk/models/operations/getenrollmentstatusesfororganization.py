import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getenrollmentstatusesfororganizationrequest as shared_getenrollmentstatusesfororganizationrequest
from ..shared import getenrollmentstatusesfororganizationresponse as shared_getenrollmentstatusesfororganizationresponse

class GetEnrollmentStatusesForOrganizationXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_GET_ENROLLMENT_STATUSES_FOR_ORGANIZATION = "ComputeOptimizerService.GetEnrollmentStatusesForOrganization"


@dataclasses.dataclass
class GetEnrollmentStatusesForOrganizationHeaders:
    x_amz_target: GetEnrollmentStatusesForOrganizationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnrollmentStatusesForOrganizationRequest:
    headers: GetEnrollmentStatusesForOrganizationHeaders = dataclasses.field()
    request: shared_getenrollmentstatusesfororganizationrequest.GetEnrollmentStatusesForOrganizationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetEnrollmentStatusesForOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_enrollment_statuses_for_organization_response: Optional[shared_getenrollmentstatusesfororganizationresponse.GetEnrollmentStatusesForOrganizationResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    missing_authentication_token: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
