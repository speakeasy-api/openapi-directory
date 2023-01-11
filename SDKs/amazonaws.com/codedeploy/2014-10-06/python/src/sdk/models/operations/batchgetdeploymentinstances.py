import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetdeploymentinstancesinput as shared_batchgetdeploymentinstancesinput
from ..shared import batchgetdeploymentinstancesoutput as shared_batchgetdeploymentinstancesoutput

class BatchGetDeploymentInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_DEPLOYMENT_INSTANCES = "CodeDeploy_20141006.BatchGetDeploymentInstances"


@dataclasses.dataclass
class BatchGetDeploymentInstancesHeaders:
    x_amz_target: BatchGetDeploymentInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetDeploymentInstancesRequest:
    headers: BatchGetDeploymentInstancesHeaders = dataclasses.field()
    request: shared_batchgetdeploymentinstancesinput.BatchGetDeploymentInstancesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetDeploymentInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_deployment_instances_output: Optional[shared_batchgetdeploymentinstancesoutput.BatchGetDeploymentInstancesOutput] = dataclasses.field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    instance_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_compute_platform_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_name_exception: Optional[Any] = dataclasses.field(default=None)
    
