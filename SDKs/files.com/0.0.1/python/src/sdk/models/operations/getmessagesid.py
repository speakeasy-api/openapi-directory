import dataclasses
from typing import Optional
from ..shared import messageentity as shared_messageentity


@dataclasses.dataclass
class GetMessagesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessagesIDRequest:
    path_params: GetMessagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_entity: Optional[shared_messageentity.MessageEntity] = dataclasses.field(default=None)
    
