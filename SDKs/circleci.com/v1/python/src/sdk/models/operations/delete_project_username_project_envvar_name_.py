import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteProjectUsernameProjectEnvvarNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclasses.dataclass
class DeleteProjectUsernameProjectEnvvarName200ApplicationJSON:
    message: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectEnvvarNameRequest:
    path_params: DeleteProjectUsernameProjectEnvvarNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectUsernameProjectEnvvarNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_project_username_project_envvar_name_200_application_json_object: Optional[DeleteProjectUsernameProjectEnvvarName200ApplicationJSON] = dataclasses.field(default=None)
    
