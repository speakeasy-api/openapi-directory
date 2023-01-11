import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getopenidtokenfordeveloperidentityinput as shared_getopenidtokenfordeveloperidentityinput
from ..shared import getopenidtokenfordeveloperidentityresponse as shared_getopenidtokenfordeveloperidentityresponse

class GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"


@dataclasses.dataclass
class GetOpenIDTokenForDeveloperIdentityHeaders:
    x_amz_target: GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOpenIDTokenForDeveloperIdentityRequest:
    headers: GetOpenIDTokenForDeveloperIdentityHeaders = dataclasses.field()
    request: shared_getopenidtokenfordeveloperidentityinput.GetOpenIDTokenForDeveloperIdentityInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOpenIDTokenForDeveloperIdentityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    developer_user_already_registered_exception: Optional[Any] = dataclasses.field(default=None)
    get_open_id_token_for_developer_identity_response: Optional[shared_getopenidtokenfordeveloperidentityresponse.GetOpenIDTokenForDeveloperIdentityResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
