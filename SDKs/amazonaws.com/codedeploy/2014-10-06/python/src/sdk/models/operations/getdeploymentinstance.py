import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdeploymentinstanceinput as shared_getdeploymentinstanceinput
from ..shared import getdeploymentinstanceoutput as shared_getdeploymentinstanceoutput

class GetDeploymentInstanceXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_DEPLOYMENT_INSTANCE = "CodeDeploy_20141006.GetDeploymentInstance"


@dataclasses.dataclass
class GetDeploymentInstanceHeaders:
    x_amz_target: GetDeploymentInstanceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentInstanceRequest:
    headers: GetDeploymentInstanceHeaders = dataclasses.field()
    request: shared_getdeploymentinstanceinput.GetDeploymentInstanceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDeploymentInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    get_deployment_instance_output: Optional[shared_getdeploymentinstanceoutput.GetDeploymentInstanceOutput] = dataclasses.field(default=None)
    instance_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    instance_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_compute_platform_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_name_exception: Optional[Any] = dataclasses.field(default=None)
    
