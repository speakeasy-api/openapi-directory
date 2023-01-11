import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetImageQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetImageSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetImageRequest:
    query_params: AvatarsGetImageQueryParams = dataclasses.field()
    security: AvatarsGetImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
