import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectstatuscompact as shared_projectstatuscompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetProjectStatusesForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectStatusesForProjectQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetProjectStatusesForProject200ApplicationJSON:
    data: Optional[list[shared_projectstatuscompact.ProjectStatusCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetProjectStatusesForProjectRequest:
    path_params: GetProjectStatusesForProjectPathParams = dataclasses.field()
    query_params: GetProjectStatusesForProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectStatusesForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_project_statuses_for_project_200_application_json_object: Optional[GetProjectStatusesForProject200ApplicationJSON] = dataclasses.field(default=None)
    
