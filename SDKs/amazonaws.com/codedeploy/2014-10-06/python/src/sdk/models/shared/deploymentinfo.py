import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorollbackconfiguration as shared_autorollbackconfiguration
from ..shared import bluegreendeploymentconfiguration as shared_bluegreendeploymentconfiguration
from ..shared import computeplatform_enum as shared_computeplatform_enum
from ..shared import deploymentcreator_enum as shared_deploymentcreator_enum
from ..shared import deploymentoverview as shared_deploymentoverview
from ..shared import deploymentstyle as shared_deploymentstyle
from ..shared import errorinformation as shared_errorinformation
from ..shared import fileexistsbehavior_enum as shared_fileexistsbehavior_enum
from ..shared import loadbalancerinfo as shared_loadbalancerinfo
from ..shared import revisionlocation as shared_revisionlocation
from ..shared import relateddeployments as shared_relateddeployments
from ..shared import rollbackinfo as shared_rollbackinfo
from ..shared import deploymentstatus_enum as shared_deploymentstatus_enum
from ..shared import targetinstances as shared_targetinstances


@dataclass_json
@dataclasses.dataclass
class DeploymentInfo:
    r"""DeploymentInfo
    Information about a deployment.
    """
    
    additional_deployment_status_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalDeploymentStatusInfo') }})
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    auto_rollback_configuration: Optional[shared_autorollbackconfiguration.AutoRollbackConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackConfiguration') }})
    blue_green_deployment_configuration: Optional[shared_bluegreendeploymentconfiguration.BlueGreenDeploymentConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenDeploymentConfiguration') }})
    complete_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compute_platform: Optional[shared_computeplatform_enum.ComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    create_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: Optional[shared_deploymentcreator_enum.DeploymentCreatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    deployment_config_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    deployment_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_overview: Optional[shared_deploymentoverview.DeploymentOverview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentOverview') }})
    deployment_status_messages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatusMessages') }})
    deployment_style: Optional[shared_deploymentstyle.DeploymentStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStyle') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_information: Optional[shared_errorinformation.ErrorInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInformation') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    file_exists_behavior: Optional[shared_fileexistsbehavior_enum.FileExistsBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExistsBehavior') }})
    ignore_application_stop_failures: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreApplicationStopFailures') }})
    instance_termination_wait_time_started: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTerminationWaitTimeStarted') }})
    load_balancer_info: Optional[shared_loadbalancerinfo.LoadBalancerInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerInfo') }})
    previous_revision: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousRevision') }})
    related_deployments: Optional[shared_relateddeployments.RelatedDeployments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedDeployments') }})
    revision: Optional[shared_revisionlocation.RevisionLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    rollback_info: Optional[shared_rollbackinfo.RollbackInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackInfo') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_deploymentstatus_enum.DeploymentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_instances: Optional[shared_targetinstances.TargetInstances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstances') }})
    update_outdated_instances_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOutdatedInstancesOnly') }})
    
