import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getuserattributeverificationcoderequest as shared_getuserattributeverificationcoderequest
from ..shared import getuserattributeverificationcoderesponse as shared_getuserattributeverificationcoderesponse

class GetUserAttributeVerificationCodeXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_ATTRIBUTE_VERIFICATION_CODE = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"


@dataclasses.dataclass
class GetUserAttributeVerificationCodeHeaders:
    x_amz_target: GetUserAttributeVerificationCodeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserAttributeVerificationCodeRequest:
    headers: GetUserAttributeVerificationCodeHeaders = dataclasses.field()
    request: shared_getuserattributeverificationcoderequest.GetUserAttributeVerificationCodeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetUserAttributeVerificationCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_delivery_failure_exception: Optional[Any] = dataclasses.field(default=None)
    get_user_attribute_verification_code_response: Optional[shared_getuserattributeverificationcoderesponse.GetUserAttributeVerificationCodeResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_email_role_access_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lambda_response_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sms_role_access_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sms_role_trust_relationship_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    password_reset_required_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unexpected_lambda_exception: Optional[Any] = dataclasses.field(default=None)
    user_lambda_validation_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_confirmed_exception: Optional[Any] = dataclasses.field(default=None)
    user_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
