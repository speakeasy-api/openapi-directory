import dataclasses
from typing import Optional


@dataclasses.dataclass
class HeadKeyPkPathParams:
    pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HeadKeyPkRequest:
    path_params: HeadKeyPkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class HeadKeyPkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
