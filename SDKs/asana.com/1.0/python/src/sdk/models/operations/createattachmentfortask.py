import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachmentresponse as shared_attachmentresponse
from ..shared import attachmentrequest as shared_attachmentrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateAttachmentForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAttachmentForTaskQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAttachmentForTask200ApplicationJSON:
    data: Optional[shared_attachmentresponse.AttachmentResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateAttachmentForTaskRequest:
    path_params: CreateAttachmentForTaskPathParams = dataclasses.field()
    query_params: CreateAttachmentForTaskQueryParams = dataclasses.field()
    request: shared_attachmentrequest.AttachmentRequest = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateAttachmentForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_attachment_for_task_200_application_json_object: Optional[CreateAttachmentForTask200ApplicationJSON] = dataclasses.field(default=None)
    
