import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetaGetOctocatQueryParams:
    s: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 's', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MetaGetOctocatRequest:
    query_params: MetaGetOctocatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MetaGetOctocatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    meta_get_octocat_200_application_octocat_stream_string: Optional[str] = dataclasses.field(default=None)
    
