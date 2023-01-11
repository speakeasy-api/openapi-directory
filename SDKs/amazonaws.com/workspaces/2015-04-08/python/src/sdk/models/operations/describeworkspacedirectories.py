import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeworkspacedirectoriesrequest as shared_describeworkspacedirectoriesrequest
from ..shared import describeworkspacedirectoriesresult as shared_describeworkspacedirectoriesresult


@dataclasses.dataclass
class DescribeWorkspaceDirectoriesQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeWorkspaceDirectoriesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_DIRECTORIES = "WorkspacesService.DescribeWorkspaceDirectories"


@dataclasses.dataclass
class DescribeWorkspaceDirectoriesHeaders:
    x_amz_target: DescribeWorkspaceDirectoriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeWorkspaceDirectoriesRequest:
    headers: DescribeWorkspaceDirectoriesHeaders = dataclasses.field()
    query_params: DescribeWorkspaceDirectoriesQueryParams = dataclasses.field()
    request: shared_describeworkspacedirectoriesrequest.DescribeWorkspaceDirectoriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeWorkspaceDirectoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_workspace_directories_result: Optional[shared_describeworkspacedirectoriesresult.DescribeWorkspaceDirectoriesResult] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    
