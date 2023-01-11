import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatedomainconfigurationresponse as shared_updatedomainconfigurationresponse


@dataclasses.dataclass
class UpdateDomainConfigurationPathParams:
    domain_configuration_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domainConfigurationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDomainConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDomainConfigurationRequestBodyAuthorizerConfig:
    r"""UpdateDomainConfigurationRequestBodyAuthorizerConfig
    An object that specifies the authorization service for a domain.
    """
    
    allow_authorizer_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAuthorizerOverride') }})
    default_authorizer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAuthorizerName') }})
    
class UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateDomainConfigurationRequestBody:
    authorizer_config: Optional[UpdateDomainConfigurationRequestBodyAuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerConfig') }})
    domain_configuration_status: Optional[UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationStatus') }})
    remove_authorizer_config: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAuthorizerConfig') }})
    

@dataclasses.dataclass
class UpdateDomainConfigurationRequest:
    headers: UpdateDomainConfigurationHeaders = dataclasses.field()
    path_params: UpdateDomainConfigurationPathParams = dataclasses.field()
    request: UpdateDomainConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDomainConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_validation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    update_domain_configuration_response: Optional[shared_updatedomainconfigurationresponse.UpdateDomainConfigurationResponse] = dataclasses.field(default=None)
    
