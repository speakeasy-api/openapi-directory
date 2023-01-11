import dataclasses
from enum import Enum

class GetSearchAspectIDFullsearchAspectIDEnum(str, Enum):
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
class GetSearchAspectIDFullsearchPathParams:
    aspect_id: GetSearchAspectIDFullsearchAspectIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'aspectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchAspectIDFullsearchQueryParams:
    e: int = dataclasses.field(metadata={'query_param': { 'field_name': 'e', 'style': 'form', 'explode': True }})
    l_frag: int = dataclasses.field(metadata={'query_param': { 'field_name': 'lFrag', 'style': 'form', 'explode': True }})
    n_frag: int = dataclasses.field(metadata={'query_param': { 'field_name': 'nFrag', 'style': 'form', 'explode': True }})
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    s: str = dataclasses.field(metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchAspectIDFullsearchRequest:
    path_params: GetSearchAspectIDFullsearchPathParams = dataclasses.field()
    query_params: GetSearchAspectIDFullsearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchAspectIDFullsearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
