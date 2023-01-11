import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import balancingstrategy_enum as shared_balancingstrategy_enum
from ..shared import gameserverprotectionpolicy_enum as shared_gameserverprotectionpolicy_enum
from ..shared import instancedefinition as shared_instancedefinition


@dataclass_json
@dataclasses.dataclass
class UpdateGameServerGroupInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    balancing_strategy: Optional[shared_balancingstrategy_enum.BalancingStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BalancingStrategy') }})
    game_server_protection_policy: Optional[shared_gameserverprotectionpolicy_enum.GameServerProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerProtectionPolicy') }})
    instance_definitions: Optional[list[shared_instancedefinition.InstanceDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceDefinitions') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
