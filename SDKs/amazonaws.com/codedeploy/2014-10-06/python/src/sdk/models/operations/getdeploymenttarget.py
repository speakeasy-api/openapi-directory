import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdeploymenttargetinput as shared_getdeploymenttargetinput
from ..shared import getdeploymenttargetoutput as shared_getdeploymenttargetoutput

class GetDeploymentTargetXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_DEPLOYMENT_TARGET = "CodeDeploy_20141006.GetDeploymentTarget"


@dataclasses.dataclass
class GetDeploymentTargetHeaders:
    x_amz_target: GetDeploymentTargetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentTargetRequest:
    headers: GetDeploymentTargetHeaders = dataclasses.field()
    request: shared_getdeploymenttargetinput.GetDeploymentTargetInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDeploymentTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_not_started_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_target_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_target_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    get_deployment_target_output: Optional[shared_getdeploymenttargetoutput.GetDeploymentTargetOutput] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_target_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_name_exception: Optional[Any] = dataclasses.field(default=None)
    
