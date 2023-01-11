import dataclasses
from typing import Optional
from ..shared import usercipheruseentity as shared_usercipheruseentity


@dataclasses.dataclass
class GetUsersUserIDCipherUsesPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDCipherUsesQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDCipherUsesRequest:
    path_params: GetUsersUserIDCipherUsesPathParams = dataclasses.field()
    query_params: GetUsersUserIDCipherUsesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDCipherUsesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_cipher_use_entities: Optional[list[shared_usercipheruseentity.UserCipherUseEntity]] = dataclasses.field(default=None)
    
