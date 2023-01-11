import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import createdomainconfigurationresponse as shared_createdomainconfigurationresponse


@dataclasses.dataclass
class CreateDomainConfigurationPathParams:
    domain_configuration_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainConfigurationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDomainConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDomainConfigurationRequestBodyAuthorizerConfig:
    r"""CreateDomainConfigurationRequestBodyAuthorizerConfig
    An object that specifies the authorization service for a domain.
    """
    
    allow_authorizer_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAuthorizerOverride') }})
    default_authorizer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAuthorizerName') }})
    
class CreateDomainConfigurationRequestBodyServiceTypeEnum(str, Enum):
    DATA = "DATA"
    CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER"
    JOBS = "JOBS"


@dataclass_json
@dataclasses.dataclass
class CreateDomainConfigurationRequestBody:
    authorizer_config: Optional[CreateDomainConfigurationRequestBodyAuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerConfig') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    server_certificate_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateArns') }})
    service_type: Optional[CreateDomainConfigurationRequestBodyServiceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    validation_certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationCertificateArn') }})
    

@dataclasses.dataclass
class CreateDomainConfigurationRequest:
    headers: CreateDomainConfigurationHeaders = dataclasses.field()
    path_params: CreateDomainConfigurationPathParams = dataclasses.field()
    request: CreateDomainConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDomainConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_validation_exception: Optional[Any] = dataclasses.field(default=None)
    create_domain_configuration_response: Optional[shared_createdomainconfigurationresponse.CreateDomainConfigurationResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
