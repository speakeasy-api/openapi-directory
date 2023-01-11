import dataclasses
from typing import Optional
from ..shared import messagecommententity as shared_messagecommententity


@dataclasses.dataclass
class GetMessageCommentsQueryParams:
    message_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessageCommentsRequest:
    query_params: GetMessageCommentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_entities: Optional[list[shared_messagecommententity.MessageCommentEntity]] = dataclasses.field(default=None)
    
