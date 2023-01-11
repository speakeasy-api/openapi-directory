import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createdeploymentinput as shared_createdeploymentinput
from ..shared import createdeploymentoutput as shared_createdeploymentoutput

class CreateDeploymentXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_DEPLOYMENT = "CodeDeploy_20141006.CreateDeployment"


@dataclasses.dataclass
class CreateDeploymentHeaders:
    x_amz_target: CreateDeploymentXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = dataclasses.field()
    request: shared_createdeploymentinput.CreateDeploymentInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    create_deployment_output: Optional[shared_createdeploymentoutput.CreateDeploymentOutput] = dataclasses.field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_group_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    description_too_long_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_auto_rollback_config_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_auto_scaling_group_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_file_exists_behavior_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_git_hub_account_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_ignore_application_stop_failures_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_load_balancer_info_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_revision_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_target_instances_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_update_outdated_instances_only_value_exception: Optional[Any] = dataclasses.field(default=None)
    revision_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    revision_required_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
