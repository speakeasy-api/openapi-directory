import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnectionrequesteraccounttype_enum as shared_environmentaccountconnectionrequesteraccounttype_enum
from ..shared import environmentaccountconnectionstatus_enum as shared_environmentaccountconnectionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentAccountConnectionsInput:
    requested_by: shared_environmentaccountconnectionrequesteraccounttype_enum.EnvironmentAccountConnectionRequesterAccountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedBy') }})
    environment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    statuses: Optional[list[shared_environmentaccountconnectionstatus_enum.EnvironmentAccountConnectionStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
