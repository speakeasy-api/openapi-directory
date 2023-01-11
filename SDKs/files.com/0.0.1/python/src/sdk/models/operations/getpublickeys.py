import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class GetPublicKeysQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPublicKeysRequest:
    query_params: GetPublicKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entities: Optional[list[shared_publickeyentity.PublicKeyEntity]] = dataclasses.field(default=None)
    
