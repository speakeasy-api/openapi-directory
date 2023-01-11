import dataclasses
from typing import Optional
from ..shared import messageentity as shared_messageentity


@dataclasses.dataclass
class PostMessagesRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    project_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'project_id' }})
    subject: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'subject' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostMessagesRequest:
    request: Optional[PostMessagesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_entity: Optional[shared_messageentity.MessageEntity] = dataclasses.field(default=None)
    
