import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatedeploymentgroupinput as shared_updatedeploymentgroupinput
from ..shared import updatedeploymentgroupoutput as shared_updatedeploymentgroupoutput

class UpdateDeploymentGroupXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_UPDATE_DEPLOYMENT_GROUP = "CodeDeploy_20141006.UpdateDeploymentGroup"


@dataclasses.dataclass
class UpdateDeploymentGroupHeaders:
    x_amz_target: UpdateDeploymentGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDeploymentGroupRequest:
    headers: UpdateDeploymentGroupHeaders = dataclasses.field()
    request: shared_updatedeploymentgroupinput.UpdateDeploymentGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeploymentGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    alarms_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    ecs_service_mapping_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_alarm_config_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_auto_rollback_config_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_auto_scaling_group_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_blue_green_deployment_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_style_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_ec2_tag_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_ec2_tag_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_ecs_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_load_balancer_info_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_on_premises_tag_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tag_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_group_pair_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_trigger_config_exception: Optional[Any] = dataclasses.field(default=None)
    lifecycle_hook_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    tag_set_list_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    trigger_targets_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    update_deployment_group_output: Optional[shared_updatedeploymentgroupoutput.UpdateDeploymentGroupOutput] = dataclasses.field(default=None)
    
