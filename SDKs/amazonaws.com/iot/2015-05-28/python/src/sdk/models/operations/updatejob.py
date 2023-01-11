import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abortcriteria as shared_abortcriteria
from ..shared import exponentialrolloutrate as shared_exponentialrolloutrate


@dataclasses.dataclass
class UpdateJobPathParams:
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateJobQueryParams:
    namespace_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'namespaceId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJobRequestBodyAbortConfig:
    r"""UpdateJobRequestBodyAbortConfig
    The criteria that determine when and how a job abort takes place.
    """
    
    criteria_list: Optional[list[shared_abortcriteria.AbortCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteriaList') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJobRequestBodyJobExecutionsRolloutConfig:
    r"""UpdateJobRequestBodyJobExecutionsRolloutConfig
    Allows you to create a staged rollout of a job.
    """
    
    exponential_rate: Optional[shared_exponentialrolloutrate.ExponentialRolloutRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJobRequestBodyPresignedURLConfig:
    r"""UpdateJobRequestBodyPresignedURLConfig
    Configuration for pre-signed S3 URLs.
    """
    
    expires_in_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresInSec') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJobRequestBodyTimeoutConfig:
    r"""UpdateJobRequestBodyTimeoutConfig
    Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJobRequestBody:
    abort_config: Optional[UpdateJobRequestBodyAbortConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    job_executions_rollout_config: Optional[UpdateJobRequestBodyJobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    presigned_url_config: Optional[UpdateJobRequestBodyPresignedURLConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presignedUrlConfig') }})
    timeout_config: Optional[UpdateJobRequestBodyTimeoutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    

@dataclasses.dataclass
class UpdateJobRequest:
    headers: UpdateJobHeaders = dataclasses.field()
    path_params: UpdateJobPathParams = dataclasses.field()
    query_params: UpdateJobQueryParams = dataclasses.field()
    request: UpdateJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
