import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteProjectUsernameProjectBuildCachePathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteProjectUsernameProjectBuildCache200ApplicationJSON:
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectBuildCacheRequest:
    path_params: DeleteProjectUsernameProjectBuildCachePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectBuildCacheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_project_username_project_build_cache_200_application_json_object: Optional[DeleteProjectUsernameProjectBuildCache200ApplicationJSON] = dataclasses.field(default=None)
    
