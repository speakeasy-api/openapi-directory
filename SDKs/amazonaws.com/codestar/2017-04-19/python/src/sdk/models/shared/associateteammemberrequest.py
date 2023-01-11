import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateTeamMemberRequest:
    project_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRole') }})
    user_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userArn') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    remote_access_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessAllowed') }})
    
