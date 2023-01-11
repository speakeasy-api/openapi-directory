import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetdeploymentsinput as shared_batchgetdeploymentsinput
from ..shared import batchgetdeploymentsoutput as shared_batchgetdeploymentsoutput

class BatchGetDeploymentsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_DEPLOYMENTS = "CodeDeploy_20141006.BatchGetDeployments"


@dataclasses.dataclass
class BatchGetDeploymentsHeaders:
    x_amz_target: BatchGetDeploymentsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetDeploymentsRequest:
    headers: BatchGetDeploymentsHeaders = dataclasses.field()
    request: shared_batchgetdeploymentsinput.BatchGetDeploymentsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetDeploymentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_deployments_output: Optional[shared_batchgetdeploymentsoutput.BatchGetDeploymentsOutput] = dataclasses.field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    
