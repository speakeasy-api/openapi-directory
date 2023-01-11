import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import message as shared_message

class GetMessagesSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"


@dataclasses.dataclass
class GetMessagesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetMessagesSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessagesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetMessagesRequest:
    query_params: GetMessagesQueryParams = dataclasses.field()
    security: GetMessagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    
