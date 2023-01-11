import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskcountresponse as shared_taskcountresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTaskCountsForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaskCountsForProjectQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTaskCountsForProject200ApplicationJSON:
    data: Optional[shared_taskcountresponse.TaskCountResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTaskCountsForProjectRequest:
    path_params: GetTaskCountsForProjectPathParams = dataclasses.field()
    query_params: GetTaskCountsForProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTaskCountsForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_task_counts_for_project_200_application_json_object: Optional[GetTaskCountsForProject200ApplicationJSON] = dataclasses.field(default=None)
    
