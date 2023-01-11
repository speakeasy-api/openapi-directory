import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registerworkspacedirectoryrequest as shared_registerworkspacedirectoryrequest

class RegisterWorkspaceDirectoryXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_REGISTER_WORKSPACE_DIRECTORY = "WorkspacesService.RegisterWorkspaceDirectory"


@dataclasses.dataclass
class RegisterWorkspaceDirectoryHeaders:
    x_amz_target: RegisterWorkspaceDirectoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterWorkspaceDirectoryRequest:
    headers: RegisterWorkspaceDirectoryHeaders = dataclasses.field()
    request: shared_registerworkspacedirectoryrequest.RegisterWorkspaceDirectoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterWorkspaceDirectoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_state_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    register_workspace_directory_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_network_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    workspaces_default_role_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
