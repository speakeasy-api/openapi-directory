import dataclasses
from enum import Enum

class GetContentAspectIDAspectIDEnum(str, Enum):
    COMPLETE = "complete"
    CORPREG = "corpreg"
    BCGAZ1 = "bcgaz1"
    BCGAZ2 = "bcgaz2"
    OIC = "oic"
    PSL = "psl"
    ECB = "ecb"
    HSCR = "hscr"
    ARCH_OIC = "arch_oic"


@dataclasses.dataclass
class GetContentAspectIDPathParams:
    aspect_id: GetContentAspectIDAspectIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'aspectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentAspectIDRequest:
    path_params: GetContentAspectIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentAspectIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
