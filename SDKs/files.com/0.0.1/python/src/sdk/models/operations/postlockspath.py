import dataclasses
from typing import Optional
from ..shared import lockentity as shared_lockentity


@dataclasses.dataclass
class PostLocksPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostLocksPathRequestBody:
    allow_access_by_any_user: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'allow_access_by_any_user' }})
    exclusive: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'exclusive' }})
    recursive: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timeout' }})
    

@dataclasses.dataclass
class PostLocksPathRequest:
    path_params: PostLocksPathPathParams = dataclasses.field()
    request: Optional[PostLocksPathRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostLocksPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lock_entity: Optional[shared_lockentity.LockEntity] = dataclasses.field(default=None)
    
