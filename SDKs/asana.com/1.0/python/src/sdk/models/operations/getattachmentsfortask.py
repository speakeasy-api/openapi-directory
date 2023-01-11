import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachmentcompact as shared_attachmentcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetAttachmentsForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAttachmentsForTaskQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAttachmentsForTask200ApplicationJSON:
    data: Optional[list[shared_attachmentcompact.AttachmentCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetAttachmentsForTaskRequest:
    path_params: GetAttachmentsForTaskPathParams = dataclasses.field()
    query_params: GetAttachmentsForTaskQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAttachmentsForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_attachments_for_task_200_application_json_object: Optional[GetAttachmentsForTask200ApplicationJSON] = dataclasses.field(default=None)
    
