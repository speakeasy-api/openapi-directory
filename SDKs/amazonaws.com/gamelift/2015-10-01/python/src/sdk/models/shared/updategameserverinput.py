import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameserverhealthcheck_enum as shared_gameserverhealthcheck_enum
from ..shared import gameserverutilizationstatus_enum as shared_gameserverutilizationstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateGameServerInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    game_server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerId') }})
    game_server_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerData') }})
    health_check: Optional[shared_gameserverhealthcheck_enum.GameServerHealthCheckEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    utilization_status: Optional[shared_gameserverutilizationstatus_enum.GameServerUtilizationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UtilizationStatus') }})
    
