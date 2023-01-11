import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class GetAs2KeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAs2KeysIDRequest:
    path_params: GetAs2KeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAs2KeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entity: Optional[shared_as2keyentity.As2KeyEntity] = dataclasses.field(default=None)
    
