import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroupdeleteoption_enum as shared_gameservergroupdeleteoption_enum


@dataclass_json
@dataclasses.dataclass
class DeleteGameServerGroupInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    delete_option: Optional[shared_gameservergroupdeleteoption_enum.GameServerGroupDeleteOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteOption') }})
    
