import dataclasses
from typing import Optional
from ..shared import messagecommentreactionentity as shared_messagecommentreactionentity


@dataclasses.dataclass
class GetMessageCommentReactionsQueryParams:
    message_comment_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'message_comment_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessageCommentReactionsRequest:
    query_params: GetMessageCommentReactionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageCommentReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_reaction_entities: Optional[list[shared_messagecommentreactionentity.MessageCommentReactionEntity]] = dataclasses.field(default=None)
    
