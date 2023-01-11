import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class PostAs2KeysRequestBody:
    as2_partnership_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    public_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostAs2KeysRequest:
    request: Optional[PostAs2KeysRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAs2KeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entity: Optional[shared_as2keyentity.As2KeyEntity] = dataclasses.field(default=None)
    
