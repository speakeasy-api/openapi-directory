import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createuserdefinedfunctionrequest as shared_createuserdefinedfunctionrequest

class CreateUserDefinedFunctionXAmzTargetEnum(str, Enum):
    AWS_GLUE_CREATE_USER_DEFINED_FUNCTION = "AWSGlue.CreateUserDefinedFunction"


@dataclasses.dataclass
class CreateUserDefinedFunctionHeaders:
    x_amz_target: CreateUserDefinedFunctionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUserDefinedFunctionRequest:
    headers: CreateUserDefinedFunctionHeaders = dataclasses.field()
    request: shared_createuserdefinedfunctionrequest.CreateUserDefinedFunctionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateUserDefinedFunctionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    create_user_defined_function_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    glue_encryption_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
