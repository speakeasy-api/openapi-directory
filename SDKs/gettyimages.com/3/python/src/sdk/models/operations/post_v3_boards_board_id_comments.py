import dataclasses
from typing import Optional
from ..shared import commentrequest as shared_commentrequest
from ..shared import commentcreated as shared_commentcreated


@dataclasses.dataclass
class PostV3BoardsBoardIDCommentsPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV3BoardsBoardIDCommentsRequest:
    path_params: PostV3BoardsBoardIDCommentsPathParams = dataclasses.field()
    request: Optional[shared_commentrequest.CommentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV3BoardsBoardIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_created: Optional[shared_commentcreated.CommentCreated] = dataclasses.field(default=None)
    
