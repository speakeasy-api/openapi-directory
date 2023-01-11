import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DeleteAttachmentPathParams:
    attachment_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachment_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAttachmentQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteAttachment200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DeleteAttachmentRequest:
    path_params: DeleteAttachmentPathParams = dataclasses.field()
    query_params: DeleteAttachmentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    delete_attachment_200_application_json_object: Optional[DeleteAttachment200ApplicationJSON] = dataclasses.field(default=None)
    
