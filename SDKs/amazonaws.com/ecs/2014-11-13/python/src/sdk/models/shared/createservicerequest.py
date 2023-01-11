import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityproviderstrategyitem as shared_capacityproviderstrategyitem
from ..shared import deploymentconfiguration as shared_deploymentconfiguration
from ..shared import deploymentcontroller as shared_deploymentcontroller
from ..shared import launchtype_enum as shared_launchtype_enum
from ..shared import loadbalancer as shared_loadbalancer
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import placementconstraint as shared_placementconstraint
from ..shared import placementstrategy as shared_placementstrategy
from ..shared import propagatetags_enum as shared_propagatetags_enum
from ..shared import schedulingstrategy_enum as shared_schedulingstrategy_enum
from ..shared import serviceregistry as shared_serviceregistry
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateServiceRequest:
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    capacity_provider_strategy: Optional[list[shared_capacityproviderstrategyitem.CapacityProviderStrategyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    deployment_configuration: Optional[shared_deploymentconfiguration.DeploymentConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfiguration') }})
    deployment_controller: Optional[shared_deploymentcontroller.DeploymentController] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentController') }})
    desired_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCount') }})
    enable_ecs_managed_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableECSManagedTags') }})
    enable_execute_command: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    health_check_grace_period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheckGracePeriodSeconds') }})
    launch_type: Optional[shared_launchtype_enum.LaunchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[list[shared_loadbalancer.LoadBalancer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    placement_constraints: Optional[list[shared_placementconstraint.PlacementConstraint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementConstraints') }})
    placement_strategy: Optional[list[shared_placementstrategy.PlacementStrategy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategy') }})
    platform_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    propagate_tags: Optional[shared_propagatetags_enum.PropagateTagsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    scheduling_strategy: Optional[shared_schedulingstrategy_enum.SchedulingStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingStrategy') }})
    service_registries: Optional[list[shared_serviceregistry.ServiceRegistry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    
