import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateCaCertificatePathParams:
    ca_certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'caCertificateId', 'style': 'simple', 'explode': False }})
    
class UpdateCaCertificateNewAutoRegistrationStatusEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

class UpdateCaCertificateNewStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclasses.dataclass
class UpdateCaCertificateQueryParams:
    new_auto_registration_status: Optional[UpdateCaCertificateNewAutoRegistrationStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newAutoRegistrationStatus', 'style': 'form', 'explode': True }})
    new_status: Optional[UpdateCaCertificateNewStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'newStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateCaCertificateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCaCertificateRequestBodyRegistrationConfig:
    r"""UpdateCaCertificateRequestBodyRegistrationConfig
    The registration configuration.
    """
    
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    template_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCaCertificateRequestBody:
    registration_config: Optional[UpdateCaCertificateRequestBodyRegistrationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationConfig') }})
    remove_auto_registration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAutoRegistration') }})
    

@dataclasses.dataclass
class UpdateCaCertificateRequest:
    headers: UpdateCaCertificateHeaders = dataclasses.field()
    path_params: UpdateCaCertificatePathParams = dataclasses.field()
    query_params: UpdateCaCertificateQueryParams = dataclasses.field()
    request: UpdateCaCertificateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCaCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
