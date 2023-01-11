import dataclasses
from typing import Optional
from ..shared import messagecommententity as shared_messagecommententity


@dataclasses.dataclass
class PostMessageCommentsRequestBody:
    body: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'body' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostMessageCommentsRequest:
    request: Optional[PostMessageCommentsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostMessageCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_entity: Optional[shared_messagecommententity.MessageCommentEntity] = dataclasses.field(default=None)
    
