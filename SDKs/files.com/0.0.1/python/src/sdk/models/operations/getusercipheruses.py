import dataclasses
from typing import Optional
from ..shared import usercipheruseentity as shared_usercipheruseentity


@dataclasses.dataclass
class GetUserCipherUsesQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserCipherUsesRequest:
    query_params: GetUserCipherUsesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserCipherUsesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_cipher_use_entities: Optional[list[shared_usercipheruseentity.UserCipherUseEntity]] = dataclasses.field(default=None)
    
