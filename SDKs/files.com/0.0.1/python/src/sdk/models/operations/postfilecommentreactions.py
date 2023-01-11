import dataclasses
from typing import Optional
from ..shared import filecommentreactionentity as shared_filecommentreactionentity


@dataclasses.dataclass
class PostFileCommentReactionsRequestBody:
    emoji: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'emoji' }})
    file_comment_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file_comment_id' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostFileCommentReactionsRequest:
    request: Optional[PostFileCommentReactionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostFileCommentReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_comment_reaction_entity: Optional[shared_filecommentreactionentity.FileCommentReactionEntity] = dataclasses.field(default=None)
    
