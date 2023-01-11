import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import validateresourcepolicyrequest as shared_validateresourcepolicyrequest
from ..shared import validateresourcepolicyresponse as shared_validateresourcepolicyresponse

class ValidateResourcePolicyXAmzTargetEnum(str, Enum):
    SECRETSMANAGER_VALIDATE_RESOURCE_POLICY = "secretsmanager.ValidateResourcePolicy"


@dataclasses.dataclass
class ValidateResourcePolicyHeaders:
    x_amz_target: ValidateResourcePolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ValidateResourcePolicyRequest:
    headers: ValidateResourcePolicyHeaders = dataclasses.field()
    request: shared_validateresourcepolicyrequest.ValidateResourcePolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ValidateResourcePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_policy_document_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validate_resource_policy_response: Optional[shared_validateresourcepolicyresponse.ValidateResourcePolicyResponse] = dataclasses.field(default=None)
    
