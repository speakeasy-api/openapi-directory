import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createworkspacesrequest as shared_createworkspacesrequest
from ..shared import createworkspacesresult as shared_createworkspacesresult

class CreateWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_CREATE_WORKSPACES = "WorkspacesService.CreateWorkspaces"


@dataclasses.dataclass
class CreateWorkspacesHeaders:
    x_amz_target: CreateWorkspacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWorkspacesRequest:
    headers: CreateWorkspacesHeaders = dataclasses.field()
    request: shared_createworkspacesrequest.CreateWorkspacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_workspaces_result: Optional[shared_createworkspacesresult.CreateWorkspacesResult] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
