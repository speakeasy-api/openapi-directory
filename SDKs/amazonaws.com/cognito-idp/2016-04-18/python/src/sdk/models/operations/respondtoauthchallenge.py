import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import respondtoauthchallengerequest as shared_respondtoauthchallengerequest
from ..shared import respondtoauthchallengeresponse as shared_respondtoauthchallengeresponse

class RespondToAuthChallengeXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_RESPOND_TO_AUTH_CHALLENGE = "AWSCognitoIdentityProviderService.RespondToAuthChallenge"


@dataclasses.dataclass
class RespondToAuthChallengeHeaders:
    x_amz_target: RespondToAuthChallengeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RespondToAuthChallengeRequest:
    headers: RespondToAuthChallengeHeaders = dataclasses.field()
    request: shared_respondtoauthchallengerequest.RespondToAuthChallengeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RespondToAuthChallengeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    alias_exists_exception: Optional[Any] = dataclasses.field(default=None)
    code_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    expired_code_exception: Optional[Any] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lambda_response_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_password_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sms_role_access_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sms_role_trust_relationship_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_user_pool_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    mfa_method_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    password_reset_required_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    respond_to_auth_challenge_response: Optional[shared_respondtoauthchallengeresponse.RespondToAuthChallengeResponse] = dataclasses.field(default=None)
    software_token_mfa_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unexpected_lambda_exception: Optional[Any] = dataclasses.field(default=None)
    user_lambda_validation_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_confirmed_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
