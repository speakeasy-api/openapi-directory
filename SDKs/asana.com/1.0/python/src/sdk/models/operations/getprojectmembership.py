import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectmembershipresponse as shared_projectmembershipresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetProjectMembershipPathParams:
    project_membership_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectMembershipQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetProjectMembership200ApplicationJSON:
    data: Optional[shared_projectmembershipresponse.ProjectMembershipResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetProjectMembershipRequest:
    path_params: GetProjectMembershipPathParams = dataclasses.field()
    query_params: GetProjectMembershipQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectMembershipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_project_membership_200_application_json_object: Optional[GetProjectMembership200ApplicationJSON] = dataclasses.field(default=None)
    
