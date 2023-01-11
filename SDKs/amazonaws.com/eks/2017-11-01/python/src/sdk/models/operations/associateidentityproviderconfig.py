import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associateidentityproviderconfigresponse as shared_associateidentityproviderconfigresponse


@dataclasses.dataclass
class AssociateIdentityProviderConfigPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateIdentityProviderConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssociateIdentityProviderConfigRequestBodyOidc:
    r"""AssociateIdentityProviderConfigRequestBodyOidc
    An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in <a href=\"https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html\">Authenticating users for your cluster from an OpenID Connect identity provider</a> in the <i>Amazon EKS User Guide</i>.
    """
    
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    groups_claim: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsClaim') }})
    groups_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsPrefix') }})
    identity_provider_config_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfigName') }})
    issuer_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerUrl') }})
    required_claims: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredClaims') }})
    username_claim: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernameClaim') }})
    username_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usernamePrefix') }})
    

@dataclass_json
@dataclasses.dataclass
class AssociateIdentityProviderConfigRequestBody:
    oidc: AssociateIdentityProviderConfigRequestBodyOidc = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class AssociateIdentityProviderConfigRequest:
    headers: AssociateIdentityProviderConfigHeaders = dataclasses.field()
    path_params: AssociateIdentityProviderConfigPathParams = dataclasses.field()
    request: AssociateIdentityProviderConfigRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateIdentityProviderConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_identity_provider_config_response: Optional[shared_associateidentityproviderconfigresponse.AssociateIdentityProviderConfigResponse] = dataclasses.field(default=None)
    client_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
