import dataclasses
from typing import Optional
from enum import Enum
from ..shared import authenticateoidcactionconditionalbehaviorenum_enum as shared_authenticateoidcactionconditionalbehaviorenum_enum


@dataclasses.dataclass
class AuthenticateOidcActionConfig:
    r"""AuthenticateOidcActionConfig
    Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
    """
    
    authorization_endpoint: str = dataclasses.field()
    client_id: str = dataclasses.field()
    issuer: str = dataclasses.field()
    token_endpoint: str = dataclasses.field()
    user_info_endpoint: str = dataclasses.field()
    authentication_request_extra_params: Optional[dict[str, str]] = dataclasses.field(default=None)
    client_secret: Optional[str] = dataclasses.field(default=None)
    on_unauthenticated_request: Optional[shared_authenticateoidcactionconditionalbehaviorenum_enum.AuthenticateOidcActionConditionalBehaviorEnumEnum] = dataclasses.field(default=None)
    scope: Optional[str] = dataclasses.field(default=None)
    session_cookie_name: Optional[str] = dataclasses.field(default=None)
    session_timeout: Optional[int] = dataclasses.field(default=None)
    use_existing_client_secret: Optional[bool] = dataclasses.field(default=None)
    
