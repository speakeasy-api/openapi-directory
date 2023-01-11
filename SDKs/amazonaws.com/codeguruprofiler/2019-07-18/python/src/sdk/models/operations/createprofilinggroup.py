import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createprofilinggroupresponse as shared_createprofilinggroupresponse


@dataclasses.dataclass
class CreateProfilingGroupQueryParams:
    client_token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateProfilingGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProfilingGroupRequestBodyAgentOrchestrationConfig:
    r"""CreateProfilingGroupRequestBodyAgentOrchestrationConfig
     Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html\"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
    """
    
    profiling_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingEnabled') }})
    
class CreateProfilingGroupRequestBodyComputePlatformEnum(str, Enum):
    DEFAULT = "Default"
    AWS_LAMBDA = "AWSLambda"


@dataclass_json
@dataclasses.dataclass
class CreateProfilingGroupRequestBody:
    profiling_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingGroupName') }})
    agent_orchestration_config: Optional[CreateProfilingGroupRequestBodyAgentOrchestrationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentOrchestrationConfig') }})
    compute_platform: Optional[CreateProfilingGroupRequestBodyComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateProfilingGroupRequest:
    headers: CreateProfilingGroupHeaders = dataclasses.field()
    query_params: CreateProfilingGroupQueryParams = dataclasses.field()
    request: CreateProfilingGroupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProfilingGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_profiling_group_response: Optional[shared_createprofilinggroupresponse.CreateProfilingGroupResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
