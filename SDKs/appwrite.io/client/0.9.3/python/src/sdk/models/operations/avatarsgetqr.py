import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetQrQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    margin: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'margin', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetQrSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetQrRequest:
    query_params: AvatarsGetQrQueryParams = dataclasses.field()
    security: AvatarsGetQrSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetQrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
