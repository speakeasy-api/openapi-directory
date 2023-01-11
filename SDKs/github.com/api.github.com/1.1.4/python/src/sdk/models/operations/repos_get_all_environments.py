import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment


@dataclasses.dataclass
class ReposGetAllEnvironmentsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposGetAllEnvironments200ApplicationJSON:
    environments: Optional[list[shared_environment.Environment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ReposGetAllEnvironmentsRequest:
    path_params: ReposGetAllEnvironmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetAllEnvironmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repos_get_all_environments_200_application_json_object: Optional[ReposGetAllEnvironments200ApplicationJSON] = dataclasses.field(default=None)
    
