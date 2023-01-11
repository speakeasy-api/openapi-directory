import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import registercacertificateresponse as shared_registercacertificateresponse


@dataclasses.dataclass
class RegisterCaCertificateQueryParams:
    allow_auto_registration: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowAutoRegistration', 'style': 'form', 'explode': True }})
    set_as_active: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setAsActive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegisterCaCertificateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterCaCertificateRequestBodyRegistrationConfig:
    r"""RegisterCaCertificateRequestBodyRegistrationConfig
    The registration configuration.
    """
    
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    template_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBody') }})
    

@dataclass_json
@dataclasses.dataclass
class RegisterCaCertificateRequestBody:
    ca_certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    verification_certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCertificate') }})
    registration_config: Optional[RegisterCaCertificateRequestBodyRegistrationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationConfig') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class RegisterCaCertificateRequest:
    headers: RegisterCaCertificateHeaders = dataclasses.field()
    query_params: RegisterCaCertificateQueryParams = dataclasses.field()
    request: RegisterCaCertificateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterCaCertificateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_validation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    register_ca_certificate_response: Optional[shared_registercacertificateresponse.RegisterCaCertificateResponse] = dataclasses.field(default=None)
    registration_code_validation_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
