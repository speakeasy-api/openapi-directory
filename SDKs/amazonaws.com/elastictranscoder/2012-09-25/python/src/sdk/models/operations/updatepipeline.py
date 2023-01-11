import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission as shared_permission
from ..shared import updatepipelineresponse as shared_updatepipelineresponse


@dataclasses.dataclass
class UpdatePipelinePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePipelineHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePipelineRequestBodyContentConfig:
    r"""UpdatePipelineRequestBodyContentConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePipelineRequestBodyNotifications:
    r"""UpdatePipelineRequestBodyNotifications
    <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
    """
    
    completed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    progressing: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Progressing') }})
    warning: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warning') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePipelineRequestBodyThumbnailConfig:
    r"""UpdatePipelineRequestBodyThumbnailConfig
    The <code>PipelineOutputConfig</code> structure.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    permissions: Optional[list[shared_permission.Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    storage_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdatePipelineRequestBody:
    aws_kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsKmsKeyArn') }})
    content_config: Optional[UpdatePipelineRequestBodyContentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentConfig') }})
    input_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputBucket') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    notifications: Optional[UpdatePipelineRequestBodyNotifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notifications') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    thumbnail_config: Optional[UpdatePipelineRequestBodyThumbnailConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailConfig') }})
    

@dataclasses.dataclass
class UpdatePipelineRequest:
    headers: UpdatePipelineHeaders = dataclasses.field()
    path_params: UpdatePipelinePathParams = dataclasses.field()
    request: UpdatePipelineRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePipelineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    incompatible_version_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_pipeline_response: Optional[shared_updatepipelineresponse.UpdatePipelineResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
