import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class MgetInfoPathParams:
    info_array: list[str] = dataclasses.field(metadata={'path_param': { 'field_name': 'infoArray', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MgetInfoRequest:
    path_params: MgetInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MgetInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    mget_info_200_application_json_objects: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
