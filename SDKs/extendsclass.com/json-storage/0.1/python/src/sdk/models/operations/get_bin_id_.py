import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetBinIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBinIDRequest:
    path_params: GetBinIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBinIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    get_bin_id_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
