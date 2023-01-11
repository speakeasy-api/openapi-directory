import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getidentityproviderbyidentifierrequest as shared_getidentityproviderbyidentifierrequest
from ..shared import getidentityproviderbyidentifierresponse as shared_getidentityproviderbyidentifierresponse

class GetIdentityProviderByIdentifierXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_IDENTITY_PROVIDER_BY_IDENTIFIER = "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier"


@dataclasses.dataclass
class GetIdentityProviderByIdentifierHeaders:
    x_amz_target: GetIdentityProviderByIdentifierXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIdentityProviderByIdentifierRequest:
    headers: GetIdentityProviderByIdentifierHeaders = dataclasses.field()
    request: shared_getidentityproviderbyidentifierrequest.GetIdentityProviderByIdentifierRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetIdentityProviderByIdentifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_identity_provider_by_identifier_response: Optional[shared_getidentityproviderbyidentifierresponse.GetIdentityProviderByIdentifierResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
