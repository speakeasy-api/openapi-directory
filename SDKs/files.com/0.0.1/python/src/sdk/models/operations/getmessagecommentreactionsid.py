import dataclasses
from typing import Optional
from ..shared import messagecommentreactionentity as shared_messagecommentreactionentity


@dataclasses.dataclass
class GetMessageCommentReactionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessageCommentReactionsIDRequest:
    path_params: GetMessageCommentReactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageCommentReactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_comment_reaction_entity: Optional[shared_messagecommentreactionentity.MessageCommentReactionEntity] = dataclasses.field(default=None)
    
