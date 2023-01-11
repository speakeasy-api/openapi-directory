import dataclasses
from typing import Optional
from ..shared import requestentity as shared_requestentity


@dataclasses.dataclass
class PostRequestsRequestBody:
    destination: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'destination' }})
    path: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'path' }})
    group_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    user_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclasses.dataclass
class PostRequestsRequest:
    request: PostRequestsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    request_entity: Optional[shared_requestentity.RequestEntity] = dataclasses.field(default=None)
    
