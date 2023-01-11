import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import startworkspacesrequest as shared_startworkspacesrequest
from ..shared import startworkspacesresult as shared_startworkspacesresult

class StartWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_START_WORKSPACES = "WorkspacesService.StartWorkspaces"


@dataclasses.dataclass
class StartWorkspacesHeaders:
    x_amz_target: StartWorkspacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartWorkspacesRequest:
    headers: StartWorkspacesHeaders = dataclasses.field()
    request: shared_startworkspacesrequest.StartWorkspacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    start_workspaces_result: Optional[shared_startworkspacesresult.StartWorkspacesResult] = dataclasses.field(default=None)
    
