import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listsharedprojectsinput as shared_listsharedprojectsinput
from ..shared import listsharedprojectsoutput as shared_listsharedprojectsoutput


@dataclasses.dataclass
class ListSharedProjectsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListSharedProjectsXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_LIST_SHARED_PROJECTS = "CodeBuild_20161006.ListSharedProjects"


@dataclasses.dataclass
class ListSharedProjectsHeaders:
    x_amz_target: ListSharedProjectsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSharedProjectsRequest:
    headers: ListSharedProjectsHeaders = dataclasses.field()
    query_params: ListSharedProjectsQueryParams = dataclasses.field()
    request: shared_listsharedprojectsinput.ListSharedProjectsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListSharedProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    list_shared_projects_output: Optional[shared_listsharedprojectsoutput.ListSharedProjectsOutput] = dataclasses.field(default=None)
    
