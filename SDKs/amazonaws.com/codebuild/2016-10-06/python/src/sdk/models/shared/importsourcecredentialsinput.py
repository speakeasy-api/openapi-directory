import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authtype_enum as shared_authtype_enum
from ..shared import servertype_enum as shared_servertype_enum


@dataclass_json
@dataclasses.dataclass
class ImportSourceCredentialsInput:
    auth_type: shared_authtype_enum.AuthTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    server_type: shared_servertype_enum.ServerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    should_overwrite: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shouldOverwrite') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
