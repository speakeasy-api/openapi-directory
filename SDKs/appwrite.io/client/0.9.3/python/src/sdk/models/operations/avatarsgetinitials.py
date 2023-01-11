import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetInitialsQueryParams:
    background: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetInitialsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetInitialsRequest:
    query_params: AvatarsGetInitialsQueryParams = dataclasses.field()
    security: AvatarsGetInitialsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetInitialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
