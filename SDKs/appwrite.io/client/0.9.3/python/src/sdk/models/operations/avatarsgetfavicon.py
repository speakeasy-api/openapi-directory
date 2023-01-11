import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetFaviconQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetFaviconSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetFaviconRequest:
    query_params: AvatarsGetFaviconQueryParams = dataclasses.field()
    security: AvatarsGetFaviconSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetFaviconResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
