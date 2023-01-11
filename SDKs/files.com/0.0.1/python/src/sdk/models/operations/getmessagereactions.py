import dataclasses
from typing import Optional
from ..shared import messagereactionentity as shared_messagereactionentity


@dataclasses.dataclass
class GetMessageReactionsQueryParams:
    message_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessageReactionsRequest:
    query_params: GetMessageReactionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageReactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_reaction_entities: Optional[list[shared_messagereactionentity.MessageReactionEntity]] = dataclasses.field(default=None)
    
