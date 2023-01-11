import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class PatchAs2KeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAs2KeysIDRequestBody:
    as2_partnership_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    

@dataclasses.dataclass
class PatchAs2KeysIDRequest:
    path_params: PatchAs2KeysIDPathParams = dataclasses.field()
    request: PatchAs2KeysIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchAs2KeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entity: Optional[shared_as2keyentity.As2KeyEntity] = dataclasses.field(default=None)
    
