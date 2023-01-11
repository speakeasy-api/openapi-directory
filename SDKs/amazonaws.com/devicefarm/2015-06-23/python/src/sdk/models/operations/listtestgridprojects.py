import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtestgridprojectsrequest as shared_listtestgridprojectsrequest
from ..shared import listtestgridprojectsresult as shared_listtestgridprojectsresult


@dataclasses.dataclass
class ListTestGridProjectsQueryParams:
    max_result: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResult', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListTestGridProjectsXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_LIST_TEST_GRID_PROJECTS = "DeviceFarm_20150623.ListTestGridProjects"


@dataclasses.dataclass
class ListTestGridProjectsHeaders:
    x_amz_target: ListTestGridProjectsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTestGridProjectsRequest:
    headers: ListTestGridProjectsHeaders = dataclasses.field()
    query_params: ListTestGridProjectsQueryParams = dataclasses.field()
    request: shared_listtestgridprojectsrequest.ListTestGridProjectsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTestGridProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    argument_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    list_test_grid_projects_result: Optional[shared_listtestgridprojectsresult.ListTestGridProjectsResult] = dataclasses.field(default=None)
    
