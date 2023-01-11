import dataclasses
from typing import Optional
from ..shared import messagereactionentity as shared_messagereactionentity


@dataclasses.dataclass
class GetMessageReactionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessageReactionsIDRequest:
    path_params: GetMessageReactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessageReactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_reaction_entity: Optional[shared_messagereactionentity.MessageReactionEntity] = dataclasses.field(default=None)
    
