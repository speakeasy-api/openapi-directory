import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission as shared_permission
from ..shared import createpipelineresponse as shared_createpipelineresponse


@dataclasses.dataclass
class CreatePipelineHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePipelineRequestBodyContentConfig:
    r"""CreatePipelineRequestBodyContentConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePipelineRequestBodyNotifications:
    r"""CreatePipelineRequestBodyNotifications
    <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    """
    
    completed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    progressing: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Progressing') }})
    warning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePipelineRequestBodyThumbnailConfig:
    r"""CreatePipelineRequestBodyThumbnailConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePipelineRequestBody:
    input_bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputBucket') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    aws_kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKeyArn') }})
    content_config: Optional[CreatePipelineRequestBodyContentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentConfig') }})
    notifications: Optional[CreatePipelineRequestBodyNotifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notifications') }})
    output_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputBucket') }})
    thumbnail_config: Optional[CreatePipelineRequestBodyThumbnailConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailConfig') }})
    

@dataclasses.dataclass
class CreatePipelineRequest:
    headers: CreatePipelineHeaders = dataclasses.field()
    request: CreatePipelineRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePipelineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_pipeline_response: Optional[shared_createpipelineresponse.CreatePipelineResponse] = dataclasses.field(default=None)
    incompatible_version_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
