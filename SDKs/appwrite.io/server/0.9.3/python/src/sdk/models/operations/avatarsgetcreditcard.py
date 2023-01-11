import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AvatarsGetCreditCardPathParams:
    code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AvatarsGetCreditCardQueryParams:
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AvatarsGetCreditCardSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AvatarsGetCreditCardRequest:
    path_params: AvatarsGetCreditCardPathParams = dataclasses.field()
    query_params: AvatarsGetCreditCardQueryParams = dataclasses.field()
    security: AvatarsGetCreditCardSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AvatarsGetCreditCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
