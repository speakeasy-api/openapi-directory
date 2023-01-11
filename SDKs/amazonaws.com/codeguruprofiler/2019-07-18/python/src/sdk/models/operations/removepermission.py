import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import removepermissionresponse as shared_removepermissionresponse

class RemovePermissionActionGroupEnum(str, Enum):
    AGENT_PERMISSIONS = "agentPermissions"


@dataclasses.dataclass
class RemovePermissionPathParams:
    action_group: RemovePermissionActionGroupEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'actionGroup', 'style': 'simple', 'explode': False }})
    profiling_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemovePermissionQueryParams:
    revision_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'revisionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RemovePermissionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemovePermissionRequest:
    headers: RemovePermissionHeaders = dataclasses.field()
    path_params: RemovePermissionPathParams = dataclasses.field()
    query_params: RemovePermissionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RemovePermissionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    remove_permission_response: Optional[shared_removepermissionresponse.RemovePermissionResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
