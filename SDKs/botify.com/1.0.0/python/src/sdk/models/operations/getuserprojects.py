import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import project as shared_project
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUserProjectsPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserProjectsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserProjects200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    results: Optional[list[shared_project.Project]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclasses.dataclass
class GetUserProjectsRequest:
    path_params: GetUserProjectsPathParams = dataclasses.field()
    query_params: GetUserProjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    get_user_projects_200_application_json_object: Optional[GetUserProjects200ApplicationJSON] = dataclasses.field(default=None)
    
