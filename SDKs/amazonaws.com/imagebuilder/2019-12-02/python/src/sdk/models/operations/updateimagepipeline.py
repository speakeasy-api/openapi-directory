import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineexecutionstartcondition_enum as shared_pipelineexecutionstartcondition_enum
from ..shared import updateimagepipelineresponse as shared_updateimagepipelineresponse


@dataclasses.dataclass
class UpdateImagePipelineHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateImagePipelineRequestBodyImageTestsConfiguration:
    r"""UpdateImagePipelineRequestBodyImageTestsConfiguration
    Image tests configuration.
    """
    
    image_tests_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTestsEnabled') }})
    timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMinutes') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateImagePipelineRequestBodySchedule:
    r"""UpdateImagePipelineRequestBodySchedule
    A schedule configures how often and when a pipeline will automatically create a new image.
    """
    
    pipeline_execution_start_condition: Optional[shared_pipelineexecutionstartcondition_enum.PipelineExecutionStartConditionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionStartCondition') }})
    schedule_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleExpression') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
class UpdateImagePipelineRequestBodyStatusEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateImagePipelineRequestBody:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    image_pipeline_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePipelineArn') }})
    infrastructure_configuration_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfigurationArn') }})
    container_recipe_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipeArn') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    distribution_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfigurationArn') }})
    enhanced_image_metadata_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedImageMetadataEnabled') }})
    image_recipe_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRecipeArn') }})
    image_tests_configuration: Optional[UpdateImagePipelineRequestBodyImageTestsConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTestsConfiguration') }})
    schedule: Optional[UpdateImagePipelineRequestBodySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    status: Optional[UpdateImagePipelineRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class UpdateImagePipelineRequest:
    headers: UpdateImagePipelineHeaders = dataclasses.field()
    request: UpdateImagePipelineRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateImagePipelineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call_rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    client_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    update_image_pipeline_response: Optional[shared_updateimagepipelineresponse.UpdateImagePipelineResponse] = dataclasses.field(default=None)
    
