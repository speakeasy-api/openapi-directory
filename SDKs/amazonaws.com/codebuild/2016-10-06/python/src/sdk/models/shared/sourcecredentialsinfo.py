import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authtype_enum as shared_authtype_enum
from ..shared import servertype_enum as shared_servertype_enum


@dataclass_json
@dataclasses.dataclass
class SourceCredentialsInfo:
    r"""SourceCredentialsInfo
     Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. 
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    auth_type: Optional[shared_authtype_enum.AuthTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    server_type: Optional[shared_servertype_enum.ServerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    
