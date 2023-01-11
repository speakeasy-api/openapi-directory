import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import message as shared_message


@dataclasses.dataclass
class GetMessagesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessagesIDRequest:
    path_params: GetMessagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    message: Optional[shared_message.Message] = dataclasses.field(default=None)
    
