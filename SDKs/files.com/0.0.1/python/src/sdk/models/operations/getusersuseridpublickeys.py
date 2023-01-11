import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class GetUsersUserIDPublicKeysPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDPublicKeysQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDPublicKeysRequest:
    path_params: GetUsersUserIDPublicKeysPathParams = dataclasses.field()
    query_params: GetUsersUserIDPublicKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDPublicKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entities: Optional[list[shared_publickeyentity.PublicKeyEntity]] = dataclasses.field(default=None)
    
