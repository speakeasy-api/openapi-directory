import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchgetonpremisesinstancesinput as shared_batchgetonpremisesinstancesinput
from ..shared import batchgetonpremisesinstancesoutput as shared_batchgetonpremisesinstancesoutput

class BatchGetOnPremisesInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_ON_PREMISES_INSTANCES = "CodeDeploy_20141006.BatchGetOnPremisesInstances"


@dataclasses.dataclass
class BatchGetOnPremisesInstancesHeaders:
    x_amz_target: BatchGetOnPremisesInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchGetOnPremisesInstancesRequest:
    headers: BatchGetOnPremisesInstancesHeaders = dataclasses.field()
    request: shared_batchgetonpremisesinstancesinput.BatchGetOnPremisesInstancesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchGetOnPremisesInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_get_on_premises_instances_output: Optional[shared_batchgetonpremisesinstancesoutput.BatchGetOnPremisesInstancesOutput] = dataclasses.field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    instance_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_instance_name_exception: Optional[Any] = dataclasses.field(default=None)
    
