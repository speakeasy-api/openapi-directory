import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroupaction_enum as shared_gameservergroupaction_enum


@dataclass_json
@dataclasses.dataclass
class ResumeGameServerGroupInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    resume_actions: list[shared_gameservergroupaction_enum.GameServerGroupActionEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResumeActions') }})
    
