import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getcredentialsforidentityinput as shared_getcredentialsforidentityinput
from ..shared import getcredentialsforidentityresponse as shared_getcredentialsforidentityresponse

class GetCredentialsForIdentityXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_SERVICE_GET_CREDENTIALS_FOR_IDENTITY = "AWSCognitoIdentityService.GetCredentialsForIdentity"


@dataclasses.dataclass
class GetCredentialsForIdentityHeaders:
    x_amz_target: GetCredentialsForIdentityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCredentialsForIdentityRequest:
    headers: GetCredentialsForIdentityHeaders = dataclasses.field()
    request: shared_getcredentialsforidentityinput.GetCredentialsForIdentityInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetCredentialsForIdentityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    external_service_exception: Optional[Any] = dataclasses.field(default=None)
    get_credentials_for_identity_response: Optional[shared_getcredentialsforidentityresponse.GetCredentialsForIdentityResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_identity_pool_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
