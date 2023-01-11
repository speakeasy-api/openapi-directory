import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdeploymentconfiginput as shared_getdeploymentconfiginput
from ..shared import getdeploymentconfigoutput as shared_getdeploymentconfigoutput

class GetDeploymentConfigXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_DEPLOYMENT_CONFIG = "CodeDeploy_20141006.GetDeploymentConfig"


@dataclasses.dataclass
class GetDeploymentConfigHeaders:
    x_amz_target: GetDeploymentConfigXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentConfigRequest:
    headers: GetDeploymentConfigHeaders = dataclasses.field()
    request: shared_getdeploymentconfiginput.GetDeploymentConfigInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDeploymentConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_config_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_config_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    get_deployment_config_output: Optional[shared_getdeploymentconfigoutput.GetDeploymentConfigOutput] = dataclasses.field(default=None)
    invalid_compute_platform_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = dataclasses.field(default=None)
    
