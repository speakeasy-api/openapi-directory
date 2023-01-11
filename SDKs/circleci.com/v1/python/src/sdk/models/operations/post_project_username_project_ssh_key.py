import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class PostProjectUsernameProjectSSHKeyContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"


@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyHeaders:
    content_type: PostProjectUsernameProjectSSHKeyContentTypeEnum = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyRequestBody:
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    

@dataclass_json
@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyDefaultApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyRequest:
    headers: PostProjectUsernameProjectSSHKeyHeaders = dataclasses.field()
    path_params: PostProjectUsernameProjectSSHKeyPathParams = dataclasses.field()
    request: PostProjectUsernameProjectSSHKeyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostProjectUsernameProjectSSHKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_project_username_project_ssh_key_default_application_json_object: Optional[PostProjectUsernameProjectSSHKeyDefaultApplicationJSON] = dataclasses.field(default=None)
    
