import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import stopworkspacesrequest as shared_stopworkspacesrequest
from ..shared import stopworkspacesresult as shared_stopworkspacesresult

class StopWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_STOP_WORKSPACES = "WorkspacesService.StopWorkspaces"


@dataclasses.dataclass
class StopWorkspacesHeaders:
    x_amz_target: StopWorkspacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopWorkspacesRequest:
    headers: StopWorkspacesHeaders = dataclasses.field()
    request: shared_stopworkspacesrequest.StopWorkspacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StopWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_workspaces_result: Optional[shared_stopworkspacesresult.StopWorkspacesResult] = dataclasses.field(default=None)
    
