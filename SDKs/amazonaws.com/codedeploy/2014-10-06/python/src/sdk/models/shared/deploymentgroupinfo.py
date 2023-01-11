import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmconfiguration as shared_alarmconfiguration
from ..shared import autorollbackconfiguration as shared_autorollbackconfiguration
from ..shared import autoscalinggroup as shared_autoscalinggroup
from ..shared import bluegreendeploymentconfiguration as shared_bluegreendeploymentconfiguration
from ..shared import computeplatform_enum as shared_computeplatform_enum
from ..shared import deploymentstyle as shared_deploymentstyle
from ..shared import ec2tagfilter as shared_ec2tagfilter
from ..shared import ec2tagset as shared_ec2tagset
from ..shared import ecsservice as shared_ecsservice
from ..shared import lastdeploymentinfo as shared_lastdeploymentinfo
from ..shared import loadbalancerinfo as shared_loadbalancerinfo
from ..shared import tagfilter as shared_tagfilter
from ..shared import onpremisestagset as shared_onpremisestagset
from ..shared import outdatedinstancesstrategy_enum as shared_outdatedinstancesstrategy_enum
from ..shared import revisionlocation as shared_revisionlocation
from ..shared import triggerconfig as shared_triggerconfig


@dataclass_json
@dataclasses.dataclass
class DeploymentGroupInfo:
    r"""DeploymentGroupInfo
    Information about a deployment group.
    """
    
    alarm_configuration: Optional[shared_alarmconfiguration.AlarmConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmConfiguration') }})
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    auto_rollback_configuration: Optional[shared_autorollbackconfiguration.AutoRollbackConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    auto_scaling_groups: Optional[list[shared_autoscalinggroup.AutoScalingGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    blue_green_deployment_configuration: Optional[shared_bluegreendeploymentconfiguration.BlueGreenDeploymentConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenDeploymentConfiguration') }})
    compute_platform: Optional[shared_computeplatform_enum.ComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    deployment_config_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupId') }})
    deployment_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    deployment_style: Optional[shared_deploymentstyle.DeploymentStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStyle') }})
    ec2_tag_filters: Optional[list[shared_ec2tagfilter.Ec2TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagFilters') }})
    ec2_tag_set: Optional[shared_ec2tagset.Ec2TagSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSet') }})
    ecs_services: Optional[list[shared_ecsservice.EcsService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsServices') }})
    last_attempted_deployment: Optional[shared_lastdeploymentinfo.LastDeploymentInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptedDeployment') }})
    last_successful_deployment: Optional[shared_lastdeploymentinfo.LastDeploymentInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSuccessfulDeployment') }})
    load_balancer_info: Optional[shared_loadbalancerinfo.LoadBalancerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerInfo') }})
    on_premises_instance_tag_filters: Optional[list[shared_tagfilter.TagFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesInstanceTagFilters') }})
    on_premises_tag_set: Optional[shared_onpremisestagset.OnPremisesTagSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesTagSet') }})
    outdated_instances_strategy: Optional[shared_outdatedinstancesstrategy_enum.OutdatedInstancesStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outdatedInstancesStrategy') }})
    service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleArn') }})
    target_revision: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRevision') }})
    trigger_configurations: Optional[list[shared_triggerconfig.TriggerConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfigurations') }})
    
