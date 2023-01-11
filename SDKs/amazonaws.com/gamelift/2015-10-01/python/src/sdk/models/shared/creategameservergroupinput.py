import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gameservergroupautoscalingpolicy as shared_gameservergroupautoscalingpolicy
from ..shared import balancingstrategy_enum as shared_balancingstrategy_enum
from ..shared import gameserverprotectionpolicy_enum as shared_gameserverprotectionpolicy_enum
from ..shared import instancedefinition as shared_instancedefinition
from ..shared import launchtemplatespecification as shared_launchtemplatespecification
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateGameServerGroupInput:
    game_server_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    instance_definitions: list[shared_instancedefinition.InstanceDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceDefinitions') }})
    launch_template: shared_launchtemplatespecification.LaunchTemplateSpecification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchTemplate') }})
    max_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSize') }})
    min_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSize') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    auto_scaling_policy: Optional[shared_gameservergroupautoscalingpolicy.GameServerGroupAutoScalingPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingPolicy') }})
    balancing_strategy: Optional[shared_balancingstrategy_enum.BalancingStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BalancingStrategy') }})
    game_server_protection_policy: Optional[shared_gameserverprotectionpolicy_enum.GameServerProtectionPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerProtectionPolicy') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcSubnets') }})
    
