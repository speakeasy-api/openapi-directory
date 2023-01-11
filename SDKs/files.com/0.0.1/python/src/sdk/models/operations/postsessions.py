import dataclasses
from typing import Optional
from ..shared import sessionentity as shared_sessionentity


@dataclasses.dataclass
class PostSessionsRequestBody:
    otp: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'otp' }})
    partial_session_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'partial_session_id' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class PostSessionsRequest:
    request: Optional[PostSessionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    session_entity: Optional[shared_sessionentity.SessionEntity] = dataclasses.field(default=None)
    
