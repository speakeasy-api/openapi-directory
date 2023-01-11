import dataclasses
from typing import Optional
from enum import Enum
from ..shared import authenticatecognitoactionconditionalbehaviorenum_enum as shared_authenticatecognitoactionconditionalbehaviorenum_enum


@dataclasses.dataclass
class AuthenticateCognitoActionConfig:
    r"""AuthenticateCognitoActionConfig
    Request parameters to use when integrating with Amazon Cognito to authenticate users.
    """
    
    user_pool_arn: str = dataclasses.field()
    user_pool_client_id: str = dataclasses.field()
    user_pool_domain: str = dataclasses.field()
    authentication_request_extra_params: Optional[dict[str, str]] = dataclasses.field(default=None)
    on_unauthenticated_request: Optional[shared_authenticatecognitoactionconditionalbehaviorenum_enum.AuthenticateCognitoActionConditionalBehaviorEnumEnum] = dataclasses.field(default=None)
    scope: Optional[str] = dataclasses.field(default=None)
    session_cookie_name: Optional[str] = dataclasses.field(default=None)
    session_timeout: Optional[int] = dataclasses.field(default=None)
    
