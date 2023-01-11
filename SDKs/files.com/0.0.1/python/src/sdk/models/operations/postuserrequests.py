import dataclasses
from typing import Optional
from ..shared import userrequestentity as shared_userrequestentity


@dataclasses.dataclass
class PostUserRequestsRequestBody:
    details: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'details' }})
    email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'email' }})
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class PostUserRequestsRequest:
    request: PostUserRequestsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUserRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_request_entity: Optional[shared_userrequestentity.UserRequestEntity] = dataclasses.field(default=None)
    
