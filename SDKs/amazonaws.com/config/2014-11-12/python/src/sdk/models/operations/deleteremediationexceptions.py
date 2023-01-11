import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteremediationexceptionsrequest as shared_deleteremediationexceptionsrequest
from ..shared import deleteremediationexceptionsresponse as shared_deleteremediationexceptionsresponse

class DeleteRemediationExceptionsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_REMEDIATION_EXCEPTIONS = "StarlingDoveService.DeleteRemediationExceptions"


@dataclasses.dataclass
class DeleteRemediationExceptionsHeaders:
    x_amz_target: DeleteRemediationExceptionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRemediationExceptionsRequest:
    headers: DeleteRemediationExceptionsHeaders = dataclasses.field()
    request: shared_deleteremediationexceptionsrequest.DeleteRemediationExceptionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRemediationExceptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_remediation_exceptions_response: Optional[shared_deleteremediationexceptionsresponse.DeleteRemediationExceptionsResponse] = dataclasses.field(default=None)
    no_such_remediation_exception_exception: Optional[Any] = dataclasses.field(default=None)
    
