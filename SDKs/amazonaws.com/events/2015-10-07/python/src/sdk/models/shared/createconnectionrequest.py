import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createconnectionauthrequestparameters as shared_createconnectionauthrequestparameters
from ..shared import connectionauthorizationtype_enum as shared_connectionauthorizationtype_enum


@dataclass_json
@dataclasses.dataclass
class CreateConnectionRequest:
    auth_parameters: shared_createconnectionauthrequestparameters.CreateConnectionAuthRequestParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthParameters') }})
    authorization_type: shared_connectionauthorizationtype_enum.ConnectionAuthorizationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
