import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleterepositorypolicyrequest as shared_deleterepositorypolicyrequest
from ..shared import deleterepositorypolicyresponse as shared_deleterepositorypolicyresponse

class DeleteRepositoryPolicyXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_DELETE_REPOSITORY_POLICY = "SpencerFrontendService.DeleteRepositoryPolicy"


@dataclasses.dataclass
class DeleteRepositoryPolicyHeaders:
    x_amz_target: DeleteRepositoryPolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepositoryPolicyRequest:
    headers: DeleteRepositoryPolicyHeaders = dataclasses.field()
    request: shared_deleterepositorypolicyrequest.DeleteRepositoryPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteRepositoryPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_repository_policy_response: Optional[shared_deleterepositorypolicyresponse.DeleteRepositoryPolicyResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    repository_policy_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
