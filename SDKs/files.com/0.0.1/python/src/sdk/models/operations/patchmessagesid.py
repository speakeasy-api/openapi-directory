import dataclasses
from typing import Optional
from ..shared import messageentity as shared_messageentity


@dataclasses.dataclass
class PatchMessagesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchMessagesIDRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    project_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'project_id' }})
    subject: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'subject' }})
    

@dataclasses.dataclass
class PatchMessagesIDRequest:
    path_params: PatchMessagesIDPathParams = dataclasses.field()
    request: PatchMessagesIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchMessagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_entity: Optional[shared_messageentity.MessageEntity] = dataclasses.field(default=None)
    
