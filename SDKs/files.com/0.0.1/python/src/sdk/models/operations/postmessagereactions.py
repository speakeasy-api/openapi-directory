import dataclasses
from typing import Optional
from ..shared import messagereactionentity as shared_messagereactionentity


@dataclasses.dataclass
class PostMessageReactionsRequestBody:
    emoji: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'emoji' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostMessageReactionsRequest:
    request: Optional[PostMessageReactionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostMessageReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_reaction_entity: Optional[shared_messagereactionentity.MessageReactionEntity] = dataclasses.field(default=None)
    
