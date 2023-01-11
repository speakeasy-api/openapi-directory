import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import confirmforgotpasswordrequest as shared_confirmforgotpasswordrequest

class ConfirmForgotPasswordXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_FORGOT_PASSWORD = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"


@dataclasses.dataclass
class ConfirmForgotPasswordHeaders:
    x_amz_target: ConfirmForgotPasswordXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfirmForgotPasswordRequest:
    headers: ConfirmForgotPasswordHeaders = dataclasses.field()
    request: shared_confirmforgotpasswordrequest.ConfirmForgotPasswordRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConfirmForgotPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    confirm_forgot_password_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    expired_code_exception: Optional[Any] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lambda_response_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_password_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_failed_attempts_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unexpected_lambda_exception: Optional[Any] = dataclasses.field(default=None)
    user_lambda_validation_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_confirmed_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
