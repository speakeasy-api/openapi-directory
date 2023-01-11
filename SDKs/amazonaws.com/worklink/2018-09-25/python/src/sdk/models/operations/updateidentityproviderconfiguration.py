import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateIdentityProviderConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum(str, Enum):
    SAML = "SAML"


@dataclass_json
@dataclasses.dataclass
class UpdateIdentityProviderConfigurationRequestBody:
    fleet_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    identity_provider_type: UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    identity_provider_saml_metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderSamlMetadata') }})
    

@dataclasses.dataclass
class UpdateIdentityProviderConfigurationRequest:
    headers: UpdateIdentityProviderConfigurationHeaders = dataclasses.field()
    request: UpdateIdentityProviderConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateIdentityProviderConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    update_identity_provider_configuration_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
