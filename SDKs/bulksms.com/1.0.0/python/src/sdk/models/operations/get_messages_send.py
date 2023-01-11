import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import message as shared_message


@dataclasses.dataclass
class GetMessagesSendQueryParams:
    body: str = dataclasses.field(metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    to: str = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    deduplication_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deduplication-id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessagesSendSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetMessagesSendRequest:
    query_params: GetMessagesSendQueryParams = dataclasses.field()
    security: GetMessagesSendSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    
