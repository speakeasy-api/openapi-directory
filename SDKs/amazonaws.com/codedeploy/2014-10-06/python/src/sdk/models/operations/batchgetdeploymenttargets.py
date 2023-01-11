import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetdeploymenttargetsinput as shared_batchgetdeploymenttargetsinput
from ..shared import batchgetdeploymenttargetsoutput as shared_batchgetdeploymenttargetsoutput

class BatchGetDeploymentTargetsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_DEPLOYMENT_TARGETS = "CodeDeploy_20141006.BatchGetDeploymentTargets"


@dataclasses.dataclass
class BatchGetDeploymentTargetsHeaders:
    x_amz_target: BatchGetDeploymentTargetsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetDeploymentTargetsRequest:
    headers: BatchGetDeploymentTargetsHeaders = dataclasses.field()
    request: shared_batchgetdeploymenttargetsinput.BatchGetDeploymentTargetsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetDeploymentTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_deployment_targets_output: Optional[shared_batchgetdeploymenttargetsoutput.BatchGetDeploymentTargetsOutput] = dataclasses.field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_not_started_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_target_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_target_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_target_list_size_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    instance_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_target_id_exception: Optional[Any] = dataclasses.field(default=None)
    
