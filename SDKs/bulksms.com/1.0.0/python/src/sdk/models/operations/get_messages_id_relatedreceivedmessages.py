import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import message as shared_message


@dataclasses.dataclass
class GetMessagesIDRelatedReceivedMessagesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessagesIDRelatedReceivedMessagesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetMessagesIDRelatedReceivedMessagesRequest:
    path_params: GetMessagesIDRelatedReceivedMessagesPathParams = dataclasses.field()
    security: GetMessagesIDRelatedReceivedMessagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesIDRelatedReceivedMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    
