import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterGameServerInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    game_server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerId') }})
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    connection_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionInfo') }})
    game_server_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerData') }})
    
