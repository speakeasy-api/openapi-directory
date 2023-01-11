import dataclasses
from typing import Optional
from ..shared import messagecommentreactionentity as shared_messagecommentreactionentity


@dataclasses.dataclass
class PostMessageCommentReactionsRequestBody:
    emoji: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'emoji' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostMessageCommentReactionsRequest:
    request: Optional[PostMessageCommentReactionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostMessageCommentReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_reaction_entity: Optional[shared_messagecommentreactionentity.MessageCommentReactionEntity] = dataclasses.field(default=None)
    
