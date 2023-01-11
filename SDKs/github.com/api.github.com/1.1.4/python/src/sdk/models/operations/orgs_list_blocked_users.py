import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class OrgsListBlockedUsersPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsListBlockedUsers415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class OrgsListBlockedUsersRequest:
    path_params: OrgsListBlockedUsersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListBlockedUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    orgs_list_blocked_users_415_application_json_object: Optional[OrgsListBlockedUsers415ApplicationJSON] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
