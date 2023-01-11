import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletedeploymentgroupinput as shared_deletedeploymentgroupinput
from ..shared import deletedeploymentgroupoutput as shared_deletedeploymentgroupoutput

class DeleteDeploymentGroupXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_DEPLOYMENT_GROUP = "CodeDeploy_20141006.DeleteDeploymentGroup"


@dataclasses.dataclass
class DeleteDeploymentGroupHeaders:
    x_amz_target: DeleteDeploymentGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeploymentGroupRequest:
    headers: DeleteDeploymentGroupHeaders = dataclasses.field()
    request: shared_deletedeploymentgroupinput.DeleteDeploymentGroupInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteDeploymentGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    delete_deployment_group_output: Optional[shared_deletedeploymentgroupoutput.DeleteDeploymentGroupOutput] = dataclasses.field(default=None)
    deployment_group_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    
