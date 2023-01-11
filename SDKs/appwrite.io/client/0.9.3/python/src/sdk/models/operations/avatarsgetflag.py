import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetFlagPathParams:
    code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AvatarsGetFlagQueryParams:
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetFlagSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetFlagRequest:
    path_params: AvatarsGetFlagPathParams = dataclasses.field()
    query_params: AvatarsGetFlagQueryParams = dataclasses.field()
    security: AvatarsGetFlagSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetFlagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
