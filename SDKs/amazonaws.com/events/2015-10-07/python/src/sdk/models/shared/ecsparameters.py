import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityproviderstrategyitem as shared_capacityproviderstrategyitem
from ..shared import launchtype_enum as shared_launchtype_enum
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import placementconstraint as shared_placementconstraint
from ..shared import placementstrategy as shared_placementstrategy
from ..shared import propagatetags_enum as shared_propagatetags_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class EcsParameters:
    r"""EcsParameters
    The custom parameters to be used when the target is an Amazon ECS task.
    """
    
    task_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDefinitionArn') }})
    capacity_provider_strategy: Optional[list[shared_capacityproviderstrategyitem.CapacityProviderStrategyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviderStrategy') }})
    enable_ecs_managed_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableECSManagedTags') }})
    enable_execute_command: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableExecuteCommand') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    launch_type: Optional[shared_launchtype_enum.LaunchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchType') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    placement_constraints: Optional[list[shared_placementconstraint.PlacementConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    placement_strategy: Optional[list[shared_placementstrategy.PlacementStrategy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStrategy') }})
    platform_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformVersion') }})
    propagate_tags: Optional[shared_propagatetags_enum.PropagateTagsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropagateTags') }})
    reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    task_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskCount') }})
    
