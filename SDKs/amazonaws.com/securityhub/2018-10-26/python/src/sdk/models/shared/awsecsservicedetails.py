import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsservicecapacityproviderstrategydetails as shared_awsecsservicecapacityproviderstrategydetails
from ..shared import awsecsservicedeploymentconfigurationdetails as shared_awsecsservicedeploymentconfigurationdetails
from ..shared import awsecsservicedeploymentcontrollerdetails as shared_awsecsservicedeploymentcontrollerdetails
from ..shared import awsecsserviceloadbalancersdetails as shared_awsecsserviceloadbalancersdetails
from ..shared import awsecsservicenetworkconfigurationdetails as shared_awsecsservicenetworkconfigurationdetails
from ..shared import awsecsserviceplacementconstraintsdetails as shared_awsecsserviceplacementconstraintsdetails
from ..shared import awsecsserviceplacementstrategiesdetails as shared_awsecsserviceplacementstrategiesdetails
from ..shared import awsecsserviceserviceregistriesdetails as shared_awsecsserviceserviceregistriesdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsServiceDetails:
    r"""AwsEcsServiceDetails
    Provides details about a service within an ECS cluster.
    """
    
    capacity_provider_strategy: Optional[list[shared_awsecsservicecapacityproviderstrategydetails.AwsEcsServiceCapacityProviderStrategyDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviderStrategy') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cluster') }})
    deployment_configuration: Optional[shared_awsecsservicedeploymentconfigurationdetails.AwsEcsServiceDeploymentConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentConfiguration') }})
    deployment_controller: Optional[shared_awsecsservicedeploymentcontrollerdetails.AwsEcsServiceDeploymentControllerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentController') }})
    desired_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredCount') }})
    enable_ecs_managed_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableEcsManagedTags') }})
    enable_execute_command: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableExecuteCommand') }})
    health_check_grace_period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckGracePeriodSeconds') }})
    launch_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchType') }})
    load_balancers: Optional[list[shared_awsecsserviceloadbalancersdetails.AwsEcsServiceLoadBalancersDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    network_configuration: Optional[shared_awsecsservicenetworkconfigurationdetails.AwsEcsServiceNetworkConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    placement_constraints: Optional[list[shared_awsecsserviceplacementconstraintsdetails.AwsEcsServicePlacementConstraintsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    placement_strategies: Optional[list[shared_awsecsserviceplacementstrategiesdetails.AwsEcsServicePlacementStrategiesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStrategies') }})
    platform_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformVersion') }})
    propagate_tags: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropagateTags') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    scheduling_strategy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchedulingStrategy') }})
    service_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_registries: Optional[list[shared_awsecsserviceserviceregistriesdetails.AwsEcsServiceServiceRegistriesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRegistries') }})
    task_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDefinition') }})
    
