import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnectionsummary as shared_environmentaccountconnectionsummary


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentAccountConnectionsOutput:
    environment_account_connections: list[shared_environmentaccountconnectionsummary.EnvironmentAccountConnectionSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnections') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
