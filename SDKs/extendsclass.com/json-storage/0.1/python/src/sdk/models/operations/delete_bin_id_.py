import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteBinIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBinIDRequest:
    path_params: DeleteBinIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBinIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_status: Optional[Any] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    
