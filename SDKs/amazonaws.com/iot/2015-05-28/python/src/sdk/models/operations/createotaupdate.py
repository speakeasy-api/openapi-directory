import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsjobabortcriteria as shared_awsjobabortcriteria
from ..shared import awsjobexponentialrolloutrate as shared_awsjobexponentialrolloutrate
from ..shared import otaupdatefile as shared_otaupdatefile
from ..shared import protocol_enum as shared_protocol_enum
from ..shared import tag as shared_tag
from ..shared import createotaupdateresponse as shared_createotaupdateresponse


@dataclasses.dataclass
class CreateOtaUpdatePathParams:
    ota_update_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'otaUpdateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateOtaUpdateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateRequestBodyAwsJobAbortConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobAbortConfig
    The criteria that determine when and how a job abort takes place.
    """
    
    abort_criteria_list: Optional[list[shared_awsjobabortcriteria.AwsJobAbortCriteria]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortCriteriaList') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
    Configuration for the rollout of OTA updates.
    """
    
    exponential_rate: Optional[shared_awsjobexponentialrolloutrate.AwsJobExponentialRolloutRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig
    Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
    """
    
    expires_in_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresInSec') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobTimeoutConfig
    Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    
class CreateOtaUpdateRequestBodyTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclasses.dataclass
class CreateOtaUpdateRequestBody:
    files: list[shared_otaupdatefile.OtaUpdateFile] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    targets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    additional_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalParameters') }})
    aws_job_abort_config: Optional[CreateOtaUpdateRequestBodyAwsJobAbortConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobAbortConfig') }})
    aws_job_executions_rollout_config: Optional[CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobExecutionsRolloutConfig') }})
    aws_job_presigned_url_config: Optional[CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobPresignedUrlConfig') }})
    aws_job_timeout_config: Optional[CreateOtaUpdateRequestBodyAwsJobTimeoutConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobTimeoutConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    protocols: Optional[list[shared_protocol_enum.ProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target_selection: Optional[CreateOtaUpdateRequestBodyTargetSelectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSelection') }})
    

@dataclasses.dataclass
class CreateOtaUpdateRequest:
    headers: CreateOtaUpdateHeaders = dataclasses.field()
    path_params: CreateOtaUpdatePathParams = dataclasses.field()
    request: CreateOtaUpdateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOtaUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_ota_update_response: Optional[shared_createotaupdateresponse.CreateOtaUpdateResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
