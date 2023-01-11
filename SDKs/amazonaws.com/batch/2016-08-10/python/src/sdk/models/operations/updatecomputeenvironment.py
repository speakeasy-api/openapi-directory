import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatecomputeenvironmentresponse as shared_updatecomputeenvironmentresponse


@dataclasses.dataclass
class UpdateComputeEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateComputeEnvironmentRequestBodyComputeResources:
    r"""UpdateComputeEnvironmentRequestBodyComputeResources
    An object representing the attributes of a compute environment that can be updated. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html\">Compute Environments</a> in the <i>Batch User Guide</i>.
    """
    
    desiredv_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredvCpus') }})
    maxv_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxvCpus') }})
    minv_cpus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minvCpus') }})
    security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    subnets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    
class UpdateComputeEnvironmentRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateComputeEnvironmentRequestBody:
    compute_environment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironment') }})
    compute_resources: Optional[UpdateComputeEnvironmentRequestBodyComputeResources] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResources') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    state: Optional[UpdateComputeEnvironmentRequestBodyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclasses.dataclass
class UpdateComputeEnvironmentRequest:
    headers: UpdateComputeEnvironmentHeaders = dataclasses.field()
    request: UpdateComputeEnvironmentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateComputeEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    update_compute_environment_response: Optional[shared_updatecomputeenvironmentresponse.UpdateComputeEnvironmentResponse] = dataclasses.field(default=None)
    
