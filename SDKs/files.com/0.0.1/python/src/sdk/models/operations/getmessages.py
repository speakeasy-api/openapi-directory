import dataclasses
from typing import Optional
from ..shared import messageentity as shared_messageentity


@dataclasses.dataclass
class GetMessagesQueryParams:
    project_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessagesRequest:
    query_params: GetMessagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    message_entities: Optional[list[shared_messageentity.MessageEntity]] = dataclasses.field(default=None)
    
